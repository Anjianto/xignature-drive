<template>
  <div id="content-card">
    <ValidationObserver
      @submit.prevent="saveRegister"
      ref="form"
      tag="form"
      class="form block-form"
    >
      <div class="block-wrapper">
      <div class="flex justify-center">
        <div class="text-center mb-4">
          <h3 class="text-lg">Getting Started</h3>
        <p class="text-gray-500">Create an account to continue!</p>
        </div>
      </div>
        <label>{{ $t("page_registration.label_email") }}</label>
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="E-Mail"
          rules="required|mailcheck|email"
          v-slot="{ errors }"
        >
          <input
            v-model="value.email"
            name="email"
            :placeholder="$t('page_registration.placeholder_email')"
            type="email"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
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
            v-model="value.name"
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
          rules="required|confirmed:confirmation"
          v-slot="{ errors }"
        >
          <input
            v-model="value.password"
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
          vid="confirmation"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="value.password_confirmation"
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
  confirmation,
  defineRule,
  required, ext, digits, min, email
} from "vee-validate/dist/vee-validate.full";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import ProfileForm from "@/components/Signature/ProfileForm";
import { mapGetters } from "vuex";
import { emailUniq } from '@/validators/email-exist';

emailUniq('/')
export default {
  name: "Step1",
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
    confirmation,
    required,
    ext,
    digits,
    email,
    min,
  },
  props: ['value'],
  computed: {
    ...mapGetters(["config", "api"]),
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
    async saveRegister() {
      const isValid = await this.$refs.form.validate();
      if(!isValid) return;
      console.log('goto step 2');
      this.$emit("step", 2);
    },
  }
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
