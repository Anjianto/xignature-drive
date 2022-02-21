<template>
  <div id="profile-wrapper">
    <div class="container">
      <div v-if="displayConfirm" class="confirm-container">
        <div class="wrapper">
          <h1>Confirm Form</h1>
          <h2>Please check for input bellow</h2>
        </div>
        <div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_name") }}</h4>
            <div>{{ profile.fullname }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_email") }}</h4>
            <div>{{ profile.email }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_phone") }}</h4>
            <div>{{ profile.phone }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_ktp") }}</h4>
            <img :src="profile.ktp" alt="foto ktp" />
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_nik") }}</h4>
            <div>{{ profile.nik }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_birthplace") }}</h4>
            <div>{{ profile.birthplace }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_birthdate") }}</h4>
            <div>{{ birthday }}</div>
          </div>
          <div class="block-wrapper">
            <h4>{{ $t("page_registration.label_selfie") }}</h4>
            <img :src="profile.selfie" alt="foto selfie" />
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
      <div class="loading container" v-else-if="loading">
        <div class="loader"></div>
        <h4>Loading...</h4>
        <p>Please wait while we make your signature.</p>
      </div>
      <StepperTab v-else :steps="[1, 2, 3]" @finish="loadConfirm">
        <template #indicator="{ props: { x } }">
          <FontAwesomeIcon class="indicator-icon" v-if="x === 1" icon="cubes" />
          <FontAwesomeIcon
            class="indicator-icon"
            v-if="x === 2"
            icon="address-card"
          />
          <FontAwesomeIcon
            class="indicator-icon"
            v-if="x === 3"
            icon="camera"
          />
        </template>
        <template #head="{ props: { progress } }">
          <div v-if="progress === 0" class="wrapper">
            <h1>Create Signature</h1>
            <h2>Fill the profile form</h2>
          </div>
          <div v-if="progress === 1" class="wrapper">
            <h1>Create Signature</h1>
            <h2>Fill the ktp form</h2>
          </div>
          <div v-if="progress === 2" class="wrapper">
            <h1>Create Signature</h1>
            <h2>Upload selifie with ktp</h2>
          </div>
        </template>
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
                  type="tel"
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
                rules="ext:jpg,jpeg,png"
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
                  maxlength="16"
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
              <p class="text-left mt-8">
                Upload Your Selfie With KTP on camera
              </p>
              <ValidationProvider
                tag="div"
                mode="passive"
                class="input-wrapper"
                name="Selfie with KTP"
                rules="ext:jpg,jpeg,png"
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
                  <div class="placeholder center" v-else>
                    <h4>No Selfie Taken</h4>
                    <p>click open Camera</p>
                  </div>
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
              :text="$t('navigation.previous')"
              :ltr="true"
            />
            <AuthButton
              v-if="progress < 3"
              icon="chevron-right"
              @click="saveFields(progress, next)"
              :text="$t('navigation.next')"
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
import { format } from "date-fns";
import axios from "axios";
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
  computed: {
    birthday() {
      return format(this.profile.birthdate, "dd MMMM yyyy");
    },
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
  setup() {
    const user = this.$store.getters.user;
    this.profile = {
      name: user.data.attributes.name,
      email: user.data.attributes.email,
      phone: user.data.attributes.phone,
      nik: user.data.attributes.nik,
      birthplace: user.data.attributes.birth_place,
      birthdate: user.data.attributes.birth_date,
      ktp: user.data.attributes.ktp,
      selfie: user.data.attributes.selfie,
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
    async saveToken(data) {
      const { data: result } = await axios.post("/api/sign", {
        sign_token: data.token,
      });
      if (result.statusCode === 200) {
        const expiresDate = new Date(data.expiredAt);
        this.$emit("token", data.token, expiresDate);
        this.token = "";
        this.loading = false;
      }
    },
    async reqToken() {
      this.displayConfirm = false;
      this.loading = true;
      try {
        const { data } = await signature_client.genLTC(this.profile, 2);

        if (data.statusCode === 200) {
          this.saveToken(data.data);
        } else if (data.statusCode < 600) {
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
        if (this.retries < 2 && this.token === "") {
          this.retries++;
          this.reqToken();
        } else {
          this.displayConfirm = true;
          events.$emit("alert:open", {
            emoji: "🤔",
            title: "Error",
            message: "Something went wrong, please try again",
          });
          throw error;
        }
      }
    },
    async saveFields(pos, next) {
      if (pos === 0) {
        const isValid = await this.$refs.make_profile.validate();
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
      this.displayConfirm = false;
      this.loading = false;
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
.preview,
.date-field {
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

.action_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
}
.wrapper {
  margin-bottom: 30px;
  h1 {
    font-size: 1.8rem;
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-left {
  text-align: left;
}
.mt-8 {
  margin-bottom: 1.25rem;
}
.indicator-icon {
  height: 20px;
}
.block-wrapper {
  text-align: left;
  margin-bottom: 16px;
}
.confirm-container {
  .block-wrapper h4 {
    margin-bottom: 4px;
  }

  .block-wrapper div {
    background: #eee;
    padding: 12px 10px;
    border-radius: 6px;
  }

  .block-wrapper img {
    height: 240px;
    border-radius: 8px;
  }
}
</style>
