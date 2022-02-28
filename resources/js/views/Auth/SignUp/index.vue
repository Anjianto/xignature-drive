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
            class="logo logo mx-auto"
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
          :isLoading="isLoading"
          @submit="saveRegister"
        />
      </AuthContent>
    </AuthContentWrapper>
    <ConfirmModal v-model="confirm" @accept="confirmValid"/>
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
import { events } from "@/bus";
import { SIGN_DOC_KEY, SIGN_DOC_ID} from "@/constants/variables"
import Cookies from "js-cookie";
import { format } from "date-fns";
import { ACT_REGISTER } from "@/constants/action"
import { ALERT_OPEN } from '@/constants/events';
import { notifError } from '@/utils';
import ConfirmModal from "@/components/Modal/ConfirmModal";

export default {
  name: "SignUp",
  components: {
    AuthContentWrapper,
    AuthContent,
    ConfirmModal,
    Step1,
    Step2,
    Step3,
    Step4,
  },
  data() {
    return {
      steps: 1,
      confirm: false,
      accept: false,
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

      dataRegister.append("sign_doc_key", Cookies.get(SIGN_DOC_KEY))
      dataRegister.append("sign_doc_id", Cookies.get(SIGN_DOC_ID))

      return dataRegister;
    },
  },
  methods: {
    confirmValid() {
      this.confirm = false;
      this.accept = true;
      this.steps = 4;
    },
    changeStep(step) {
      if(step === 4 && !this.accept) {
        this.confirm = true;
        return;
      }
      this.steps = step;
    },
    async saveRegister() {
      this.isLoading = true;
      const {data, error } = await this.$store.dispatch(ACT_REGISTER, {formData: this.formData});
      if(data) {
          events.$emit(ALERT_OPEN, {
            emoji: "🗝️",
            title: "Berhasil",	
            message: "Akun anda berhasil dibuat, silahkan cek email anda untuk verifikasi akun",
            buttonStyle: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            button: "Go To Files",
          })
          this.isLoading = false;
      } else {
        notifError(error, () => {
          this.isLoading = false;
          this.steps = 1;
        });
      }
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
