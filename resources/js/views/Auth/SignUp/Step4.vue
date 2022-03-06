<template>
  <div id="content-card">
    <div class="block-wrapper">
      <div class="flex justify-center">
        <div class="text-center mb-4">
          <h3 class="text-lg">Take a picture for Liveness</h3>
          <p class="text-xs max-w-sm text-gray-500">
            Please activate the camera in the web app and click Allow for selfie
            taking.
          </p>
        </div>
      </div>

      <div style="height: 342px">
        <div class="image preview relative">
          <!-- class="relative mx-auto flex h-[250px] w-[90%] flex-col items-center justify-center overflow-hidden rounded border-2 sm:w-[380px]" -->
          <div id="selfie-wrapper">
            <!-- <RegisterSelfieCamera v-show="!isLoaded" /> -->
            <video v-show="isLoaded && !isFinish" id="video"></video>
            <!-- class="h-auto w-full" -->
            <img v-show="isLoaded && isFinish" id="capturedImg" />
            <!-- class="h-auto w-full" -->
            <canvas id="canvas" class="hidden"></canvas>
            <div
              v-if="isLoadingCamera"
              class="spinner-wrapper absolute w-full h-full flex justify-center items-center"
            >
              <div
                class="flex text-center flex-col justify-center items-center gap-1"
              >
                <div class="w-24 h-24 relative">
                  <Spinner />
                </div>
                <p class="text-lg font-semibold mb-1">Opening Camera</p>
                <p class="text-md">open camera in browser</p>
              </div>
            </div>
          </div>
          <span v-if="registerErrors.selfie" class="error-message">{{
            registerErrors.selfie
          }}</span>
        </div>
      </div>
      <div class="container center">
        <AuthButton
          v-if="isFinish"
          id="btn-retake"
          text="Retake"
          icon="camera"
          type="button"
          :disabled="isLoadingCamera || isDataLoading"
          @click="retake"
        />
        <AuthButton
          v-if="!isFinish"
          icon="chevron-right"
          :text="
            isLoadingCamera
              ? 'Preparing'
              : isDataLoading
              ? 'Creating'
              : 'Capture'
          "
          type="button"
          :disabled="isLoadingCamera || isDataLoading"
          :loading="isLoadingCamera || isDataLoading"
          @click="capture"
        />
        <AuthButton
          v-else
          icon="save"
          :text="registerData.selfie ? 'Register' : 'Processing'"
          @click.native="submitData"
          :loading="isLoadingCamera || isDataLoading || !registerData.selfie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";
import Cookies from "js-cookie";

import AuthButton from "@/components/Auth/AuthButton";
import Spinner from "@/components/FilesView/Spinner";
import { getBlobUrl } from "@/utils";
import { ACT_REGISTER } from "@/constants/action";
import { events } from "@/bus";
import { ALERT_OPEN } from "@/constants/events";
import { SIGN_DOC_KEY, SIGN_DOC_ID } from "@/constants/variables";
import { notifError } from "@/utils";

