<template>
  <AuthContentWrapper ref="auth">
    <!--Database Credentials-->
    <AuthContent name="database-credentials" :visible="true">
      <div class="content-headline">
        <settings-icon size="40" class="title-icon"></settings-icon>
        <h1>Setup Wizard</h1>
        <h2>
          Set up your database connection to install application database.
        </h2>
      </div>

      <ValidationObserver
        ref="verifyPurchaseCode"
        tag="form"
        class="form block-form"
        @submit.prevent="databaseCredentialsSubmit"
      >
        <FormLabel>Database Credentials</FormLabel>
        <InfoBox>
          <p>
            We strongly recommend use MySQL or MariaDB database. Create new
            database, set all privileges and get credentials. For those who use
            cPanel or Plesk, here is useful resources:
          </p>
          <ul>
            <li>
              <a
                href="https://www.inmotionhosting.com/support/edu/cpanel/create-database-2/"
                target="_blank"
                >1. cPanel - MySQL Database Wizard</a
              >
              <a
                href="https://docs.plesk.com/en-US/obsidian/customer-guide/65157/"
                target="_blank"
                >2. Plesk - Website databases</a
              >
            </li>
          </ul>
        </InfoBox>

        <div class="block-wrapper">
          <label>Connection:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Connection"
            rules="required"
          >
            <SelectInput
              v-model="databaseCredentials.connection"
              :options="connectionList"
              default="mysql"
              placeholder="Select your database connection"
              :is-error="errors[0]"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Host:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Host"
            rules="required"
          >
            <input
              v-model="databaseCredentials.host"
              placeholder="Type your database host"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Port:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Port"
            rules="required"
          >
            <input
              v-model="databaseCredentials.port"
              placeholder="Type your database port"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Database Name:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Database Name"
            rules="required"
          >
            <input
              v-model="databaseCredentials.name"
              placeholder="Select your database name"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Database Username:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Database Username"
            rules="required"
          >
            <input
              v-model="databaseCredentials.username"
              placeholder="Select your database name"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Database Password:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Database Password"
            rules="required"
          >
            <input
              v-model="databaseCredentials.password"
              placeholder="Select your database password"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <InfoBox v-if="isError" type="error" style="margin-bottom: 10px">
          <p>
            We couldn't establish database connection. Please double check your
            database credentials.
          </p>
          <br />
          <p>Detailed error: {{ errorMessage }}</p>
        </InfoBox>

        <div class="submit-wrapper">
          <AuthButton
            icon="chevron-right"
            :text="submitButtonText"
            :loading="isLoading"
            :disabled="isLoading"
          />
        </div>
      </ValidationObserver>
    </AuthContent>
  </AuthContentWrapper>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import AuthContentWrapper from "@/components/Auth/AuthContentWrapper";
import SelectInput from "@/components/Others/Forms/SelectInput";
import FormLabel from "@/components/Others/Forms/FormLabel";
import InfoBox from "@/components/Others/Forms/InfoBox";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import { SettingsIcon } from "vue-feather-icons";
import { required } from "vee-validate/dist/rules";
import axios from "axios";

export default {
  name: "SetupDatabase",
  components: {
    AuthContentWrapper,
    ValidationProvider,
    ValidationObserver,
    SettingsIcon,
    SelectInput,
    AuthContent,
    AuthButton,
    FormLabel,
    InfoBox,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      errorMessage: "",
      connectionList: [
        {
          label: "MySQL",
          value: "mysql",
        },
      ],
      databaseCredentials: {
        connection: "mysql",
        host: "",
        port: "",
        name: "",
        username: "",
        password: "",
      },
    };
  },
  computed: {
    submitButtonText() {
      return this.isLoading
        ? "Testing and Installing Database"
        : "Test Connection and Install Database";
    },
  },
  created() {
    this.$scrollTop();
  },
  methods: {
    async databaseCredentialsSubmit() {
      // Validate fields
      const isValid = await this.$refs.verifyPurchaseCode.validate();

      if (!isValid) return;

      // Start loading
      this.isLoading = true;
      this.isError = false;

      // Send request to get verify account
      axios
        .post("/api/setup/database", this.databaseCredentials)
        .then((response) => {
          // End loading
          this.isLoading = false;

          // Redirect to next step
          this.$router.push({ name: "InstallationDisclaimer" });
        })
        .catch((error) => {
          if (error.response.status === 500) {
            this.isError = true;
            this.errorMessage = error.response.data.message;
          }

          // End loading
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
//@import '@assets/vue-file-manager/_auth-form';
@import "@assets/vue-file-manager/_forms";
@import "@assets/vue-file-manager/_auth";
@import "@assets/vue-file-manager/_setup_wizard";
</style>
