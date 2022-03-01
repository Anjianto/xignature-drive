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
        </div>
      </div>
      <div class="container center">
        <AuthButton
          v-if="!isCapture || isLoading"
          icon="chevron-right"
          :text="
            isLoadingCamera ? 'Preparing' : isLoading ? 'Creating' : 'Capture'
          "
          type="button"
          :disabled="isLoadingCamera || isLoading"
          :loading="isLoadingCamera || isLoading"
          @click="capture"
        />
        <AuthButton
          v-else
          icon="save"
          text="Register"
          @click.native="submitData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthButton from "@/components/Auth/AuthButton";
import { getBlobUrl } from "@/utils";
import Spinner from "@/components/FilesView/Spinner";

export default {
  name: "SignUpStep4",
  components: {
    AuthButton,
    Spinner,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
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
    };
  },
  async mounted() {
    const selfieWrapper = document.getElementById("selfie-wrapper");
    this.video = document.getElementById("video");
    this.capturedImg = document.getElementById("capturedImg");
    this.isLoadingCamera = true;
    this.stream = await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: selfieWrapper.clientWidth,
          height: selfieWrapper.clientHeight,
        },
      })
      .then((stream) => {
        (this.isLoaded = true), (this.video.srcObject = stream);
        this.video.play();

        // we check if the selfie field already has value
        if (this.value) {
          this.capturedImg.src = this.value;
          this.video.pause();
        } else {
          this.video.play();
        }

        return stream;
      })
      .catch(console.error);

    this.video.onclick = () => {
      this.video.play();
      this.isFinish = false;
    };
    this.isLoadingCamera = false;
  },
  methods: {
    submitData() {
      if (this.isFinish) {
        this.$emit("submit");
      }
    },
    async capture() {
      const video = document.getElementById("video");
      const capturedImg = document.getElementById("capturedImg");
      video.pause();
      this.isCapture = true;
      const track = this.stream.getVideoTracks()[0];
      let imageCapture = new ImageCapture(track);
      let image = await imageCapture.takePhoto();
      let imgUrl = await getBlobUrl(image);
      this.imageBlob = image;
      capturedImg.src = imgUrl;
      this.capturedImgisFinish = true;
      // stop camera running in background
      video.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      const selfieFile = new File([this.imageBlob], "selfie.jpg", {
        type: "image/jpeg",
      });
      this.$emit("input", selfieFile);
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
  &.center {
    justify-content: center;
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
