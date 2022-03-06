import { events } from "@/bus";
import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.js";
import PDFJSWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";

export const notifError = (error, callback) => {
  // api http error
  if (error.status >= 500) {
    events.$emit("alert:open", {
      title: error.statusText,
      message: error.message,
      button: "OK",
    });
  } else if (error.status >= 400) {
    let message = error.data.message.endsWith(".")
      ? error.data.message.split(".").filter(Boolean).join(" ")
      : error.data.message;

    let errors = error.data.errors;
    if (errors) {
      message += ": ";
      for (var key in errors) {
        let errMsg = errors[key];
        if (Array.isArray(errMsg)) {
          errMsg = errMsg.join(", ");
        }
        message += errMsg + "\n";
      }
    }

    events.$emit("alert:open", {
      title: error.statusText,
      message,
      button: "Retry",
    });
  } else {
    // argument error
    events.$emit("toaster", {
      type: "danger",
      message: error.message || error.statusText,
    });
  }
  if (callback) {
    events.$on("toaster:close", callback);
    events.$on("alert:close", callback);
    events.$on("popup:close", callback);
  }
};

export const loadPdf = async (url) => {
  const data = await getAsBlob(url);
  const blobUrl = await getBlobUrl(data);
  const blobData = convertDataURIToBinary(blobUrl);
  const pdfDocument = await PDFDocument.load(blobData);

  return {
    data: blobData,
    doc: pdfDocument,
    url: blobUrl,
  };
};
/**
 *
 * @param {Blob} file
 * @returns {Promise<string>}
 */
export function getBlobUrl(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (e) => {
      reject(e);
    };
    reader.readAsDataURL(file);
  });
}

/**
 *
 * @param {string} url
 * @returns {Promise<Blob>}
 */
export function getAsBlob(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("x-api-key", "aMIhFatJnGJHRQFB6fwgM4R22Lfrajnkbi5B");
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });
}

var BASE64_MARKER = ";base64,";

/**
 * convertDataURIToBinary - convert base64 to binary array
 * @param {string} dataURI
 * @returns {Uint8Array}
 */
export function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

export function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}

export const joinUrlPath = (base, path) => {
  return new URL(path, base).href;
};

export const createLoadingTask = (src) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;
  const loadingTask = pdfjsLib.getDocument(src);
  return loadingTask;
};

// Manipulate pdf page position
/**
 * Create an array of numbers for each pdf page canvas element
 * The canvas element has 'mb-5' class which value is 1.25rem or equal to 20px
 */
const MARGIN_BOTTOM = 20;
export const getPageSizes = (option) => {
  const { total, height } = option;
  const pageSizes = [...Array(total).keys()].map((i) => {
    const MARGIN_BOTTOM = 20;

    const page = i + 1;
    const start = height * i;
    const size = {
      page,
      height: {
        start,
        end: start + height,
      },
    };

    if (page === 1) {
      return size;
    }

    const marginBottom = MARGIN_BOTTOM * i;

    return {
      ...size,
      height: {
        start: start + marginBottom,
        end: start + height + marginBottom,
      },
    };
  });

  return pageSizes;
};

/**
 * This numbers is experimental, to match center coordinate of signature placement image
 * Need to recalculate if the image size is changed
 */
const OFFSET_X = 50;
const OFFSET_Y = 85;

export const getPageCoordinate = (pageSizes, coordinate) => {
  if (!Array.isArray(pageSizes) || !coordinate) {
    return null;
  }

  const offsetTop = coordinate.top + OFFSET_Y;

  const page = pageSizes.find((value) => {
    const { height } = value;
    console.log(height);
    // Mean that the coordinate is in the page area, not in the margin area
    const isExist = offsetTop >= height.start && offsetTop <= height.end;
    return isExist;
  });

  if (!page) {
    return null;
  }

  const y =
    coordinate.top -
    (pageSizes[0].height.end + MARGIN_BOTTOM) * (page.page - 1);

  return {
    y: y + OFFSET_Y,
    x: coordinate.left + OFFSET_X,
    page: page.page,
  };
};
