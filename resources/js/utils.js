import { events } from "@/bus";
import { PDFDocument } from "pdf-lib";

export const notifError = (error, callback) => {
  // api http error
  if (error.status >= 500) {
    events.$emit("alert:open", {
      title: "Server Error",
      message: error.message,
    });
  } else if (error.status >= 400) {
    var message = data.message + ": ";
    for (var key in error.data.errors) {
      message += error.data.errors[key] + "\n";
    }

    events.$emit("alert:open", {
      title: "Server Error",
      message,	
    });
  }
  // argument error
  events.$emit("toaster", {
    type: "danger",
    message: error.message,
  });

  events.$on("toaster:close", callback);
  events.$on("alert:close", callback);
};

export const loadPdf = async (url) => {
  const data = await createBlobFromFile(url);
  const pdfdata = await createFileBlob(data);
  const pdfbin = convertDataURIToBinary(pdfdata);
  const pdfDocument = await PDFDocument.load(pdfbin);
  pdfdata = pdfx.createLoadingTask(pdfbin);
  return {
    pdfbin,
    pdfDoc: pdfDocument,
  };
};

export function createFileBlob(file) {
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

export function createBlobFromFile(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("x-api-key", "aMIhFatJnGJHRQFB6fwgM4R22Lfrajnkbi5B");
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error("Could not load image"));
      }
    };
    xhr.send();
  });
}

var BASE64_MARKER = ";base64,";

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

export function convertBinaryToDataURI(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export const joinUrlPath = (base, path) => {
  return new URL(path, base).href;
}