export default {
  name: "SignUpStep4",
  components: {
    AuthButton,
    Spinner,
  },
  data() {
    return {
      isLoaded: false,
      isFinish: false,
      isLoadingCamera: false,
      stream: undefined,
      isCapture: false,
      video: null,
      capturedImg: null,
      selfieWrapper: null,
      isDataLoading: false,
      selfieFile: null,
      retake: () => {},
    };
  },
  computed: {
    ...mapGetters(["registerData", "registerErrors"]),
  },
  async mounted() {
    this.selfieWrapper = document.getElementById("selfie-wrapper");
    this.video = document.getElementById("video");
    this.capturedImg = document.getElementById("capturedImg");
    this.isLoadingCamera = true;
    this.stream = await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: this.selfieWrapper.clientWidth,
          height: this.selfieWrapper.clientHeight,
        },
      })
      .then((stream) => {
        (this.isLoaded = true), (this.video.srcObject = stream);
        this.video.play();
        this.isLoadingCamera = false;

        // we check if the selfie field already has value
        if (this.registerData.selfie) {
          this.capturedImg.src = this.registerData.selfie;
          this.video.pause();
        } else {
          this.video.play();
        }

        return stream;
      })
      .catch(console.error);

    const retake = () => {
      this.$store.dispatch("setRegisterData", {
        selfie: undefined,
      });
      this.video.play();
      this.isCapture = false;
      this.isFinish = false;
    };

    this.video.onclick = retake;
    this.retake = retake;
  },
  methods: {
    stopStream(stream) {
      stream?.getTracks().forEach((track) => {
        track.stop();
      });
    },
    async submitData() {
      if (this.isFinish) {
        const dataRegister = new FormData();

        dataRegister.append("name", this.registerData.name);
        dataRegister.append("email", this.registerData.email);
        dataRegister.append("password", this.registerData.password);
        dataRegister.append(
          "password_confirmation",
          this.registerData.password_confirmation
        );
        dataRegister.append("phone", this.registerData.phone);
        dataRegister.append("nik", this.registerData.nik);
        dataRegister.append("ktp", this.registerData.ktp);

        dataRegister.append(
          "selfie",
          this.registerData.selfie || this.selfieFile
        );
        dataRegister.append(
          "birth_date",
          format(this.registerData.birthdate, "yyyy-MM-dd")
        );
        dataRegister.append("birth_place", this.registerData.birthplace);

        dataRegister.append("sign_doc_key", Cookies.get(SIGN_DOC_KEY));
        dataRegister.append("sign_doc_id", Cookies.get(SIGN_DOC_ID));

        this.isDataLoading = true;
        this.$store.dispatch("setRegisterErrors", {});
        const { data, error } = await this.$store.dispatch(ACT_REGISTER, {
          formData: dataRegister,
        });

        this.stopStream(this.stream);

        if (data) {
          events.$emit(ALERT_OPEN, {
            emoji: "🗝️",
            title: "Berhasil",
            message:
              "Akun anda berhasil dibuat, silahkan cek email anda untuk verifikasi akun",
            buttonStyle:
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            button: "Go To Login",
          });
          this.isDataLoading = false;
        } else {
          this.isDataLoading = false;
          notifError(error, () => {
            const splitMessage = error?.data?.message?.split?.(" ");
            const isNIK = splitMessage?.[0]?.toLowerCase?.() === "nik";
            const isPhone =
              splitMessage?.[0]?.toLowerCase?.() +
                " " +
                splitMessage?.[1]?.toLowerCase?.() ===
              "no hp";
            const isSelfie = error?.data?.errors?.selfie;
            if (isNIK || isPhone) {
              this.$emit("step", 3);
              if (isNIK) this.registerErrors.nik = error.data.message;
              else if (isPhone) this.registerErrors.phone = error.data.message;

              return;
            }
            if (isSelfie) {
              this.$emit("step", 4);
              this.registerErrors.selfie =
                error.data.errors.selfie?.[0] ?? "The selfie is not valid!";
              return;
            }
            this.$emit("step", 1);
          });
        }
      }
    },
    async capture() {
      if (this.isLoaded && this.isFinish) {
        this.stopStream(this.stream);
        return;
      }
      const canvas = document.getElementById("canvas");

      this.isFinish = true;
      this.video.pause();
      const context = canvas.getContext("2d");

      canvas.width = this.selfieWrapper.clientWidth;
      canvas.height = this.selfieWrapper.clientHeight;

      context.drawImage(this.video, 0, 0, canvas.width, canvas.height);

      // const blob = decodeURIComponent(
      //   escape(window.atob(canvas.toDataURL().split("data:")[1].split(";")[0]))
      // );
      // const selfieFile = new File([blob], "selfie.jpg", {
      //   type: "image/jpeg",
      // });
      // this.$emit("input", selfieFile);
      this.capturedImg.src = canvas.toDataURL();

      // const video = document.getElementById("video");
      // const capturedImg = document.getElementById("capturedImg");
      // video.pause();
      // this.isCapture = true;
      const track = this.stream.getVideoTracks()[0];
      let imageCapture = new ImageCapture(track);
      let image = await imageCapture.takePhoto();
      let imgUrl = await getBlobUrl(image);
      this.imageBlob = image;
      // capturedImg.src = imgUrl;
      // this.capturedImgisFinish = true;
      // // stop camera running in background
      // video.srcObject.getTracks().forEach((track) => {
      //   track.stop();
      // });
      this.selfieFile = new File([this.imageBlob], "selfie.jpg", {
        type: "image/jpeg",
      });
      this.$store.dispatch("setRegisterData", {
        selfie: this.selfieFile,
      });
      // this.isFinish = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_auth-form";
@import "@assets/vue-file-manager/_auth";

.legal-agreement {
  @include font-size(16);
  padding: 55px 0 0;
  max-width: 400px;
  font-weight: 700;
  line-height: 1.6;
  margin: 0 auto;

  a {
    color: $theme;
  }
}
.container {
  display: flex;
  flex-direction: column;
  width: 50%;

  &.center {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  > * {
    margin-bottom: 20px;
  }
  > :last-child {
    margin-bottom: 0;
  }
}
#content-card {
  max-width: 454px;
  margin: 0 auto;
  > * {
    border-radius: 20px;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, 1);
    padding: 2.75rem 1.5rem;
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000,
      0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
}

#selfie-wrapper {
  position: relative;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid #e6e6e6;
}
#video {
  height: auto;
  width: 100%;
}
#capturedImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#canvas.hidden {
  display: none;
}
</style>
