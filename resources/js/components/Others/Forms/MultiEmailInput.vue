<template>
  <div class="wrapper">
    <label class="input-label">{{ label }}:</label>
    <div
      class="input-wrapper"
      :class="{ 'is-error': isError }"
      @click="$refs.input.focus()"
    >
      <div class="email-list">
        <div
          v-for="(memail, i) in emails"
          :key="i"
          class="email-tag"
          :class="{ 'mb-offset': getCharactersLength > 45 }"
        >
          <span>{{ memail }}</span>
          <x-icon class="icon" size="14" @click="removeEmail(memail)" />
        </div>
        <input
          ref="input"
          v-model="email"
          :size="inputSize"
          class="email-input"
          :placeholder="placeHolder"
          @keydown.delete="removeLastEmail($event)"
          @keyup="handleEmail()"
        />
      </div>
    </div>
    <span v-if="isError" class="error-message">{{ isError }}</span>
    <div
      v-if="emailResult.length > 0"
      class="autocomplete-list bg-white px-1 py-3 shadow-md cursor-pointer rounded-sm"
    >
      <div
        v-for="(profile, i) in emailResult.slice(0, 3)"
        :key="i"
        class="autocomplete-item"
        @click="addEmail(profile.email)"
      >
        <div
          class="profile-list-item flex justify-start items-center coursor-pointer"
        >
          <div class="avatar mr-4">
            <img
              :src="profile.avatar"
              alt="avatar"
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div class="profile">
            <h4 class="text-md font-medium mb-1">
              {{ profile.name }}
            </h4>
            <p class="text-sm color-gray-400">
              <span class="font-bold">{{
                profile.email.substring(0, email.length)
              }}</span
              >{{ profile.email.substring(email.length) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import { events } from "@/bus";
import debounce from "lodash/debounce";
import { findEmail } from "@/http_client/user_client";

export default {
  name: "MultiEmailInput",
  components: { XIcon },
  props: {
    label: {
      type: String,
      default: "Email",
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      emails: [],
      emailResult: [],
      email: undefined,
      emailFetcher: undefined,
    };
  },
  computed: {
    getCharactersLength() {
      return this.emails.join("").length;
    },
    placeHolder() {
      return !this.emails.length
        ? this.$t("shared_form.email_placeholder")
        : "";
    },
    inputSize() {
      return this.email && this.email.length > 14 ? this.email.length : 14;
    },
  },
  watch: {
    email(email) {
      this.emailFetcher(email);
    },
  },
  mounted() {
    this.emailFetcher = debounce(async (email) => {
      if (email.length > 3) {
        const { data, error } = await findEmail(email);
        if (error) return;
        this.emailResult = data.data;
      }
    }, 500);
  },
  created() {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  },
  methods: {
    removeEmail(email) {
      this.emails = this.emails.filter((item) => item !== email);

      // After romove email send new emails list to parent
      events.$emit("emailsInputValues", this.emails);
    },
    removeLastEmail(event) {
      // If is input empty and presse backspace remove last email from array
      if (event.code === "Backspace" && this.email === "") this.emails.pop();
    },
    addEmail(email) {
      this.emails.push(email);
      this.email = "";
      this.emailResult = [];

      // After add email send new emails list to parent
      events.$emit("emailsInputValues", this.emails);
    },
    handleEmail() {
      if (this.email.length > 0) {
        // Get index of @ and last dot
        let lastDot = this.email.lastIndexOf(".");
        let at = this.email.indexOf("@");

        // Check if is after @ some dot, if email have @ anf if dont have more like one
        if (lastDot < at || at === -1 || this.email.match(/@/g).length > 1)
          return;

        // First email dont need to be separated by comma or space to be sended
        if (this.emails.length === 0)
          events.$emit("emailsInputValues", [this.email]);

        // After come or backspace push the single email to array or emails
        if (this.email.includes(",") || this.email.includes(" ")) {
          let email = this.email.replace(/[","," "]/, "");

          this.email = "";

          // Push single email to aray of emails
          this.emails.push(email);

          events.$emit("emailsInputValues", this.emails);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_inapp-forms.scss";
@import "@assets/vue-file-manager/_forms";

.wrapper {
  margin-bottom: 20px;
}

.input-label {
  @include font-size(14);
  font-weight: 700;
  margin-bottom: 8px;
}

.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}

.input-wrapper {
  margin-bottom: 0;
  background: white;
  max-width: 100%;
  display: flex;
  min-height: 50px;
  border-radius: 8px;
  padding: 6px 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
  cursor: text;
  border: 1px solid transparent;
  @include transition(150ms);

  &.is-error {
    border: 1px solid $danger;
    box-shadow: 0 0 7px rgba($danger, 0.3);
  }

  &:focus-within {
    border: 1px solid $theme;
    box-shadow: 0 1px 5px rgba($theme, 0.3);
  }

  .email-list {
    display: flex;
    flex-wrap: wrap;

    .email-input {
      font-size: 14px;
    }
  }

  .email-tag {
    white-space: nowrap;
    display: flex;
    padding: 5px 10px;
    background: rgba($theme, 0.1);
    border-radius: 8px;
    margin-right: 5px;
    align-items: center;

    &.mb-offset {
      margin-top: 3px;
      margin-bottom: 3px;
    }

    span {
      color: $theme;
      font-weight: 700;
      @include font-size(14);
    }

    .icon {
      cursor: pointer;
      margin-left: 4px;
    }
  }

  .email-input {
    width: auto;
    border: none;
    font-weight: 700;
    @include font-size(16);
    padding-left: 11px;

    &::placeholder {
      color: rgba($text-muted, 0.5);
    }
  }
}

@media (prefers-color-scheme: dark) {
  .input-wrapper {
    background: $dark_mode_foreground;

    .email-list {
      .email-input {
        background: $dark_mode_foreground;
        color: $dark_mode_text_primary;

        &::placeholder {
          color: $dark_mode_text_secondary;
        }
      }
    }
  }
}
</style>
