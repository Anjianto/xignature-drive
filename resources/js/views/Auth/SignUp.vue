<template>
  <div id="single-page">
    <AuthContentWrapper ref="auth">
      <!--Registration-->
      <AuthContent
        id="AuthContent"
        class="center-page"
        name="sign-up"
        :visible="true"
      >
      <div v-if="!isPreRegister">
        <img
          v-if="config.app_logo"
          class="logo"
          :src="$getImage(config.app_logo)"
          :alt="config.app_name"
        />
        <b v-if="!config.app_logo" class="auth-logo-text">{{
          config.app_name
        }}</b>

        <h1>{{ $t("page_registration.title") }}</h1>
        <h2>{{ $t("page_registration.subtitle") }}</h2>
      </div>
        <div id="content-card">
          <ValidationObserver
            v-if="!isPreRegister"
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
                  v-model="register.email"
                  :placeholder="$t('page_registration.placeholder_email')"
                  type="email"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
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
                  v-model="register.name"
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
                  v-model="register.password"
                  :placeholder="$t('page_registration.placeholder_pass')"
                  type="password"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
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
                  v-model="register.password_confirmation"
                  :placeholder="
                    $t('page_registration.placeholder_confirm_pass')
                  "
                  type="password"
                  :class="{ 'is-error': errors[0] }"
                />
                <span class="error-message" v-if="errors[0]">{{
                  errors[0]
                }}</span>
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
              <AuthButton
                icon="chevron-right"
                :text="$t('page_registration.button_create_account')"
                :loading="isLoading"
                :disabled="isLoading"
              />
              <span class="additional-link"
                >{{ $t("page_registration.have_an_account") }}
                <router-link :to="{ name: 'SignIn' }">
                  {{ $t("page_forgotten_password.password_remember_button") }}
                </router-link>
              </span>
            </div>
          </ValidationObserver>
          <div class="container" v-else>
            <div class="card">
              <ProfileForm @receive-token="signUp" :email="register.email" :name="register.name"></ProfileForm>
            </div>
          </div>
        </div>
      </AuthContent>
    </AuthContentWrapper>
  </div>
</template>

<script>
import AuthContentWrapper from "@/components/Auth/AuthContentWrapper";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import ProfileForm from "@/components/Signature/ProfileForm";
import { required } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import { events } from "@/bus";
import axios from "axios";

export default {
  name: "SignUp",
  components: {
    AuthContentWrapper,
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    ProfileForm,
    required,
  },
  computed: {
    ...mapGetters(["config"]),
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
  data() {
    return {
      isLoading: false,
      isPreRegister: false,
      register: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async saveRegister() {
      // Validate fields
      const isValid = await this.$refs.sign_up.validate();

      if (!isValid) return;
      this.isPreRegister = true;
    },
    async signUp(token, expired) {
      // Validate fields
      const isValid = await this.$refs.sign_up.validate();

      if (!isValid) return;

      // Start loading
      this.isLoading = true;
      // add token into cookies
      this.$cookies.set("token", token, expired);
      // Send request to get user token
      axios
        .post("/api/user/register", {
          ...this.register,
          token,
        })
        .then(() => {
          // End loading
          this.isLoading = false;

          // Set login state
          this.$store.commit("SET_AUTHORIZED", true);
          // complete the profile
          this.$router.push({name: 'Files'})
        })
        .catch((error) => {
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

          // End loading
          this.isLoading = false;
        });
    },
  },
  created() {
    this.$scrollTop();
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
#content-card {
  max-width: 454px;
  margin: 0 auto;
  > * {
    border-radius: 20px;
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, 1);
    padding: 2.75rem 1.5rem;
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 #0000, 0 0 #0000,
       0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, .25);
  }
}
</style>
