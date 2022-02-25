<template>
  <div id="content-card">
    <ValidationObserver
      @submit.prevent="saveRegister"
      ref="form"
      tag="form"
      class="form block-form"
    >
      <span></span>
      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_ktp") }}</label>
        <div class="input-wrapper">
          <div class="image preview" @click="() => $refs.ktpUpload.click()">
            <img v-if="value" :src="ktp" alt="ktp photo" />
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
      </div>

      <div>
        <div class="container center">
          <AuthButton icon="chevron-right" text="Continue" />
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
import {createFileBlob} from "@/utils";

export default {
  name: "Step2",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  props: ["value"],
  data() {
    return {
      ktp: null,
      errors: [],
    };
  },
  methods: {
    async saveRegister() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      this.errors = [];
      console.log("goto step 3");
      this.$emit("step", 3);
    },
    async changeUserKTP(e) {
      console.log(e);
      const files = e.target.files || e.dataTransfer.files;
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) {
        this.errors.push("invalid file");
        return;
      }
      this.ktp = await createFileBlob(files[0]);
      // const image = await this.createImage(files[0]);
      this.$emit("input", files[0]);
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
