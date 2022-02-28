<template>
  <div class="sign-wrapper">
    <header class="header">
      <router-link to="/files" class="logo">
        <img src="/assets/images/logo.png" alt="Logo  " />
      </router-link>
      <div class="flex gap-1">
        <button class="btn-action flat" @click="signDocument">
          Original Document
        </button>
        <button class="btn-action" @click="signDocument">Sign Document</button>
      </div>
    </header>
    <main>
      <div class="file-wrapper-preview">
        <!--Show PDF-->
        <div
          ref="pdfwrapper"
          v-if="isLoading === false && errors < true === true"
          id="pdf-wrapper"
          :style="{ width: documentSize + '%', height: '100vh' }"
        >
          <pdf
            :src="pdfdata"
            v-for="i in numPages"
            :key="i"
            :resize="true"
            :id="i"
            :page="i"
            class="pdf-page"
            scale="page-width"
            :style="`width: 100%; margin: 20px auto; padding-bottom: ${
              i === numPages ? '200px' : '0'
            };`"
          >
            <template slot="loading">
              <div
                class="preload center bg-white flex justify-center items-center"
              >
                <div class="mx-auto">
                  <Spinner />
                  <h1>loading content...</h1>
                </div>
              </div>
            </template>
          </pdf>
          <div class="utilities">
            <p>Page {{ currentIndex + 1 }} / {{ numPages }}</p>
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
import pdf from "pdfvuer";
import { mapGetters } from "vuex";
import { SearchIcon, PlusIcon, MinusIcon } from "vue-feather-icons";
import { events } from "@/bus";
import Spinner from "@/components/FilesView/Spinner";
import { SHOW_PROCESSING } from "@/constants/action";
import { findDocToSign } from "@/http_client/signature_client";
import { loadPdf, notifError } from "@/utils";

export default {
  name: "SignView",
  components: {
    pdf,
    Spinner,
    SearchIcon,
    PlusIcon,
    MinusIcon,
  },
  computed: {
    ...mapGetters(["fileInfoDetail", "data"]),
  },
  methods: {
    signDocument() {
      this.$store.dispatch(SHOW_PROCESSING, {
        title: "Signing Document",
        message: "Please wait...",
      });
    },
    signDocument() {
      this.$store.dispatch(SHOW_PROCESSING, {
        title: "Preparing Original Document",
        message: "Please wait...",
      });
    },
    async getPdf() {
      this.numPages = 0;
      this.isLoading = true;
      try {
        const fileId = this.$route.params.fileId;
        const { data: body } = await findDocToSign(fileId);
        const { data, doc, url } = await loadPdf(body.data.file_url);
        this.pdfdata = pdf.createLoadingTask(body.data.file_url);
        this.files = doc.computePages();
        this.numPages = this.files.length;
        this.isLoading = false;
        this.file = body;
        setTimeout(() => {
          const wrapper = document.getElementById("pdf-wrapper");
          wrapper.onscroll = (e) => {
            // get scroll position
            const scrollTop = e.target.scrollTop;
            // get height of the scroll
            const scrollHeight = e.target.scrollHeight;
            // get percetage scroll
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            // get interpolated scroll percentage into range pages
            const page = Math.round((scrollPercent / 100) * this.numPages);
            if (page !== this.currentIndex && page <= this.numPages) {
              this.currentIndex = page;
            }
          };
        }, 1000);
      } catch (error) {
        notifError(error, () => {
          window.router.replace({
            name: "Files",
          });
        });
        this.errors = [error];
      } finally {
        this.isLoading = false;
      }
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
      file: undefined,
      files: [],
      isLoading: false,
      errors: [],
      documentSize: 50,
    };
  },
  mounted() {
    this.getPdf();
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
  },
};
</script>

<style src="pdfvuer/dist/pdfvuer.css" lang="css"></style>
<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
$header-color: hsl(251, 59%, 31%);
$btn-border-color: hsl(251, 39%, 31%);
$content-bg-color: hsl(251, 35%, 31%);

.sign-wrapper {
  padding-bottom: 40px;
  position: relative;
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

.preload {
  height: 100vh;
}
.sign-wrapper {
  width: 100%;
  position: absolute;
  inset: 0;
  background-color: $content-bg-color;
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
  background: $header-color;
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

  .btn-action {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    background-color: hsl(214, 59%, 31%);
    border: 2px solid $btn-border-color;
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
  background-color: $header-color;
  z-index: 1;

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

    .btn-action {
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
