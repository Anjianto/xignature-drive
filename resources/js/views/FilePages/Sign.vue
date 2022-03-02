<template>
  <div class="sign-wrapper">
    <header class="header">
      <router-link to="/files" class="logo">
        <img src="/assets/images/logo.png" alt="Logo  " />
      </router-link>
      <div class="flex gap-1">
        <button
          v-if="isSigned"
          class="btn-action flat"
          :disabled="isLoading"
          @click="switchMode"
        >
          {{ !showOriginal ? "Original Document" : "Signed Document" }}
        </button>
        <button class="btn-action" :disabled="isLoading" @click="showOtpModal">
          Sign Document
        </button>
      </div>
    </header>
    <main>
      <div class="file-wrapper-preview">
        <!--Show PDF-->
        <div
          v-if="isLoading === false && errors < true === true"
          id="pdf-wrapper"
          ref="pdfwrapper"
          :style="{ width: documentSize + '%', height: '100vh' }"
        >
          <pdf
            v-for="i in numPages"
            :id="i"
            :key="i"
            :src="pdfdata"
            :resize="true"
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
    <OTPModal
      :open="askOTP"
      :step="1"
      @resend="writeSign"
      @close="closeOTP"
      @submit="signDocument"
    >
      <span v-if="waitingSignMsg" class="font-weight-700 text-yellow-500">
        {{ waitingSignMsg }}
      </span>
    </OTPModal>
  </div>
</template>

<script>
import pdf from "pdfvuer";
import { mapGetters } from "vuex";
import { SearchIcon, PlusIcon, MinusIcon } from "vue-feather-icons";
import { events } from "@/bus";
import Spinner from "@/components/FilesView/Spinner";
import {
  ACT_GENOTP,
  ACT_SIGN_DOC,
  HIDE_PROCESSING,
  SHOW_PROCESSING,
} from "@/constants/action";
import { findDocToSign } from "@/http_client/signature_client";
import { loadPdf, notifError } from "@/utils";
import OTPModal from "@/components/FilesView/OTPModal";

export default {
  name: "SignView",
  components: {
    pdf,
    Spinner,
    SearchIcon,
    PlusIcon,
    MinusIcon,
    OTPModal,
  },
  computed: {
    ...mapGetters(["fileInfoDetail", "data"]),
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
    this.getPdf();
  },
  methods: {
    closeOTP() {
      this.askOTP = false;
      this.waitingSignMsg = undefined;
    },
    async signDocument(otp) {
      this.askOTP = false;
      this.isLoading = true;
      const formData = new FormData();
      formData.append("fileId", this.$route.params.fileId);
      formData.append("title", this.file.name);
      formData.append("reason", "accpet all");
      formData.append("sign_page", this.numPages);
      formData.append("sign_pos", {
        x: 100,
        y: 100,
      });
      formData.append("share_document_to_customer", 1);
      formData.append("otp", otp);
      this.$store.dispatch(SHOW_PROCESSING, {
        title: "Putting signature",
        message: "Please wait while we put signature on the document",
      });
      const { data, error } = await this.$store.dispatch(ACT_SIGN_DOC, {
        formData,
      });

      if (error) {
        this.$store.dispatch(HIDE_PROCESSING);
        setTimeout(() => {
          if (error.data && error.data.statusCode === 400) {
            error.data.message =
              "Email is not verified. Please verify your email.";
          }
          notifError(error, () => {
            this.errors = [error];
            this.isLoading = false;
            if (
              error.data &&
              (error.data.status === "empty" || error.data.statusCode === 401)
            ) {
              this.askOTP = true;
            }
          });
        }, 500);
        return;
      }
      this.file = data;
      this.$store.dispatch(SHOW_PROCESSING, {
        title: "Document signed",
        message: "Thank you for signing the document",
      });
      setTimeout(() => {
        this.$store.dispatch(HIDE_PROCESSING);
        this.isLoading = false;
        this.getPdf(false);
      }, 2000);
    },
    async writeSign() {
      this.isWaitingSign = true;
      const { error } = await this.$store.dispatch(ACT_GENOTP);

      if (error) {
        this.waitingSignMsg = error.data
          ? error.data.message
          : "failed to generate otp";
      }

      this.waitingSignMsg = "otp has been sent to your email";
      this.isWaitingSign = false;
    },
    showOtpModal() {
      this.askOTP = true;
    },
    switchMode() {
      this.$store.dispatch(SHOW_PROCESSING, {
        title: "Preparing Original Document",
        message: "Please wait...",
      });
      setTimeout(() => {
        this.$store.dispatch(HIDE_PROCESSING);
        this.isLoading = false;
        this.showOriginal = !this.showOriginal;
        this.getPdf(this.showOriginal);
      }, 2000);
    },
    async getPdf(original = true) {
      this.numPages = 0;
      this.isLoading = true;
      try {
        const fileId = this.$route.params.fileId;
        const { data: body, error } = await findDocToSign(fileId);
        if (error) {
          this.$store.dispatch(HIDE_PROCESSING);
          notifError(error, () => {
            this.errors = [error];
            this.isLoading = false;
          });
          return;
        }
        let url = body.data.file_url;
        this.isSigned = body.data.metadata && body.data.metadata.id;
        if (this.isSigned && original === false) {
          console.log("show signing doc version");
          url = `${window.location.origin}/file/${body.data.metadata.id}/signed`;
        }
        const { doc } = await loadPdf(url);
        this.pdfdata = pdf.createLoadingTask(url);
        this.files = doc.computePages();
        this.numPages = this.files.length;
        this.isLoading = false;
        this.file = body.data;
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
        console.log(error);
        notifError(error, () => {
          console.log(error);
          this.errors = [error];
          this.$route.replace({
            name: "Files",
          });
        });
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
      otp: undefined,
      askOTP: false,
      file: undefined,
      files: [],
      isLoading: false,
      showOriginal: true,
      isWaitingSign: false,
      isSigned: false,
      waitingSignMsg: undefined,
      errors: [],
      documentSize: 50,
    };
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
