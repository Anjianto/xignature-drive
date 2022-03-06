<template>
  <!-- isLoading -->
  <div class="pdf-wrapper">
    <div v-if="isLoading" class="spinner-wrapper">
      <Spinner />
    </div>
    <!-- isSuccess -->
    <canvas
      :id="`pdf-${page}`"
      ref="canvasRef"
      class="drag canvas-pdf"
      v-show="!isLoading && !isError"
    ></canvas>
    <div
      class="mb-5"
      draggable="false"
      v-on:dragstart.prevent
      v-on:drop.prevent
    ></div>
    <!-- isError -->
    <div v-if="isError" class="error-wrapper">
      <p>Unable to show page {{ page }}</p>
    </div>
  </div>
</template>

<script>
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.js";
import PDFJSWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";
import Spinner from "@/components/FilesView/Spinner.vue";

import { createLoadingTask } from "@/utils";

export default {
  name: "PDFPage",
  props: ["page", "src"],
  data() {
    return {
      isError: false,
      isLoading: false,
      pageNumber: this.page || 1,
      pageSize: { width: 0, height: 0 },
    };
  },
  computed: {},
  components: { Spinner },
  methods: {
    renderPage(page) {
      const canvas = this.$refs.canvasRef;
      // This gives us the page's dimensions at full scale
      const viewport = page.getViewport({ scale: 1 });
      // Set canvas width and height to the viewport (full page dimensions)
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      this.pageSize.width = viewport.width;
      this.pageSize.height = viewport.height;

      return page.render({
        canvasContext: canvas.getContext("2d"),
        viewport,
      }).promise;
    },
    async initPdfWorker() {
      this.isLoading = true;

      if (!this.src) {
        console.warn("PDF src is not defined");
        return;
      }

      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;

      try {
        const loadingTask = createLoadingTask(this.src);
        const pdf = await loadingTask.promise;
        // emit('pdfLoaded', pdf)

        if (this.page <= pdf.numPages) {
          const page = await pdf.getPage(this.pageNumber);
          await this.renderPage(page);
        } else {
          console.warn(
            `Page ${this.page} is not available. The maximum page number is ${pdf.numPages}`
          );
        }
      } catch (error) {
        this.isError = true;
        let message = `Error while loading PDF file, page ${this.page}`;

        if (error instanceof DOMException || error instanceof Error) {
          message = error.message;
          //   toast.error(message);

          console.error(message);
        } else {
          //   toast.error(message);

          throw error;
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.initPdfWorker();
  },
};
</script>

<style scoped lang="scss">
.pdf-wrapper {
  position: relative;
  min-height: 800px;
  min-width: 500px;
}

.spinner-wrapper {
  position: absolute;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 1);
  text-align: center;
}
.canvas-pdf {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.error-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 6rem /* 96px */;
  padding-bottom: 6rem /* 96px */;
  text-align: center;

  > p {
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    --tw-text-opacity: 1;
    color: rgba(239, 68, 68, var(--tw-text-opacity));
  }
}
</style>
