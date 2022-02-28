<template>
  <PageTab>
    <PageTabGroup v-if="userInfo">
      <div class="form block-form">
        <FormLabel>{{ $t("user_settings.title_account") }}</FormLabel>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_email") }} </label>
          <div class="input-wrapper">
            <input
              :value="userInfo.email"
              :placeholder="$t('page_registration.placeholder_email')"
              type="email"
              disabled
            />
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_name") }}</label>
          <div class="input-wrapper">
            <input
              @keyup="changeUserName"
              v-model="userInfo.name"
              :placeholder="$t('page_registration.placeholder_name')"
              type="text"
            />
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_phone") }}</label>
          <div class="input-wrapper">
            <input
              @keyup="changeUserPhone"
              v-model="userInfo.phone"
              :placeholder="$t('page_registration.placeholder_phone')"
              type="number"
              required
              class="reset-input-number"
            />
          </div>
          <p v-if="errors.phone" class="input-error">
            {{ errors.phone }}
          </p>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_nik") }}</label>
          <div class="input-wrapper">
            <input
              @keyup="changeUserNik"
              v-model="userInfo.nik"
              :placeholder="$t('page_registration.placeholder_nik')"
              minlength="16"
              maxlength="16"
              type="number"
              required
              class="reset-input-number"
            />
          </div>
          <p v-if="errors.nik" class="input-error">
            {{ errors.nik }}
          </p>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_birthplace") }}</label>
          <div class="input-wrapper">
            <input
              @keyup="changeUserBirthPlace"
              v-model="userInfo.birthplace"
              :placeholder="$t('page_registration.placeholder_birthplace')"
              type="text"
              required
            />
          </div>
          <p v-if="errors.birthplace" class="input-error">
            {{ errors.birthplace }}
          </p>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_birthdate") }}</label>
          <div class="input-wrapper">
            <DatePicker
              @change="changeUserBirthdate"
              :placeholder="$t('page_registration.placeholder_birthdate')"
              v-model="userInfo.birthdate"
              format="YYYY-MM-DD"
              :input-attr="{
                class: ['mx-input date-field'],
              }"
              type="date"
            >
            </DatePicker>
          </div>
          <p v-if="errors.birthdate" class="input-error">
            {{ errors.birthdate }}
          </p>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_ktp") }}</label>
          <div class="input-wrapper">
            <div class="image preview" @click="() => $refs.ktpUpload.click()">
              <img v-if="userInfo.ktp" :src="userInfo.ktp" alt="ktp photo" />
              <div class="placeholder center" v-else>
                <FontAwesomeIcon
                  v-if="isAssetsLoading"
                  icon="sync-alt"
                  class="sync-alt"
                />
                <FontAwesomeIcon class="icon" icon="camera" v-else />
                <h4 v-if="isAssetsLoading">Try to getting the KTP image</h4>
                <h4 v-else>No Image KTP</h4>
                <p v-if="!isAssetsLoading">click to upload</p>
              </div>
            </div>
            <input
              ref="ktpUpload"
              @change="changeUserKTP"
              accept="image/jpeg,image/png"
              required
              style="display: none"
              type="file"
              :disabled="userInfo.ktp"
            />
          </div>
          <p v-if="errors.ktp" class="input-error">
            {{ errors.ktp }}
          </p>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("page_registration.label_selfie") }}</label>
          <div class="input-wrapper">
            <div
              class="image preview"
              @click="() => $refs.selfieUpload.click()"
            >
              <img
                v-if="userInfo.selfie"
                :src="userInfo.selfie"
                alt="selfie photo"
              />
              <div class="placeholder center" v-else>
                <FontAwesomeIcon
                  v-if="isAssetsLoading"
                  icon="sync-alt"
                  class="sync-alt"
                />
                <FontAwesomeIcon class="icon" icon="camera" v-else />
                <h4 v-if="isAssetsLoading">Try to getting the selfie image</h4>
                <h4 v-else>No Image selfie</h4>
                <p v-if="!isAssetsLoading">click to upload</p>
              </div>
            </div>
            <input
              ref="selfieUpload"
              @change="changeUserSelfie"
              accept="image/jpeg,image/png"
              required
              style="display: none"
              type="file"
              :disabled="userInfo.selfie"
            />
          </div>
          <p v-if="errors.selfie" class="input-error">
            {{ errors.selfie }}
          </p>
        </div>

        <div style="display: flex; justify-content: center">
          <div>
            <ButtonBase class="btn btn-primary"> Complete Profile </ButtonBase>
          </div>
        </div>
      </div>
    </PageTabGroup>

    <PageTabGroup v-if="userInfo">
      <div class="form block-form">
        <FormLabel>{{ $t("user_settings.timezone") }}</FormLabel>
        <div class="block-wrapper">
          <label>GMT:</label>
          <div class="input-wrapper">
            <SelectInput
              @input="
                $updateText(
                  '/user/relationships/settings',
                  'timezone',
                  userTimezone
                )
              "
              v-model="userTimezone"
              :default="userTimezone"
              :options="timezones"
              :placeholder="$t('user_settings.timezone_plac')"
            />
          </div>
        </div>
      </div>
    </PageTabGroup>

    <PageTabGroup v-if="config.isSaaS && billingInfo">
      <div class="form block-form">
        <FormLabel>{{ $t("user_settings.title_billing") }}</FormLabel>
        <div class="block-wrapper">
          <label>{{ $t("user_settings.name") }}:</label>
          <div class="input-wrapper">
            <input
              @keyup="
                $updateText(
                  '/user/relationships/settings',
                  'billing_name',
                  billingInfo.billing_name
                )
              "
              v-model="billingInfo.billing_name"
              :placeholder="$t('user_settings.name_plac')"
              type="text"
            />
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("user_settings.address") }}:</label>
          <div class="input-wrapper">
            <input
              @keyup="
                $updateText(
                  '/user/relationships/settings',
                  'billing_address',
                  billingInfo.billing_address
                )
              "
              v-model="billingInfo.billing_address"
              :placeholder="$t('user_settings.address_plac')"
              type="text"
            />
          </div>
        </div>
        <div class="wrapper-inline">
          <div class="block-wrapper">
            <label>{{ $t("user_settings.city") }}:</label>
            <div class="input-wrapper">
              <input
                @keyup="
                  $updateText(
                    '/user/relationships/settings',
                    'billing_city',
                    billingInfo.billing_city
                  )
                "
                v-model="billingInfo.billing_city"
                :placeholder="$t('user_settings.city_plac')"
                type="text"
              />
            </div>
          </div>
          <div class="block-wrapper">
            <label>{{ $t("user_settings.postal_code") }}:</label>
            <div class="input-wrapper">
              <input
                @keyup="
                  $updateText(
                    '/user/relationships/settings',
                    'billing_postal_code',
                    billingInfo.billing_postal_code
                  )
                "
                v-model="billingInfo.billing_postal_code"
                :placeholder="$t('user_settings.postal_code_plac')"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("user_settings.country") }}:</label>
          <div class="input-wrapper">
            <SelectInput
              @input="
                $updateText(
                  '/user/relationships/settings',
                  'billing_country',
                  billingInfo.billing_country
                )
              "
              v-model="billingInfo.billing_country"
              :default="billingInfo.billing_country"
              :options="countries"
              :placeholder="$t('user_settings.country_plac')"
            />
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("user_settings.state") }}:</label>
          <div class="input-wrapper">
            <input
              @keyup="
                $updateText(
                  '/user/relationships/settings',
                  'billing_state',
                  billingInfo.billing_state
                )
              "
              v-model="billingInfo.billing_state"
              :placeholder="$t('user_settings.state_plac')"
              type="text"
            />
            <small class="input-help">
              State, county, province, or region.
            </small>
          </div>
        </div>
        <div class="block-wrapper">
          <label>{{ $t("user_settings.phone_number") }}:</label>
          <div class="input-wrapper">
            <input
              @keyup="
                $updateText(
                  '/user/relationships/settings',
                  'billing_phone_number',
                  billingInfo.billing_phone_number
                )
              "
              v-model="billingInfo.billing_phone_number"
              :placeholder="$t('user_settings.phone_number_plac')"
              type="text"
            />
          </div>
        </div>
      </div>
    </PageTabGroup>
  </PageTab>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import PageTabGroup from "@/components/Others/Layout/PageTabGroup";
