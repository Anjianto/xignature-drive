<template>
  <div class="sign-wrapper">
    <header class="header">
      <router-link to="/files" class="logo">
        <img src="/assets/images/logo.png" alt="Logo  " />
      </router-link>
      <button class="btn-sign" @click="signDocument">Sign Document</button>
    </header>
    <main>
      <div class="file-wrapper-preview">
        <!--Show PDF-->
        <div
          v-if="isPDF"
          id="pdf-wrapper"
          :style="{ width: documentSize + '%' }"
        >
          <pdf
            :src="pdfdata"
            v-for="i in numPages"
            :key="i"
            :resize="true"
            :page="i"
            scale="page-width"
            style="width: 100%; margin: 20px auto"
            id="printable-file"
          >
            <template slot="loading">
              <h1>loading content...</h1>
            </template>
          </pdf>
          <div class="utilities">
            <p>Page 1 / {{ numPages }}</p>
            <div class="zoom">
              <button class="btn-zoom-out" @click="decreaseSizeOfPDF">
                <minus-icon size="1x"></minus-icon>
              </button>
              <search-icon size="1.2x"></search-icon>
              <button class="btn-zoom-in" @click="increaseSizeOfPDF">
                <plus-icon size="1x"></plus-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>Powered by Xignature</p>
    </footer>
  </div>
</template>

<script>
import FilePreviewMedia from "@/components/FilesView/MediaFullPreview";
import pdf from "pdfvuer";
import { mapGetters } from "vuex";
import { SearchIcon, PlusIcon, MinusIcon } from "vue-feather-icons";
import { events } from "@/bus";
import signature_client from "../../http_client/signature_client";
import { ktpDummyData } from "../../dummyData/ktp";
import { selfieDummyData } from "../../dummyData/selfie";

export default {
  name: "SignView",
  components: {
    FilePreviewMedia,
    pdf,
    SearchIcon,
    PlusIcon,
    MinusIcon,
  },
  computed: {
    ...mapGetters(["fileInfoDetail", "data"]),
    currentFile() {
      return this.files[Math.abs(this.currentIndex) % this.files.length];
    },
    isPDF() {
      return this.fileInfoDetail[0].mimetype === "pdf";
    },
  },
  watch: {
    files() {
      if (this.files.length === 0) events.$emit("file-preview:hide");
    },
    currentFile() {
      if (this.fileInfoDetail[0]) {
        this.$store.commit("CLEAR_FILEINFO_DETAIL");
        this.$store.commit("GET_FILEINFO_DETAIL", this.currentFile);

        // Init pdf instance
        if (this.fileInfoDetail[0].mimetype === "pdf") {
          this.getPdf();
        }
      }
    },
    fileInfoDetail() {
      if (!this.fileInfoDetail[0]) {
        this.currentIndex -= 1;

        this.$store.commit("GET_FILEINFO_DETAIL", this.currentFile);

        this.files = [];
      }
    },
    data(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.files = [];
      }
    },
  },
  methods: {
    signDocument() {
      const file = this.$store.state.fileBrowser.fileInfoDetail[0];

      const user = this.$store.state.userAuth.user.data.attributes;

      signature_client
        .genLTC({
          email: user.email,
          fullname: user.name,
          nik: "9070061101119321",
          phone: "085123456789",
          birthdate: "1994-08-25",
          birthplace: "Jakarta",
          ktp: ktpDummyData,
          selfie: selfieDummyData,
        })
        .then((res) => {
          console.log(res);
        });
    },
    getPdf() {
      this.pdfdata = undefined;
      this.numPages = 0;

      let self = this;

      self.pdfdata = pdf.createLoadingTask(this.currentFile.file_url);

      self.pdfdata.then((pdf) => (self.numPages = pdf.numPages));
    },
    getFilesForView() {
      let requestedFile = this.fileInfoDetail[0];

      this.data.map((element) => {
        if (requestedFile.mimetype === "pdf") {
          if (element.mimetype === "pdf") this.files.push(element);
        } else {
          if (element.type === requestedFile.type) this.files.push(element);
        }
      });

      this.files.forEach((element, index) => {
        if (element.id === this.fileInfoDetail[0].id) {
          this.currentIndex = index;
        }
      });
    },
    increaseSizeOfPDF() {
      events.$emit("document-zoom:in");
    },
    decreaseSizeOfPDF() {
      events.$emit("document-zoom:out");
    },
  },
  data() {
    return {
      pdfdata: undefined,
      numPages: 0,
      currentIndex: 0,
      files: [],
      documentSize: 50,
    };
  },
  mounted() {
    if (this.$store.state.fileBrowser.fileInfoDetail.length < 1) {
      this.$router.push("/files");
    }
  },
  created() {
    // Set zoom size
    this.documentSize = window.innerWidth < 960 ? 100 : 50;

    events.$on("file-preview:next", () => this.next());
    events.$on("file-preview:prev", () => this.prev());

    events.$on("document-zoom:in", () => {
      if (this.documentSize < 100) this.documentSize += 10;
    });

    events.$on("document-zoom:out", () => {
      if (this.documentSize > 40) this.documentSize -= 10;
    });

    this.getFilesForView();
  },
};
</script>

