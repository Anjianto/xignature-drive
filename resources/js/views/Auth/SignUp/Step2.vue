<template>
  <div id="content-card">
    <ValidationObserver
      ref="form"
      tag="form"
      class="form block-form"
      @submit.prevent="saveRegister"
    >
      <div class="flex justify-center">
        <div class="text-center mb-4">
          <h3 class="text-lg">Take a picture of your ID Card</h3>
          <p class="text-gray-500">
            The document is required to verify your identity
          </p>
        </div>
      </div>
      <div class="block-wrapper">
        <div class="input-wrapper">
          <div class="image preview" @click="() => $refs.ktpUpload.click()">
            <img
              v-if="registerData.ktp"
              ref="ktpPreview"
              :src="ktp"
              alt="ktp photo"
            />
            <div v-else class="placeholder center">
              <FontAwesomeIcon class="icon" icon="camera" />
              <h4>Empty</h4>
              <p>click to upload</p>
            </div>
          </div>
          <input
            ref="ktpUpload"
            accept="image/jpeg,image/png"
            style="display: none"
            type="file"
            @change="changeUserKTP"
          />
          <span v-if="registerErrors.ktp" class="error-message">{{
            registerErrors.ktp
          }}</span>
        </div>
      </div>

      <div>
        <div class="container center">
          <AuthButton icon="chevron-right" text="Continue" />
        </div>
        <div>
          <ul class="px-8 pt-4 text-left list-disc">
            <li class="text-xs">
              Gambar identitas &amp; pas foto harus terbaca jelas
              <span class="text-xs text-yellow-500"
                >(Gambar tidak kabur, rusak, atau terkena pantulan cahaya)</span
              >
            </li>
            <li class="text-xs">
              Foto identitas adalah dokumen asli, bukan dokumen fotokopi
            </li>
            <li class="text-xs">
              Identitas yang terdaftar adalah data yang masih berlaku
            </li>
          </ul>
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
import { getBlobUrl } from "@/utils";
import { mapGetters } from "vuex";
export default {
  name: "SignUpStep2",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  data() {
    return {
      ktp: null,
      errors: [],
    };
  },
  computed: {
    ...mapGetters(["registerData", "registerErrors"]),
  },
  async mounted() {
    this.fetchPreview(this.registerData.ktp);
  },
  methods: {
    async fetchPreview(val) {
      if (val && val instanceof File) {
        this.ktp = await getBlobUrl(val);
      }
    },
    async saveRegister() {
      if (!this.registerData.ktp) {
        this.registerErrors.ktp = "foto ktp required";
      } else {
        this.registerErrors.ktp = [];
        this.$emit("step", 3);
      }
    },
    async changeUserKTP(e) {
      const files = e.target.files || e.dataTransfer.files;
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) {
        this.registerErrors.ktp = "invalid file";
        return;
      }
      this.ktp = await getBlobUrl(files[0]);
      this.$store.dispatch("setRegisterData", {
        ktp: files[0],
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
