<template>
  <div v-if="open" class="otp-modal">
    <div class="otp-overlay" @click="closeModal"></div>

    <div :class="['otp', { first: step == 0 }]">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      </div>
      <div :class="[{ right: step == 1 }]">
        <h4 class="title">OTP Diperlukan</h4>

        <p class="description">
          Masukan 6 digit token yang diperlukan dari aplikasi <br />
          <slot></slot>
        </p>
        <!-- <p v-else class="description">
          Send OTP to email to your email address
        </p> -->

        <form @submit.prevent="useOtp">
          <input
            v-if="step == 1"
            v-model="otp"
            type="number"
            class="otp-input"
          />

          <div class="button-wrapper">
            <ButtonBase
              v-if="step == 0"
              type="button"
              button-style="secondary"
              @click.native="closeOTP"
              >Batal</ButtonBase
            >

            <ButtonBase
              v-else
              type="button"
              button-style="secondary"
              @click.native="resendOTP"
              :disabled="disabled"
            >
              Kirim Ulang
            </ButtonBase>
            <ButtonBase v-if="step == 0" type="submit" button-style="theme">
              Kirim OTP
            </ButtonBase>
            <ButtonBase
              v-else
              type="submit"
              :disabled="disabled"
              button-style="theme"
            >
              Tanda Tangani
            </ButtonBase>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "@/components/FilesView/ButtonBase";

export default {
  name: "OTPModal",
  components: {
    ButtonBase,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    resendOTP() {
      this.$emit("resend");
    },
    closeModal() {
      this.$emit("close");
    },
    useOtp() {
      this.$emit("submit", this.otp);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_forms";

.otp-modal {
  position: absolute;
  inset: 0;
  z-index: 999;
  width: 100%;

  .otp-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
  }

  .otp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 515px;
    width: 100%;
    height: 225px;
    background: #fff;
    border-radius: 0.75rem;
    display: flex;
    padding: 1.5rem;
    &.first {
      flex-direction: column;
    }
    .icon {
      height: 2.5rem;
      width: 2.5rem;
      min-width: 2.5rem;
      border-radius: 9999px;
      background-color: rgba(255, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.5rem;

      svg {
        height: 80%;
        width: 80%;
        fill: red;
        transform: rotate(-138deg);
      }
    }

    .right {
      width: 80%;
    }

    .title {
      @include font-size(17);
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    .description {
      @include font-size(13);
      color: $text;
      font-weight: 600;
      margin-bottom: 0.5rem;

      span {
        @include font-size(16);
        font-weight: 900;
      }
    }

    .otp-input::-webkit-outer-spin-button,
    .otp-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    .otp-input[type="number"] {
      -moz-appearance: textfield;
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 1rem;

      button:first-child {
        margin-right: 1rem;
      }
    }

    @media (prefers-color-scheme: dark) {
      .description {
        color: $dark_mode_text_primary;
      }
      .title {
        color: $dark_mode_text_primary;
      }
    }
  }
}
</style>