<style src="pdfvuer/dist/pdfvuer.css" lang="css"></style>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.sign-wrapper {
  width: 100%;
  position: absolute;
  inset: 0;
  background-color: #082247;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  background: #202d7c;
  flex-direction: column;

  .logo {
    height: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .btn-sign {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    margin-top: 1rem;
    font-size: 0.75rem;

    &:hover {
      border-color: transparent;
      cursor: pointer;
    }
  }
}

.footer {
  margin-top: auto;
  padding: 1rem 3rem;
  background-color: #011027;
  z-index: 99;

  p {
    color: #fff;
  }
}

#pdf-wrapper {
  overflow-y: scroll;
  margin: 0 auto;
  position: absolute;
  top: 8rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 80%;

  @media screen and (min-width: 640px) {
    top: 6rem;
  }
}

.file-wrapper-preview {
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: transparent !important;

  .file-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .file-shadow {
      box-shadow: 0 8px 40px rgba(17, 26, 52, 0.05);
    }

    .file {
      max-width: 100%;
      max-height: 100%;
      align-self: center;
    }

    .audio {
      border-radius: 28px;
    }

    img {
      border-radius: 4px;
    }

    .video-wrapper {
      max-width: 1080px;
      max-height: 100%;

      @media (min-width: 1200px) {
        & {
          max-width: 800px;
        }
      }

      @media (min-width: 1920px) and (max-width: 2560px) {
        & {
          max-width: 1080px;
        }
      }
      @media (min-width: 2560px) and (max-width: 3840px) {
        & {
          max-width: 1440px;
        }
      }
      @media (min-width: 3840px) {
        & {
          max-width: 2160px;
        }
      }

      .video {
        max-width: 100%;
        max-height: 100%;
        align-self: center;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .navigation-arrows {
    .prev,
    .next {
      color: $light-text;
      filter: drop-shadow(0px 1px 0 rgba(17, 19, 20, 1));
    }
  }

  .file-wrapper-preview {
    .file-wrapper {
      .file-shadow {
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

.utilities {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 0.7rem;

  > * {
    color: white !important;
  }

  > p {
    @include font-size(12);
    font-weight: bold;
    margin-right: 1rem;
    white-space: nowrap;
  }
  .zoom {
    display: flex;

    > * {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    * {
      background-color: transparent;
      color: white;
      border: none;
    }
  }
}

@media screen and (min-width: 640px) {
  .header {
    padding: 1.5rem 5rem;
    flex-direction: row;

    .logo {
      width: 8rem;
      height: auto;
    }

    .btn-sign {
      margin-top: 0;
      font-size: 1rem;
    }
  }

  .utilities {
    > p {
      @include font-size(14);
    }
  }
}
</style>
