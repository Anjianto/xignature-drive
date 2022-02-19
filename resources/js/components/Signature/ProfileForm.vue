<template>
  <div id="profile-wrapper">
    <div class="container">
      <div v-if="displayConfirm" class="confirm-container">
        <div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_name") }}</h4>
            <div>{{ profile.fullname }}</div>
          </div>
        </div>
        <div class="action_wrapper">
          <AuthButton icon="pencil-alt" @click="roolback" text="Edit" />
          <AuthButton
            icon="save"
            @click="reqToken"
            :text="retries > 0 ? 'Resend' : 'Save'"
          />
        </div>
      </div>
      <div v-else-if="loading">
        <div class="loader"></div>
        <h4>Loading...</h4>
        <p>Please wait while we make your signature.</p>
      </div>
      <StepperTab v-else :steps="[1, 2, 3]" @finish="loadConfirm">
        <template #default="{ props: { progress } }">
          <ValidationObserver
            v-if="progress === 0"
            ref="make_profile"
            v-slot="{ invalid }"
            tag="form"
            class="form block-form"
          >
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_name") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Full Name"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="profile.fullname"
                  :placeholder="$t('page_registration.placeholder_name')"
                  type="text"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_email") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Email Address"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="profile.email"
                  :placeholder="$t('page_registration.placeholder_email')"
                  type="text"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_phone") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Phone Number"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="profile.phone"
                  :placeholder="$t('page_registration.placeholder_phone')"
                  type="text"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
          </ValidationObserver>
          <ValidationObserver
            v-if="progress === 1"
            ref="make_signature"
            v-slot="{ invalid }"
            tag="form"
            class="form block-form"
          >
            <div class="block-wrapper">
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="KTP Picture"
                rules="ext:jpg,png"
                v-slot="{ validate, errors }"
              >
                <label>{{ $t("page_registration.label_ktp") }}</label>
                <div class="preview" @click="() => $refs.ktpUpload.click()">
                  {{ ktpFileName ? ktpFileName : "Click To Upload KTP" }}
                </div>
                <input
                  ref="ktpUpload"
                  @change="(e) => onKTPChanged(e, validate)"
                  style="display: none"
                  :placeholder="$t('page_registration.placeholder_ktp')"
                  type="file"
                  accept="image/jpeg,image/png"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_nik") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="NIK Number"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="profile.nik"
                  :placeholder="$t('page_registration.placeholder_nik')"
                  type="number"
                  minlength="16"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_birthplace") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Birthplace"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  v-model="profile.birthplace"
                  :placeholder="$t('page_registration.placeholder_birthplace')"
                  type="text"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_birthdate") }}</label>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Birthdate"
                rules="required"
                v-slot="{ errors }"
              >
                <!-- <input
                  v-model="profile.birthdate"
                  :placeholder="$t('page_registration.placeholder_birthdate')"
                  type="text"
                  :class="{ 'is-error': errors[0] }"
                /> -->
                <DatePicker
                  :placeholder="$t('page_registration.placeholder_birthdate')"
                  v-model="profile.birthdate"
                  format="YYYY-MM-DD"
                  :input-attr="{
                    class: ['mx-input date-field', { 'is-error': errors[0] }],
                  }"
                  type="date"
                >
                </DatePicker>
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
          </ValidationObserver>
          <ValidationObserver
            v-if="progress === 2"
            ref="make_selfie"
            v-slot="{ invalid }"
            tag="form"
            class="form block-form"
          >
            <div class="block-wrapper">
              <label>{{ $t("page_registration.label_selfie") }}</label>
              <p class="text-left mt-8">Upload You Selfie With KTP on camera</p>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Selfie with KTP"
                rules="ext:jpg,png"
                v-slot="{ validate, errors }"
              >
                <div
                  class="image preview"
                  @click="() => $refs.selfieUpload.click()"
                >
                  <img
                    v-if="profile.selfie"
                    :src="profile.selfie"
                    alt="selfie photo"
                  />
                  <div v-else>click to upload</div>
                </div>
                <input
                  ref="selfieUpload"
                  @change="(e) => onSelfieUpload(e, validate)"
                  accept="image/jpeg,image/png"
                  required
                  style="display: none"
                  :placeholder="$t('page_registration.placeholder_selfie')"
                  type="file"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
          </ValidationObserver>
        </template>
        <template #action="{ action: { next, previous, progress } }">
          <div class="action_wrapper">
            <AuthButton
              icon="chevron-left"
              v-if="progress - 1 >= 0"
              @click="saveFields(progress, previous)"
              :text="getProfileButtonLabel(progress - 1)"
              :ltr="true"
            />
            <AuthButton
              v-if="progress < 3"
              icon="chevron-right"
              @click="saveFields(progress, next)"
              :text="getProfileButtonLabel(progress)"
            />
          </div>
        </template>
      </StepperTab>
    </div>
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import { required, ext, digits, min } from "vee-validate/dist/rules";
import AuthButton from "@/components/Auth/AuthButton";
import StepperTab from "@/components/Others/StepperTab";
import signature_client from "@/http_client/signature_client";
import DatePicker from "vue2-datepicker";
import { events } from "@/bus";
import "vue2-datepicker/index.css";