import SelectInput from "@/components/Others/Forms/SelectInput";
import FormLabel from "@/components/Others/Forms/FormLabel";
import MobileHeader from "@/components/Mobile/MobileHeader";
import ButtonBase from "@/components/FilesView/ButtonBase";
import PageTab from "@/components/Others/Layout/PageTab";
import PageHeader from "@/components/Others/PageHeader";
import ThemeLabel from "@/components/Others/ThemeLabel";
import { required } from "vee-validate/dist/rules";
import { events } from "@/bus";
import { mapGetters } from "vuex";
import { format } from "date-fns";
import Button from "@/components/Others/Button";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";

export default {
  name: "Settings",
  props: ["user"],
  components: {
    ValidationProvider,
    DatePicker,
    Button,
    ValidationObserver,
    PageTabGroup,
    MobileHeader,
    SelectInput,
    PageHeader,
    ButtonBase,
    ThemeLabel,
    FormLabel,
    required,
    PageTab,
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const preReg = urlParams.get("create_signature");

    if (preReg) {
      events.$emit("alert:open", {
        emoji: "🤔",
        title: "Signature Empty",
        message: "Please fill profile to sign document.",
        type: "info",
      });
      this.$router.push({ name: "Profile" });
    }

    this.isAssetsLoading = true;
    axios
      .get("/api/user?assets=true")
      .then((data) => {
        console.log(data.data.data);
        const ktp = data.data.data.ktp;
        const selfie = data.data.data.selfie;
        this.$store.dispatch("retrieveUser", {
          ktp,
          selfie,
        });
        this.userInfo = { ...this.userInfo, ktp };
        this.userInfo = { ...this.userInfo, ktp, selfie };
        if (ktp) {
          delete this.errors.ktp;
        }
        if (selfie) {
          delete this.errors.selfie;
        }
      })
      .finally(() => {
        this.isAssetsLoading = false;

        if (!this.userInfo.ktp && !isAssetsLoading) {
          this.errors = {
            ...this.errors,
            ktp: "KTP is required!",
          };
        }
        if (!this.userInfo.selfie && !isAssetsLoading) {
          this.errors = {
            ...this.errors,
            selfie: "Selfie With Ktp is required!",
          };
        }
      });

    if (!this.userInfo.phone) {
      this.errors = {
        ...this.errors,
        phone: "Phone is required!",
      };
    }
    if (!this.userInfo.nik) {
      this.errors = {
        ...this.errors,
        nik: "NIK is required!",
      };
    }
    if (!this.userInfo.birthplace) {
      this.errors = {
        ...this.errors,
        birthplace: "Birthplace is required!",
      };
    }
    if (!this.userInfo.birthdate) {
      this.errors = {
        ...this.errors,
        birthdate: "Birthday is required!",
      };
    }
    if (!this.userInfo.ktp && !isAssetsLoading) {
      this.errors = {
        ...this.errors,
        ktp: "KTP is required!",
      };
    }
    if (!this.userInfo.selfie && !isAssetsLoading) {
      this.errors = {
        ...this.errors,
        selfie: "Selfie With Ktp is required!",
      };
    }
  },
  computed: {
    ...mapGetters(["config", "countries", "timezones"]),
  },
  data() {
    return {
      userInfo: undefined,
      billingInfo: undefined,
      userTimezone: undefined,
      isLoading: false,
      isAssetsLoading: false,
      errors: {},
    };
  },
  methods: {
    changeUserName() {
      this.$store.commit("UPDATE_NAME", this.userInfo.name);
      this.$updateText("/user/profile", "name", this.userInfo.name);
    },
    changeUserPhone() {
      if (
        `${this.userInfo.phone}`.length < 10 ||
        `${this.userInfo.phone}`.length > 13
      ) {
        this.errors = {
          ...this.errors,
          phone: "Phone is invalid!",
        };
        return;
      }
      this.errors.phone = "";

      this.$store.commit("UPDATE_PHONE", this.userInfo.phone);
      this.$updateText("/user/profile", "phone", this.userInfo.phone);
    },
    changeUserNik() {
      if (
        `${this.userInfo.nik}`.length < 16 ||
        `${this.userInfo.nik}`.length > 16
      ) {
        this.errors = {
          ...this.errors,
          nik: "NIK must be 16 digits",
        };
        return;
      }
      this.errors.nik = "";

      this.$store.commit("UPDATE_NIK", this.userInfo.nik);
      this.$updateText("/user/profile", "nik", this.userInfo.nik);
    },
    changeUserBirthdate() {
      if (!this.userInfo.birthdate) {
        this.errors = {
          ...this.errors,
          birthdate: "Birthday is required!",
        };
        return;
      }
      this.errors.nik = "";
      const date = format(this.userInfo.birthdate, "yyyy-MM-dd");
      this.$store.commit("UPDATE_BIRTHDATE", this.userInfo.birthdate);
      this.$updateText("/user/profile", "birth_date", date);
    },
    changeUserBirthPlace() {
      if (!this.userInfo.birthplace) {
        this.errors = {
          ...this.errors,
          birthplace: "Birthplace is required!",
        };
        return;
      }
      this.errors.birthplace = "";
      this.$store.commit("UPDATE_BIRTHPLACE", this.userInfo.birthplace);
      this.$updateText(
        "/user/profile",
        "birth_place",
        this.userInfo.birthplace
      );
    },
    async changeUserKTP(e) {
      const files = e.target.files || e.dataTransfer.files;
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) return;
      const image = await this.createImage(files[0]);
      this.userInfo.ktp = image;
      this.$store.commit("UPDATE_KTP", image);
      this.$updateImage("/user/profile", "ktp", e.target.files[0]);
      this.errors.ktp = "";
    },
    async changeUserSelfie(e) {
      const files = e.target.files || e.dataTransfer.files;
      const isImage = files[0].type.match(/image.*/);
      if (!files.length || !isImage) return;
      const image = await this.createImage(files[0]);
      this.userInfo.selfie = image;
      this.$store.commit("UPDATE_SELFIE", image);
      this.$updateImage("/user/profile", "selfie", e.target.files[0]);
      this.errors.selfie = "";
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
  created() {
    this.userTimezone =
      this.user.relationships.timezone.data.attributes.timezone;

    this.userInfo = {
      name: this.user.data.attributes.name,
      email: this.user.data.attributes.email,
      phone: this.user.data.attributes.phone,
      nik: this.user.data.attributes.nik,
      birthplace: this.user.data.attributes.birth_place,
      birthdate: this.user.data.attributes.birth_date,
      ktp: this.user.data.attributes.ktp,
      selfie: this.user.data.attributes.selfie,
    };

    this.billingInfo = {
      billing_name:
        this.user.relationships.settings.data.attributes.billing_name,
      billing_address:
        this.user.relationships.settings.data.attributes.billing_address,
      billing_state:
        this.user.relationships.settings.data.attributes.billing_state,
      billing_city:
        this.user.relationships.settings.data.attributes.billing_city,
      billing_postal_code:
        this.user.relationships.settings.data.attributes.billing_postal_code,
      billing_country:
        this.user.relationships.settings.data.attributes.billing_country,
      billing_phone_number:
        this.user.relationships.settings.data.attributes.billing_phone_number,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_forms";

.block-form {
  max-width: 100%;
}

.input-error {
  margin-top: 0.3rem;
  @include font-size(12);
  color: red;
  font-weight: 700;
}

.reset-input-number::-webkit-outer-spin-button,
.reset-input-number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.reset-input-number[type="number"] {
  -moz-appearance: textfield;
}

.sync-alt {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
