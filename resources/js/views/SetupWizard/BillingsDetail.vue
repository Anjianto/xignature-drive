<template>
  <AuthContentWrapper ref="auth">
    <!--Database Credentials-->
    <AuthContent name="database-credentials" :visible="true">
      <div class="content-headline">
        <settings-icon size="40" class="title-icon"></settings-icon>
        <h1>Setup Wizard</h1>
        <h2>Set up your billing information.</h2>
      </div>

      <ValidationObserver
        ref="billingInformation"
        tag="form"
        class="form block-form"
        @submit.prevent="billingInformationSubmit"
      >
        <FormLabel>Company Information</FormLabel>

        <div class="block-wrapper">
          <label>Company Name:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing Name"
            rules="required"
          >
            <input
              v-model="billingInformation.billing_name"
              placeholder="Type your company name"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>VAT Number:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing Vat Number"
            rules="required"
          >
            <input
              v-model="billingInformation.billing_vat_number"
              placeholder="Type your VAT number"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <FormLabel class="mt-70">Billing Information</FormLabel>

        <div class="block-wrapper">
          <label>Billing Country:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing Country"
            rules="required"
          >
            <SelectInput
              v-model="billingInformation.billing_country"
              :options="countries"
              placeholder="Select your billing country"
              :is-error="errors[0]"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Billing Address:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing Address"
            rules="required"
          >
            <input
              v-model="billingInformation.billing_address"
              placeholder="Type your billing address"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="wrapper-inline">
          <div class="block-wrapper">
            <label>Billing City:</label>
            <ValidationProvider
              v-slot="{ errors }"
              tag="div"
              mode="passive"
              class="input-wrapper"
              name="Billing City"
              rules="required"
            >
              <input
                v-model="billingInformation.billing_city"
                placeholder="Type your billing city"
                type="text"
                :class="{ 'is-error': errors[0] }"
              />
              <span v-if="errors[0]" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
          <div class="block-wrapper">
            <label>Billing Postal Code:</label>
            <ValidationProvider
              v-slot="{ errors }"
              tag="div"
              mode="passive"
              class="input-wrapper"
              name="Billing Postal Code"
              rules="required"
            >
              <input
                v-model="billingInformation.billing_postal_code"
                placeholder="Type your billing postal code"
                type="text"
                :class="{ 'is-error': errors[0] }"
              />
              <span v-if="errors[0]" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
        </div>

        <div class="block-wrapper">
          <label>Billing State:</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing State"
            rules="required"
          >
            <input
              v-model="billingInformation.billing_state"
              placeholder="Type your billing state"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>Billing Phone Number (optional):</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Billing Phone Number"
          >
            <input
              v-model="billingInformation.billing_phone_number"
              placeholder="Type your billing phone number"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="submit-wrapper">
          <AuthButton
            icon="chevron-right"
            text="Save and Create Plans"
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
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import { SettingsIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "BillingsDetail",
  components: {
    AuthContentWrapper,
    ValidationProvider,
    ValidationObserver,
    SettingsIcon,
    SelectInput,
    AuthContent,
    AuthButton,
    FormLabel,
  },
  data() {
    return {
      isLoading: false,
      billingInformation: {
        billing_phone_number: "",
        billing_postal_code: "",
        billing_vat_number: "",
        billing_address: "",
        billing_country: "",
        billing_state: "",
        billing_city: "",
        billing_name: "",
      },
    };
  },
  computed: {
    ...mapGetters(["countries"]),
  },
  created() {
    this.$scrollTop();
  },
  methods: {
    async billingInformationSubmit() {
      // Validate fields
      const isValid = await this.$refs.billingInformation.validate();

      if (!isValid) return;

      // Start loading
      this.isLoading = true;

      // Send request to get verify account
      axios
        .post("/api/setup/stripe-billings", this.billingInformation)
        .then(() => {
          // Redirect to next step
          this.$router.push({ name: "SubscriptionPlans" });
        })
        .catch((error) => {})
        .finally(() => {
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