export default {
  name: "ProfileForm",
  components: {
    ValidationProvider,
    StepperTab,
    ValidationObserver,
    DatePicker,
    AuthButton,
    required,
    ext,
    digits,
    min,
  },
  props: {
    name: String,
    phone: String,
    ktp: Object,
    email: String,
    selfie: Object,
    nik: [String, Number],
    birthdate: Date,
    birthPlace: String,
    mode: {
      type: String,
      default: "onepage",
    }, // onepage or stepbar
  },
  data() {
    return {
      profile: {
        fullname: this.name ?? "",
        email: this.email ?? "",
        phone: this.phone ?? "",
        nik: this.nik ?? "",
        birthplace: this.birthplace ?? "",
        birthdate: this.birthdate ?? "",
        ktp: this.ktp ?? "",
        selfie: this.selfie ?? "",
      },
      ktpFileName: "",
      token: "",
      error: "",
      retries: 0,
      displayConfirm: false,
      loading: false,
    };
  },
  methods: {
    async onKTPChanged(e, next) {
      var files = e.target.files || e.dataTransfer.files;
      next(files[0]);
      if (!files.length) return;
      this.ktpFileName = files[0].name;
      this.profile.ktp = await this.createImage(files[0]);
    },
    async onSelfieUpload(e, next) {
      var files = e.target.files || e.dataTransfer.files;
      next(files[0]);
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) return;
      this.profile.selfie = await this.createImage(files[0]);
    },
    getProfileButtonLabel(step) {
      switch (step) {
        case 0:
          return this.$t("sigature_profile.button_profile");
        case 1:
          return this.$t("sigature_profile.button_signature");
        case 2:
          return this.$t("sigature_profile.button_selfie");
        default:
          return this.$t("sigature_profile.save_profile");
      }
    },
    loadConfirm() {
      this.displayConfirm = true;
    },
    async reqToken() {
      this.loading = true;
      try {
        const { data } = await signature_client.genLTC(this.profile, 2);
        console.log(data);
        if (
          data.statusCode != null &&
          data.statusCode < 300 &&
          data.message === "success"
        ) {
          this.token = data.data.token;
          this.$emit("receive-token", data.data.token, data.data.expiredAt);
          this.loading = false;
        } else if (data.statusCode != null && data.statusCode < 600) {
          events.$emit("alert:open", {
            emoji: "🤔",
            title: data.error ?? "Error",
            message: data.message,
          });
          this.errors = data.error;
          this.loading = false;
        } else {
          this.loading = false;
        events.$emit("alert:open", {
          emoji: "🤔",
          title: "Error",
          message: "Something went wrong",
        });
        }
      } catch (error) {
        this.loading = false;
        if(this.retries < 2) {
          this.retries++;
          this.reqToken();
        } else {
          events.$emit("alert:open", {
            emoji: "🤔",
            title: "Error",
            message: "Something went wrong",
          });
        }
      }
    },
    async saveFields(pos, next) {
      if (pos === 0) {
        const isValid = await this.$refs.make_profile.validate();
        console.log(isValid);
        if (!isValid) return;
        next();
      } else if (pos === 1) {
        const isValid = await this.$refs.make_signature.validate();

        if (!isValid) return;
        next();
      } else if (pos === 2) {
        const isValid = await this.$refs.make_selfie.validate();

        if (!isValid) return;
        next();
      }
    },
    roolback() {
      
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
@import "@assets/vue-file-manager/_forms";
#profile-wrapper {
  height: 100%;
  width: 100%;
  display: table;
}
.preview, .date-field {
  border: 1px solid transparent;
  transition: 150ms all ease;
  text-align: start;
  font-size: 1em;
  border-radius: 8px;
  padding: 13px 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 700;
  outline: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  padding: 14px 20px;
  border-color: #f4f5f6;
  background: #f4f5f6;
  color: #1b2539;
  height: 52px;
  cursor: pointer;
  width: 100%;
}
.image.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & div {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/assets/images/selfie-ktp.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: -60px;
    }
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #1b2539;
  }
}
.action_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
}
.text-left {
  text-align: left;
}
.mt-8 {
  margin-bottom: 1.25rem;
}
</style>
