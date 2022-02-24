<template>
  <div id="content-card">
      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_selfie") }}</label>
          <div class="input-wrapper">
            <div class="image preview">
              <!-- class="relative mx-auto flex h-[250px] w-[90%] flex-col items-center justify-center overflow-hidden rounded border-2 sm:w-[380px]" -->
              <div id="selfie-wrapper">
                <!-- <RegisterSelfieCamera v-show="!isLoaded" /> -->
                <video v-show="isLoaded && !isFinish" id="video"></video>
                <!-- class="h-auto w-full" -->
                <img v-show="isLoaded && isFinish" id="capturedImg" />
                <!-- class="h-auto w-full" -->
                <canvas id="canvas" class="hidden"></canvas>
              </div>
            </div>
          </div>
      </div>
      <div>
        <div class="container center">
          <AuthButton
            icon="chevron-right"
            text="Capture"
            v-if="!isCapture"
            type="button"
            @click="capture"
            :loading="isLoading"
          />
          <AuthButton icon="chevron-right" text="Continue" v-else />
        </div>
      </div>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import ProfileForm from "@/components/Signature/ProfileForm";
import { createFileBlob } from "@/utils";

export default {
  name: "Step2",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  data() {
    return {
      isLoaded: false,
      isFinish: false,
      stream: undefined,
      isCapture: false,
      isLoading: false,
    };
  },
  methods: {
    async capture() {
      video.pause();
      this.isCapture = true;
      const track = this.stream.getVideoTracks()[0];
      let imageCapture = new ImageCapture(track);
      let image = await imageCapture.takePhoto();
      let imgUrl = await createFileBlob(image);
      this.imageBlob = image;
      capturedImg.src = imgUrl;
      this.isFinish = true;
      // stop camera running in background
      video.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      const selfieFile = new File([this.imageBlob], "selfie.jpg", {
        type: "image/jpeg",
      });
      console.log('goto finish');
      this.$emit("input", selfieFile);
      this.$emit("finish");
    },
  },
  async mounted() {
    const selfieWrapper = document.getElementById("selfie-wrapper");
    const video = document.getElementById("video");
    const capturedImg = document.getElementById("capturedImg");

    this.stream = await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: selfieWrapper.clientWidth,
          height: selfieWrapper.clientHeight,
        },
      })
      .then((stream) => {
        (this.isLoaded = true), (video.srcObject = stream);
        video.play();

        // we check if the selfie field already has value
        if (this.value) {
          capturedImg.src = this.value;
          video.pause();
        } else {
          video.play();
        }

        return stream;
      })
      .catch(console.error);

    video.onclick = () => {
      video.play();
      this.isFinish = false;
    };
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
#captureImg {
  height: auto;
  width: 100%;
}
#canvas.hidden {
  display: none;
}
</style>
