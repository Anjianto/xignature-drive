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
        <label>{{ $t("page_registration.label_email") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="E-Mail"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.email"
            @keyup="updateField"
            name="email"
            :placeholder="$t('page_registration.placeholder_email')"
            type="email"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <p v-if="registerErrors.email" class="input-error">
          {{ registerErrors.email }}
        </p>
      </div>

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
            v-model="registerData.name"
            :placeholder="$t('page_registration.placeholder_name')"
            type="text"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_pass") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Your New Password"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.password"
            :placeholder="$t('page_registration.placeholder_pass')"
            type="password"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_confirm_pass") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Confirm Your Password"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="registerData.password_confirmation"
            :placeholder="$t('page_registration.placeholder_confirm_pass')"
            type="password"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div>
        <i18n
          path="page_registration.agreement"
          tag="p"
          class="legal-agreement"
        >
          <router-link
            :to="{
              name: 'DynamicPage',
              params: { slug: 'terms-of-service' },
            }"
            target="_blank"
            >{{ termsOfService.title }}</router-link
          >
          <router-link
            :to="{
              name: 'DynamicPage',
              params: { slug: 'privacy-policy' },
            }"
            target="_blank"
            >{{ privacyPolicy.title }}</router-link
          >
        </i18n>
        <div class="container center">
          <AuthButton
            icon="chevron-right"
            :text="$t('page_registration.button_create_account')"
            :disabled="
              !registerData.email &&
              !registerData.name &&
              !registerData.password &&
              !registerData.password_confirmation
            "
          />
        </div>
        <span class="additional-link"
          >{{ $t("page_registration.have_an_account") }}
          <router-link :to="{ name: 'SignIn' }">
            {{ $t("page_forgotten_password.password_remember_button") }}
          </router-link>
        </span>
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

export default {
  name: "Step1",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
  },
  computed: {
    ...mapGetters(["config", "registerData", "registerErrors"]),
    privacyPolicy() {
      return this.config.legal.find((legal) => {
        return legal.slug === "privacy-policy";
      });
    },
    termsOfService() {
      return this.config.legal.find((legal) => {
        return legal.slug === "terms-of-service";
      });
    },
  },
  methods: {
    saveRegister() {
      const emailRe =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!this.registerData.email) {
        this.$store.dispatch("set_register_error", {
          email: "Email is required!",
        });
        return;
      }
      if (!emailRe.test(this.registerData.email)) {
        this.$store.dispatch("set_register_error", {
          email: "Email is not valid!",
        });
        return;
      }
      if (!this.registerData.password) {
        this.$store.dispatch("set_register_error", {
          password: "Password is required!",
        });
        return;
      }
      if (!this.registerData.password_confirmation) {
        this.$store.dispatch("set_register_error", {
          password_confirmation: "Password Confirmation is required!",
        });
        return;
      }

      this.$store.dispatch("set_steps", 2);
    },
    updateField(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.$store.dispatch("set_register_data", {
        [name]: value,
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

.input-error {
  margin-top: 0.3rem;
  @include font-size(12);
  color: red;
  font-weight: 700;
}
</style>
