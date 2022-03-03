<template>
  <!-- eslint-disable vue/no-mutating-props */ -->
  <div id="content-card">
    <ValidationObserver
      ref="form"
      tag="form"
      class="form block-form"
      @submit.prevent="saveRegister"
    >
      <div class="flex justify-center">
        <div class="text-center mb-4">
          <h3 class="text-lg">Enter your Personal Data</h3>
          <p class="text-gray-500">
            Enter your identity data based on your ID card.
          </p>
        </div>
      </div>
      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_nik") }}</label>
        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="KTP"
          rules="required|min:16|max:16"
        >
          <input
            v-model="value.nik"
            :placeholder="$t('page_registration.placeholder_nik')"
            type="number"
            class="reset-input-number"
            :class="{ 'is-error': errors[0] || APIErrors.nik }"
          />
          <span v-if="nikHint && !errors.length" class="input-hint"
            >{{ nikHint }}
          </span>
          <span v-if="errors[0] || APIErrors.nik" class="error-message">{{
            errors[0] || APIErrors.nik
          }}</span>
        </ValidationProvider>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_phone") }}</label>
        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Phone"
          rules="required|min:12|max:12"
        >
          <input
            v-model="value.phone"
            :placeholder="$t('page_registration.placeholder_phone')"
            type="number"
            class="reset-input-number"
            :class="{ 'is-error': errors[0] || APIErrors.phone }"
          />
          <span v-if="phoneHint && !errors.length" class="input-hint"
            >{{ phoneHint }}
          </span>
          <span v-if="errors[0] || APIErrors.phone" class="error-message">{{
            errors[0] || APIErrors.phone
          }}</span>
        </ValidationProvider>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_birthplace") }}</label>
        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Birth Place"
          rules="required"
        >
          <input
            v-model="value.birthplace"
            :placeholder="$t('page_registration.label_birthplace')"
            type="text"
            :class="{ 'is-error': errors[0] }"
          />
          <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="block-wrapper">
        <label>{{ $t("page_registration.label_birthdate") }}</label>
        <div class="input-wrapper">
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Birthdate"
            rules="required"
          >
            <DatePicker
              v-model="value.birthdate"
              :placeholder="$t('page_registration.placeholder_birthdate')"
              format="YYYY-MM-DD"
              :input-attr="{
                class: ['mx-input date-field'],
              }"
              type="date"
            >
            </DatePicker>
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>

      <div>
        <div class="container center">
          <AuthButton icon="chevron-right" text="Continue" />
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
import AuthButton from "@/components/Auth/AuthButton";
import { mapGetters } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "SignUpStep3",
  components: {
    DatePicker,
    ValidationProvider,
    ValidationObserver,
    AuthButton,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ["value", "APIErrors"],
  computed: {
    ...mapGetters(["config", "registerErrors"]),
    nikHint() {
      const size = this.value.nik?.length || 0;
      const total = 16 - size;
      return total && total > 0 ? `type ${total} number more` : "";
    },
    phoneHint() {
      const size = this.value.phone?.length || 0;
      const total = 12 - size;
      return total && total > 0 ? `type ${total} number more` : "";
    },
  },
  methods: {
    async saveRegister() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;

      this.$emit("step", 4);
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

.input-hint {
  @include font-size(12);
  color: #8a8a8a;
  font-weight: 700;
}
</style>
