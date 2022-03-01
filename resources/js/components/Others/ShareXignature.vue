<template>
  <PopupWrapper name="share-xignature">
    <!--Title-->
    <PopupHeader
      :title="$t('popup_share_xignature.title', { item: itemTypeTitle })"
      icon="share"
    />

    <!--Content-->
    <PopupContent>
      <!--Item Thumbnail-->
      <ThumbnailItem
        class="item-thumbnail"
        :item="pickedItem"
        info="metadata"
      />

      <!-- Infobox for successfull sended email -->
      <InfoBox
        v-if="isGeneratedShared && sharedViaEmail"
        class="info-box-wrapper"
      >
        <p v-html="$t('shared_form.email_successfully_send_message')"></p>
      </InfoBox>

      <!--Form to set sharing-->
      <ValidationObserver
        @submit.prevent
        v-if="!isGeneratedShared"
        ref="shareForm"
        tag="form"
        class="form-wrapper"
      >
        <TabWrapper>
          <!-- share xiganture -->
          <TabOption :selected="true" :title="$t('Xignature')" icon="link">
            <ValidationProvider
              tag="div"
              mode="passive"
              name="Email"
              rules="required"
              v-slot="{ errors }"
            >
              <MultiEmailInput
                rules="required"
                v-model="shareOptions.emails"
                :label="$t('shared_form.recipients_label')"
                :isError="errors[0]"
              />
            </ValidationProvider>
          </TabOption>
        </TabWrapper>

        <!--Permision Select-->
        <ValidationProvider
          v-if="isFolder"
          tag="div"
          mode="passive"
          class="input-wrapper"
          name="Permission"
          rules="required"
          v-slot="{ errors }"
        >
          <label class="input-label"
            >{{ $t("shared_form.label_permission") }}:</label
          >
          <SelectInput
            v-model="shareOptions.permission"
            :options="$translateSelectOptions(permissionOptions)"
            :placeholder="$t('shared_form.placeholder_permission')"
            :isError="errors[0]"
          />
          <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
      </ValidationObserver>

      <!--Copy generated link-->
      <div v-if="isGeneratedShared" class="form-wrapper">
        <div class="input-wrapper">
          <label class="input-label"
            >{{
              this.sharedViaEmail
                ? $t("shared_form.label_share_vie_email")
                : $t("shared_form.label_shared_url")
            }}:</label
          >
          <CopyInput size="small" :item="pickedItem" />
        </div>
      </div>
    </PopupContent>

    <!--Actions-->
    <PopupActions>
      <ButtonBase
        v-if="!isGeneratedShared"
        class="popup-button"
        @click.native="$closePopup()"
        button-style="secondary"
        >{{ $t("popup_move_item.cancel") }}
      </ButtonBase>
      <ButtonBase
        class="popup-button"
        @click.native="submitShareOptions"
        button-style="theme"
        :loading="isLoading"
        :disabled="isLoading"
        >{{ submitButtonText }}
      </ButtonBase>
    </PopupActions>
  </PopupWrapper>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import SelectBoxInput from "@/components/Others/Forms/SelectBoxInput";
import PopupWrapper from "@/components/Others/Popup/PopupWrapper";
import PopupActions from "@/components/Others/Popup/PopupActions";
import PopupContent from "@/components/Others/Popup/PopupContent";
import PopupHeader from "@/components/Others/Popup/PopupHeader";
import MultiEmailInput from "@/components/Others/Forms/MultiEmailInput";
import SwitchInput from "@/components/Others/Forms/SwitchInput";
import SelectInput from "@/components/Others/Forms/SelectInput";
import ThumbnailItem from "@/components/Others/ThumbnailItem";
import ActionButton from "@/components/Others/ActionButton";
import CopyInput from "@/components/Others/Forms/CopyInput";
import TabWrapper from "@/components/Others/TabWrapper";
import TabOption from "@/components/Others/TabOption";
import ButtonBase from "@/components/FilesView/ButtonBase";
import InfoBox from "@/components/Others/Forms/InfoBox";
import { LinkIcon, MailIcon, Share2Icon } from "vue-feather-icons";
import { required } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import { events } from "@/bus";
import axios from "axios";
import { inviteSign } from '@/http_client/signature_client';

