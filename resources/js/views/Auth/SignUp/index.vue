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
        <div>
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
        <Step1
          v-if="steps === 1"
          :errors="errors"
          v-model="data"
          @step="changeStep"
        />
        <Step2 v-else-if="steps === 2" v-model="data.ktp" @step="changeStep" />
        <Step3 v-else-if="steps === 3" v-model="data" @step="changeStep" />
        <Step4
          v-else-if="steps === 4"
          v-model="data.selfie"
          @finish="saveRegister"
        />
      </AuthContent>
    </AuthContentWrapper>
  </div>
</template>

<script>
import AuthContentWrapper from "@/components/Auth/AuthContentWrapper";
import AuthContent from "@/components/Auth/AuthContent";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { mapGetters } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import { differenceInDays, format } from "date-fns";
export default {
  name: "SignUp",
  components: {
    AuthContentWrapper,
    AuthContent,
    Step1,
    Step2,
    Step3,
    Step4,
  },
  data() {
    return {
      steps: 1,
      data: {
        name: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        phone: undefined,
        phone: undefined,
        nik: undefined,
        ktp: undefined,
        birthplace: undefined,
        birthdate: undefined,
        selfie: undefined,
      },
      errors: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["config"]),
    formData() {
      const dataRegister = new FormData();
      dataRegister.append("name", this.data.name);
      dataRegister.append("email", this.data.email);
      dataRegister.append("password", this.data.password);
      dataRegister.append(
        "password_confirmation",
        this.data.password_confirmation
      );
      dataRegister.append("phone", this.data.phone);
      dataRegister.append("nik", this.data.nik);
      dataRegister.append("ktp", this.data.ktp);
      dataRegister.append("selfie", this.data.selfie);
      dataRegister.append(
        "birth_date",
        format(this.data.birthdate, "yyyy-MM-dd")
      );
      dataRegister.append("birth_place", this.data.birthplace);

      dataRegister.append("sign_doc_key", Cookies.get("share_token"))
      dataRegister.append("sign_doc_id", Cookies.get("share_id"))

      return dataRegister;
    },
  },
  methods: {
    changeStep(step) {
      this.steps = step;
    },
    async signUp(token, expired) {
      const daysDiff = differenceInDays(expired, new Date());
      Cookies.set("sign", token, { expires: daysDiff });
      this.$router.push({ name: "Files" });
    },
    saveRegister() {
      this.isLoading = true;

      axios
        .post("/api/user/register", this.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        // })
        .then(() => {
          this.isLoading = false;
          this.$store.commit("SET_AUTHORIZED", true);
          console.log("success");
          this.$router.push({
            name: "Files",
            query: { create_signature: true },
          });
        })
        .catch((error) => {
          if (!error.response) return;
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
              this.errors["email"] = error.response.data.errors["email"];
              this.step = 1;
            }
            if (error.response.data.errors["password"]) {
              this.errors["password"] = error.response.data.errors["password"];

              this.step = 1;
            }

            events.$emit("alert:open", {
              emoji: "🤔",
              title: "Failed Upload Data",
              message: "Please check your data",
            });
          }

          if (Object.keys(error.response.data.errors).length > 0) {
            const firstKey = Object.keys(error.response.data.errors)[0];
            events.$emit("alert:open", {
              emoji: "🤔",
              title: firstKey,
              message: error.response.data.errors[firstKey][0],
            });
          }

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
