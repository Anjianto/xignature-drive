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
        <label>{{ $t("page_registration.label_nik") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="KTP"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.nik"
            :placeholder="$t('page_registration.placeholder_nik')"
            type="number"
            class="reset-input-number"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <p v-if="registerErrors.nik" class="input-error">
          {{ registerErrors.nik }}
        </p>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_phone") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Phone"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.phone"
            :placeholder="$t('page_registration.placeholder_phone')"
            type="number"
            class="reset-input-number"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <p v-if="registerErrors.phone" class="input-error">
          {{ registerErrors.phone }}
        </p>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_birthplace") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Birth Place"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.birthplace"
            :placeholder="$t('page_registration.label_birthplace')"
            type="text"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <p v-if="registerErrors.birthplace" class="input-error">
          {{ registerErrors.birthplace }}
        </p>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_birthdate") }}</label>
        <div class="input-wrapper">
          <DatePicker
            @change="changeUserBirthdate"
            :placeholder="$t('page_registration.placeholder_birthdate')"
            v-model="registerData.birthdate"
            format="YYYY-MM-DD"
            :input-attr="{
              class: ['mx-input date-field'],
            }"
            type="date"
          >
          </DatePicker>
        </div>
        <p v-if="registerErrors.birthday" class="input-error">
          {{ registerErrors.birthday }}
        </p>
      </div>

      <div>
        <div class="container center">
          <AuthButton
            icon="chevron-right"
            text="Continue"
            :disabled="
              !registerData.nik &&
              !registerData.phone &&
              !registerData.birthplace &&
              !registerData.birthday
            "
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { format } from "date-fns";

export default {
  name: "Step3",
  components: {
    DatePicker,
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  computed: {
    ...mapGetters(["config", "registerData", "registerErrors"]),
  },
  methods: {
    saveRegister() {
      if (!this.registerData.nik) {
        this.$store.dispatch("set_register_error", {
          nik: "NIK is required!",
        });
        return;
      }
      if (
        `${this.registerData.nik}`.length < 16 ||
        `${this.registerData.nik}`.length > 16
      ) {
        this.$store.dispatch("set_register_error", {
          nik: "NIK must be 16 digits!",
        });
        return;
      }
      if (
        `${this.registerData.phone}`.length < 12 ||
        `${this.registerData.phone}`.length > 12
      ) {
        this.$store.dispatch("set_register_error", {
          phone: "Phone must be 12 digits!",
        });
        return;
      }
      if (!this.registerData.birthplace) {
        this.$store.dispatch("set_register_error", {
          birthplace: "Birthplace is required!",
        });
        return;
      }
      if (!this.registerData.birthday) {
        this.$store.dispatch("set_register_error", {
          birthday: "Birthday is required!",
        });
        return;
      }

      this.$store.dispatch("set_steps", 4);
    },
    changeUserBirthdate() {
      const date = format(this.registerData.birthdate, "yyyy-MM-dd");
      this.$store.dispatch("set_register_data", {
        birthday: date,
      });
      // this.$store.commit("UPDATE_BIRTHDATE", this.registerData.birthdate);
      // this.$updateText("/user/profile", "birth_date", date);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_auth-form";
@import "@assets/vue-file-manager/_auth";

.reset-input-number::-webkit-outer-spin-button,
.reset-input-number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.reset-input-number[type="number"] {
  -moz-appearance: textfield;
}

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

.input-error {
  margin-top: 0.3rem;
  @include font-size(12);
  color: red;
  font-weight: 700;
}
</style>
