<template>
  <div id="content-card">
    <ValidationObserver
      @submit.prevent="saveRegister"
      ref="sign_up"
      v-slot="{ invalid }"
      tag="form"
      class="form block-form"
    >
      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_selfie") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="ktp"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="input-wrapper">
            <div class="image preview" @click="() => $refs.ktpUpload.click()">
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
        </ValidationProvider>
      </div>

      <div>
        <div class="container center">
          <AuthButton
            icon="chevron-right"
            text="Capture"
            v-if="!isCapture"
            type="button"
            id="capture"
            :loading="isLoading"
          />
          <AuthButton icon="chevron-right" text="Continue" v-else />
        </div>
      </div>
    </ValidationObserver>
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
import { mapGetters } from "vuex";
import axios from "axios";
import { events } from "@/bus";
import signatureClient from "@/http_client/signature_client";

export default {
  name: "Step2",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  computed: {
    ...mapGetters(["registerData"]),
  },
  data() {
    return {
      ktp: null,
      isLoaded: false,
      isFinish: false,
      isCapture: false,
      isLoading: false,
    };
  },
  methods: {
    saveRegister() {
      if (!this.isCapture) return;

      this.isLoading = true;

      signatureClient
        .genLTC(
          {
            ...this.registerData,
            fullname: this.registerData.name,
          },
          1
        )
        .then((data) => {
          axios
            .post("/api/user/register", this.registerData)
            .then(() => {
              this.isLoading = false;
              this.$store.commit("SET_AUTHORIZED", true);

              this.$router.push({
                name: "Files",
                query: { create_signature: true },
              });
            })
            .catch((error) => {
              if (!error.response) return;
              if (error.response.status == 401) {
                if (error.response.data.error === "invalid_client") {
                  events.$emit("alert:open", {
                    emoji: "🤔",
                    title: this.$t("popup_passport_error.title"),
                    message: this.$t("popup_passport_error.message"),
                  });
                }
              }
              if (error.response.status == 500) {
                events.$emit("alert:open", {
                  emoji: "🤔",
                  title: this.$t("popup_signup_error.title"),
                  message: this.$t("popup_signup_error.message"),
                });
              }
              if (error.response.status == 422) {
                if (error.response.data.errors["email"]) {
                  this.$refs.sign_up.setErrors({
                    "E-Mail": error.response.data.errors["email"],
                  });
                }
                if (error.response.data.errors["password"]) {
                  this.$refs.sign_up.setErrors({
                    "Your New Password": error.response.data.errors["password"],
                  });
                }
              }

              if (Object.keys(error.response.data.errors).length > 0) {
                const firstKey = Object.keys(error.response.data.errors)[0];
                events.$emit("alert:open", {
                  emoji: "🤔",
                  title: firstKey,
                  message: error.response.data.errors[firstKey][0],
                });
              }

              this.isLoading = false;
            });
        })
        .catch((error) => {
          console.log(error.response);
          // if(error.response.status)
          //   events.$emit("alert:open", {
          //   emoji: "🤔",
          //   title: `Error in ${Object.keys}`,
          //   message: this.$t("popup_passport_error.message"),
          // });
        });
    },
  },
  mounted() {
    const selfieWrapper = document.getElementById("selfie-wrapper");
    const video = document.getElementById("video");
    const capture = document.getElementById("capture");
    const canvas = document.getElementById("canvas");
    const capturedImg = document.getElementById("capturedImg");

    navigator.mediaDevices
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
        if (this.registerData.selfie) {
          capturedImg.src = this.registerData.selfie;
          video.pause();
        } else {
          video.play();
        }
      })
      .catch(console.error);

    video.onclick = () => {
      video.play();
      this.isFinish = false;
    };

    capture.onclick = () => {
      this.isCapture = true;
      video.pause();
      const context = canvas.getContext("2d");

      canvas.width = selfieWrapper.clientWidth;
      canvas.height = selfieWrapper.clientHeight;

      context.drawImage(video, 0, 0, canvas.clientWidth, canvas.clientHeight);
      this.$store.dispatch("set_register_data", {
        selfie: canvas.toDataURL().split(",")[1],
      });
      capturedImg.src = canvas.toDataURL();
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
