<template>
  <PageTab :is-loading="isLoading" class="form-fixed-width">
    <!--Personal Information-->
    <PageTabGroup>
      <ValidationObserver
        ref="EmailSetup"
        tag="form"
        class="form block-form"
        @submit.prevent="EmailSetupSubmit"
      >
        <FormLabel>Integration Setup</FormLabel>

        <InfoBox>
          <p>
            the form is not fully filled out for security reasons. Settings to
            add integration.
          </p>
        </InfoBox>

        <div class="block-wrapper">
          <label>Token :</label>
          <ValidationProvider
            v-slot="{ errors }"
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Mail Driver"
            rules="required"
          >
            <input
              v-model="mail.driver"
              :placeholder="$t('Type Your token.')"
              type="text"
              :class="{ 'is-error': errors[0] }"
            />
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <ButtonBase
          :loading="isSendingRequest"
          :disabled="isSendingRequest"
          type="submit"
          button-style="theme"
          class="submit-button"
        >
          Save Integration
        </ButtonBase>
      </ValidationObserver>
    </PageTabGroup>
  </PageTab>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import StorageItemDetail from "@/components/Others/StorageItemDetail";
import PageTabGroup from "@/components/Others/Layout/PageTabGroup";
import SelectInput from "@/components/Others/Forms/SelectInput";
import ImageInput from "@/components/Others/Forms/ImageInput";
import FormLabel from "@/components/Others/Forms/FormLabel";
import ButtonBase from "@/components/FilesView/ButtonBase";
import SetupBox from "@/components/Others/Forms/SetupBox";
import PageTab from "@/components/Others/Layout/PageTab";
import InfoBox from "@/components/Others/Forms/InfoBox";
import { required } from "vee-validate/dist/rules";
import { events } from "@/bus";
import axios from "axios";

export default {
  name: "AppAppearance",
  components: {
    ValidationObserver,
    ValidationProvider,
    StorageItemDetail,
    PageTabGroup,
    SelectInput,
    ImageInput,
    ButtonBase,
    FormLabel,
    SetupBox,
    required,
    PageTab,
    InfoBox,
  },
  data() {
    return {
      isLoading: false,
      isSendingRequest: false,
      encryptionList: [
        {
          label: "TLS",
          value: "tls",
        },
        {
          label: "SSL",
          value: "ssl",
        },
      ],
      mail: {
        driver: "",
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_forms";

.block-form {
  max-width: 100%;
}

@media only screen and (max-width: 960px) {
}

@media (prefers-color-scheme: dark) {
}
</style>
