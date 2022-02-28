<template>
  <div
    v-if="isFullPreview"
    ref="filePreview"
    class="file-preview"
    tabindex="-1"
    @keydown.esc="closeFilePreview"
    @keydown.right="next"
    @keydown.left="prev"
  >
    <div class="toolbar">
      <div class="tool">
        <span>PDFJS + FabricJS + jsPDF</span>
      </div>
      <div class="tool">
        <label for="">Brush size</label>
        <input
          id="brush-size"
          type="number"
          class="form-control text-right"
          value="1"
          max="50"
        />
      </div>
      <div class="tool">
        <label for="">Font size</label>
        <select id="font-size" class="form-control">
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="16" selected>16</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value="48">48</option>
          <option value="64">64</option>
          <option value="72">72</option>
          <option value="108">108</option>
        </select>
      </div>
      <div class="tool">
        <button
          class="color-tool active"
          style="background-color: #212121"
        ></button>
        <button class="color-tool" style="background-color: red"></button>
        <button class="color-tool" style="background-color: blue"></button>
        <button class="color-tool" style="background-color: green"></button>
        <button class="color-tool" style="background-color: yellow"></button>
      </div>
      <div class="tool">
        <button class="tool-button active">
          <i
            class="fa fa-hand-paper-o"
            title="Free Hand"
            onclick="enableSelector(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button class="tool-button">
          <i
            class="fa fa-pencil"
            title="Pencil"
            onclick="enablePencil(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button class="tool-button">
          <i
            class="fa fa-font"
            title="Add Text"
            onclick="enableAddText(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button class="tool-button">
          <i
            class="fa fa-long-arrow-right"
            title="Add Arrow"
            onclick="enableAddArrow(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button class="tool-button">
          <i
            class="fa fa-square-o"
            title="Add rectangle"
            onclick="enableRectangle(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button class="tool-button">
          <i
            class="fa fa-picture-o"
            title="Add an Image"
            onclick="addImage(event)"
          ></i>
        </button>
      </div>
      <div class="tool">
        <button
          class="btn btn-danger btn-sm"
          onclick="deleteSelectedObject(event)"
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
      <div class="tool">
        <button class="btn btn-danger btn-sm" onclick="clearPage()">
          Clear Page
        </button>
      </div>
      <div class="tool">
        <button class="btn btn-info btn-sm" onclick="showPdfData()">{}</button>
      </div>
      <div class="tool">
        <button class="btn btn-light btn-sm" @click="savePDF">
          <i class="fa fa-save"></i> Save
        </button>
      </div>
    </div>
    <div id="pdf-container">
      <iframe id="pdf" src="" frameborder="0"></iframe>
    </div>

    <div
      id="dataModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="dataModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="dataModalLabel" class="modal-title">PDF annotation data</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <pre class="prettyprint lang-json linenums"></pre>
          </div>
        </div>
      </div>
    </div>
    <!-- <FilePreviewToolbar />
    <FilePreviewMedia /> -->
  </div>
</template>

<script>
// import FilePreviewToolbar from "@/components/FilesView/FilePreviewNavigationPanel";
// import FilePreviewMedia from "@/components/FilesView/MediaFullPreview";
import { events } from "@/bus";
// import WebViewer from "@pdftron/webviewer";
// import { fabric } from "fabric";
// import pdfjslib from "pdfjs-dist/legacy/build/pdf";
// import * as pdfWorkerEntry from "pdfjs-dist/build/pdf.worker.entry";
// import { PDFDocument, PDFPage } from "pdf-lib";
// import $ from "jquery";
// import { jsPDF } from "jspdf";

export default {
  name: "FilePreview",
  components: {
    // FilePreviewToolbar,
    // FilePreviewMedia,
  },
  data() {
    return {
      isFullPreview: false,
      pdfBlob: null,
      viewer: null,
      pdf: null,
    };
  },
  watch: {},
  updated() {
    if (this.isFullPreview) {
      this.$refs.filePreview.focus();
    }
  },
  mounted() {
    events.$on("filePDFEditor:show", () => {
      this.isFullPreview = true;

      // pdfjslib.GlobalWorkerOptions.workerSrc = pdfWorkerEntry;

      // fetch(this.$store.state.fileBrowser.fileInfoDetail[0].file_url)
      //   .then((res) => res.arrayBuffer())
      //   .then((existingPdfBytes) => {
      //     // Load a `PDFDocument` from the existing PDF bytes.
      //     PDFDocument.load(existingPdfBytes).then((pdf) => {
      //       pdf.saveAsBase64({ dataUri: true }).then((pdfDataUri) => {
      //         document.getElementById("pdf").src = pdfDataUri;
      //       });
      //     });
      //   });
    });
    events.$on("filePDFEditor:hide", () => {
      this.isFullPreview = false;
    });
  },
  methods: {
    closeFilePreview() {
      this.isFullPreview = false;

      events.$emit("showContextMenuPreview:hide");
    },
    next() {
      events.$emit("file-preview:next");
    },
    prev() {
      events.$emit("file-preview:prev");
    },
    savePDF() {
      // pdf.savePdf();
      this.pdf.savePdf("sample.pdf"); // save with given file name
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";

.file-preview {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 7;
  background-color: white;
}

@media (prefers-color-scheme: dark) {
  .file-preview {
    background-color: $dark_mode_background;
  }
}

#pdf {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 7;
  background-color: white;
}

iframe,
.pdf-iframe .canvas-container {
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.toolbar {
  width: 100%;
  background-color: rgb(50, 54, 57);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

#pdf-container {
  margin-top: 60px;
  padding-left: 10px;
  text-align: center;
}

button:focus {
  outline: 0;
}

.toolbar .tool {
  display: inline-block;
  color: #fff;
  height: 100%;
  padding-top: 10px;
  padding-left: 10px;
  margin-right: 5px;
}

.toolbar .tool label,
.toolbar .tool select,
.toolbar .tool input {
  display: inline-block;
  width: auto;
  height: auto !important;
  padding: 0;
}

.toolbar .tool input {
  width: 50px;
}

.toolbar .tool .color-tool {
  height: 25px;
  width: 25px;
  border-radius: 25px;
  border: 0;
  cursor: pointer;
  display: inline-block;
}

.toolbar .tool .color-tool.active {
  -webkit-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

.toolbar .tool:nth-last-child(1) {
  float: right;
}

.toolbar .tool .tool-button {
  background-color: rgb(50, 54, 57);
  border: 1px solid rgb(50, 54, 57);
  color: #fff;
  cursor: pointer;
}

.toolbar .tool .tool-button:hover,
.toolbar .tool .tool-button.active {
  background-color: rgb(82, 86, 89);
  border-color: rgb(82, 86, 89);
}
</style>
<style>
canvas,
.canvas-container {
  margin-bottom: 25px;
}

.canvas-container {
  margin-left: auto;
  margin-right: auto;
}
</style>
