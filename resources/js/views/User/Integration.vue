<template>
  <PageTab>
    <PageTabGroup>
      <ValidationObserver
        ref="password"
        tag="form"
        class="form block-form"
        @submit.prevent="resetPassword"
      >
        <FormLabel>{{ $t("Integration Setup") }}</FormLabel>
        <div class="block-wrapper">
          <label>{{ $t("Token") }}:</label>
          <SwitchInput class="switch" :state="0" />
        </div>
        <div class="block-wrapper">
          <ButtonBase type="submit" button-style="theme" class="confirm-form">
            {{ $t("Save Integration") }}
          </ButtonBase>
        </div>
      </ValidationObserver>
    </PageTabGroup>
  </PageTab>
</template>

<script>
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";
import PageTabGroup from "@/components/Others/Layout/PageTabGroup";
import FormLabel from "@/components/Others/Forms/FormLabel";
import ButtonBase from "@/components/FilesView/ButtonBase";
import SwitchInput from "@/components/Others/Forms/SwitchInput";
import PageTab from "@/components/Others/Layout/PageTab";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Integration",
  components: {
    PageTabGroup,
    FormLabel,
    PageTab,
    ValidationObserver,
    ButtonBase,
    SwitchInput,
  },
  data() {
    return {
      newPasswordConfirmation: "",
      newPassword: "",
      isLoading: false,
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
  .form {
    .button-base {
      width: 100%;
      margin-top: 0;
      text-align: center;
    }
  }
}

@media (prefers-color-scheme: dark) {
}
</style>