export default {
  name: "ShareXignature",
  components: {
    ValidationProvider,
    ValidationObserver,
    SelectBoxInput,
    ThumbnailItem,
    ActionButton,
    PopupWrapper,
    PopupActions,
    TabWrapper,
    TabOption,
    PopupContent,
    PopupHeader,
    MultiEmailInput,
    SelectInput,
    SwitchInput,
    ButtonBase,
    CopyInput,
    MailIcon,
    Share2Icon,
    required,
    LinkIcon,
    InfoBox,
  },
  computed: {
    ...mapGetters(["permissionOptions", "expirationList"]),
    itemTypeTitle() {
      return this.pickedItem && this.pickedItem.type === "folder"
        ? this.$t("types.folder")
        : this.$t("types.file");
    },
    isFolder() {
      return this.pickedItem && this.pickedItem.type === "folder";
    },
    submitButtonText() {
      return this.isGeneratedShared
        ? this.$t("shared_form.button_done")
        : this.$t("shared_form.button_generate");
    },
    moreOptionsTitle() {
      return this.isMoreOptions
        ? this.$t("shared_form.button_close_options")
        : this.$t("shared_form.button_more_options");
    },
  },
  data() {
    return {
      shareOptions: {
        isPassword: false,
        expiration: undefined,
        password: undefined,
        permission: undefined,
        type: undefined,
        unique_id: undefined,
        emails: undefined,
      },
      pickedItem: undefined,
      isGeneratedShared: false,
      isLoading: false,
      isMoreOptions: false,
      sharedViaEmail: false,
    };
  },
  methods: {
    moreOptions() {
      this.isMoreOptions = !this.isMoreOptions;

      if (!this.isMoreOptions) this.shareOptions.expiration = undefined;
    },
    async submitShareOptions() {
      // If shared was generated, then close popup
      if (this.isGeneratedShared) {
        events.$emit("popup:close");

        return;
      }

      // Validate fields
      const isValid = await this.$refs.shareForm.validate();

      if (!isValid) return;

      this.isLoading = true;
      const queue = this.shareOptions.emails.map((email) => inviteSign(email, this.pickedItem.id));
      Promise.all(queue)
        .then(() => {
          // Show infobox and reset emails container
          this.sharedViaEmail = true;

          // End loading
          this.isGeneratedShared = true;

        })
        .catch((e) => {
          console.log(e);
          events.$emit("alert:open", {
            title: this.$t("popup_error.title"),
            message: this.$t("popup_error.message"),
          });

          // End loading
          this.isLoading = false;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    events.$on(
      "emailsInputValues",
      (emails) => (this.shareOptions.emails = emails)
    );

    // Show popup
    events.$on("popup:open", (args) => {
      if (args.name !== "share-xignature") return;

      // Store picked item
      this.pickedItem = args.item;


      this.shareOptions.type = args.item.type;
      this.shareOptions.unique_id = args.item.unique_id;
    });

    // Close popup
    events.$on("popup:close", () => {
      // Restore data
      setTimeout(() => {
        this.shareOptions = {
          permission: undefined,
          password: undefined,
          isPassword: false,
          expiration: undefined,
          type: undefined,
          unique_id: undefined,
          emails: undefined,
        };
        this.isGeneratedShared = false;
        this.isMoreOptions = false;
        this.sharedViaEmail = false;
      }, 150);
    });
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_inapp-forms.scss";
@import "@assets/vue-file-manager/_forms";

.more-options {
  margin-bottom: 10px;
}

.input-wrapper {
  &.password {
    margin-top: -10px;
  }
}

.item-thumbnail {
  margin-bottom: 20px;
}
</style>
