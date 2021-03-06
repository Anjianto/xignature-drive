<template>
  <AuthContentWrapper ref="auth">
    <!--Log In by Email-->
    <AuthContent name="log-in" :visible="true">
      <img
        v-if="config.app_logo"
        class="logo"
        :src="$getImage(config.app_logo)"
        :alt="config.app_name"
      />
      <b v-if="!config.app_logo" class="auth-logo-text">{{
        config.app_name
      }}</b>

      <h1>
        <template v-if="!status">
          {{ $t("page_registration_activation.title") }}
        </template>
        <template v-else-if="status === 'success'">
          {{ $t("page_registration_activation.title_success") }}
        </template>
        <template v-else-if="status === 'expired'">
          {{ $t("page_registration_activation.title_expired") }}
        </template>
        <template v-else-if="status === 'invalid'">
          {{ $t("page_registration_activation.title_invalid") }}
        </template>
      </h1>

      <h2>
        <template v-if="!status">
          {{ $t("page_registration_activation.subtitle") }}
        </template>
        <template v-else-if="status === 'success'">
          {{ $t("page_registration_activation.subtitle_success") }}
        </template>
        <template v-else-if="status === 'expired' || status === 'invalid'">
          {{ $t("page_registration_activation.subtitle_expired|invalid") }}
        </template>
      </h2>

      <ValidationObserver
        v-if="!status || status === 'expired' || status === 'invalid'"
        @submit.prevent="activateAccount"
        ref="log_in"
        tag="form"
        class="form inline-form"
      >
        <ValidationProvider
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="E-Mail"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="email"
            :placeholder="$t('page_login.placeholder_email')"
            type="email"
            :class="{ 'is-error': errors[0] }"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>

        <AuthButton
          icon="chevron-right"
          :text="$t('page_registration_activation.button_activate_account')"
          :loading="isLoading"
          :disabled="isLoading"
        />
      </ValidationObserver>
    </AuthContent>
  </AuthContentWrapper>
</template>

<script>
import AuthContentWrapper from "@/components/Auth/AuthContentWrapper";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import { required } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import { events } from "@/bus";

export default {
  name: "SignIn",
  components: {
    AuthContentWrapper,
    ValidationProvider,
    ValidationObserver,
    AuthContent,
    AuthButton,
    required,
  },
  computed: {
    ...mapGetters(["config"]),
  },
  data() {
    return {
      isLoading: false,
      // success | expired | invalid | null
      status: null,
      email: "",
    };
  },
  methods: {
    activateAccount() {},
  },
  created() {
    this.$scrollTop();
    this.$store.commit("PROCESSING_POPUP", undefined);
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_auth-form";
@import "@assets/vue-file-manager/_auth";
</style>
