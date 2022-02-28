<template>
  <AuthContentWrapper ref="auth">
    <!--Password reset link sended-->
    <AuthContent name="not-found" :visible="true">
      <img
        v-if="config.app_logo"
        class="logo"
        :src="$getImage(config.app_logo)"
        :alt="config.app_name"
      />
      <b v-if="!config.app_logo" class="auth-logo-text">{{
        config.app_name
      }}</b>

      <h1>{{ $t("page_shared_404.title") }}</h1>
      <h2>{{ $t("page_shared_404.subtitle") }}</h2>

      <span class="additional-link"
        >{{ $t("page_registration.have_an_account") }}
        <router-link :to="{ name: 'SignIn' }">
          {{ $t("page_forgotten_password.password_remember_button") }}
        </router-link>
      </span>
    </AuthContent>
  </AuthContentWrapper>
</template>

<script>
import AuthContentWrapper from "@/components/Auth/AuthContentWrapper";
import AuthContent from "@/components/Auth/AuthContent";
import { mapGetters } from "vuex";

export default {
  name: "NotFoundShared",
  components: {
    AuthContentWrapper,
    AuthContent,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_auth";
</style>
