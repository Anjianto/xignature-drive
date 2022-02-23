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
        <label>{{ $t("page_registration.label_ktp") }}</label>
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
              <img v-if="ktp" :src="ktp" alt="ktp photo" />
              <div class="placeholder center" v-else>
                <FontAwesomeIcon class="icon" icon="camera" />
                <h4>No Image KTP</h4>
                <p>click to upload</p>
              </div>
            </div>
            <input
              ref="ktpUpload"
              @change="changeUserKTP"
              accept="image/jpeg,image/png"
              required
              style="display: none"
              type="file"
            />
          </div>
        </ValidationProvider>
      </div>

      <div>
        <div class="container center">
          <AuthButton
            icon="chevron-right"
            text="Continue"
            :disabled="!registerData.ktp"
          />
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
import { events } from "@/bus";

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
    };
  },
  methods: {
    saveRegister() {
      if (!this.registerData.ktp) {
        events.$emit("alert:open", {
          emoji: "🤔",
          title: "KTP is required!",
          message: "Please upload your KTP!",
        });
        return;
      }
      this.$store.dispatch("set_steps", 3);
    },
    async changeUserKTP(e) {
      const files = e.target.files || e.dataTransfer.files;
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) return;
      const image = await this.createImage(files[0]);
      // this.userInfo.selfie = image;
      this.ktp = image;
      this.$store.dispatch("set_register_data", {
        ktp: image,
      });
      // this.$updateImage("/user/profile", "selfie", e.target.files[0]);
      // this.errors.selfie = "";
    },
    createImage(file) {
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
</style>
