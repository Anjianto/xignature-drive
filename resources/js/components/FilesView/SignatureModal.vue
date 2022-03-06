<template>
  <VueDragResize
    ref="vdrRef"
    :isResizable="false"
    :parentLimitation="true"
    @dragging="onDrag"
    @dragstart="onDragStart"
    @dragstop="onDragStop"
    :w="224"
    :h="128"
    :x="x"
    :y="y"
  >
    <div class="popover-panel">
      <button @click="closeModal" class="btn-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn-close-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="signature-wrapper">
        <div class="signature-img">
          <div>
            <div>
              <img
                src="/assets/images/barcode-document.png"
                alt="Signature"
                class="barcode-img"
              />
              <div class="detail-wrapper">
                <p>
                  <span class="digital-sign">Digitally Signed By</span>
                  <span class="digital-username">{{
                    user.data.attributes.name
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-bottom-dot" />
    </div>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import { mapGetters } from "vuex";

export default {
  name: "SignatureModal",
  components: {
    VueDragResize,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    parentW: {
      type: Number,
      default: 0,
    },
    parentH: {
      type: Number,
      default: 0,
    },
    parentLimitation: {
      type: Boolean,
      default: true,
    },
    isValidPosition: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: true,
      isRender: false,
      onDragStart: false,
      otp: "",
      step: 0,
    };
  },
  watch: {
    onDragStart(isStart) {
      if (isStart) {
        console.log("onDragStart", isStart);
        this.$emit("handleDragStart");
      }
    },
    closeModal() {
      this.$emit("handleClose");
    },
  },
  methods: {
    closeModal() {
      this.$emit("handleClose");
    },
    onDrag({ left, top, height, width }) {
      // console.log("onDrag", { left, top, height, width });
      // if (!prevPosition) {
      //   prevPosition.left = left;
      //   prevPosition.top = top;
      // }

      this.onDragStart = true;
    },
    onDragStop({ left, top, height, width }) {
      /** @type {HTMLDivElement} */
      const parent = this.$refs.vdrRef.parentElement;
      const rect = parent.getBoundingClientRect();
      const win = parent.ownerDocument.defaultView;
      // console.log(parent);

      const pos = {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset,
      };
      // console.log(pos);
      const currentCanvas = document.elementFromPoint(pos.left, pos.top);

      this.onDragStart = true;
      // console.log("onDragStop", { left, top, height, width }, currentCanvas);
      this.$emit("handleSubmitCoordinate", { left, top, height, width });
    },
  },
  mounted() {
    this.isRender = true;
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_forms";

.popover-panel {
  position: absolute;
  left: 0;
  z-index: 10;
  height: 7rem /* 112px */;
  width: 100vw;
  max-width: 14rem /* 224px */;
  place-items: center;
  background-color: transparent;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;

  @media (min-width: 640px) {
    left: 0px;
    height: 8rem /* 128px */;
    max-width: 14rem /* 224px */;
    padding-left: 0px;
    padding-right: 0px;
  }
}

.btn-close {
  display: grid;
  position: absolute;
  right: 0;
  z-index: 10;
  height: 1.75rem /* 28px */;
  width: 1.75rem /* 28px */;
  place-items: center;
  border-radius: 1.75rem /* 28px */;
  background-color: rgba(239, 68, 68, 1);
  color: #fff;

  @media (min-width: 640px) {
    height: 2rem /* 32px */;
    width: 2rem /* 32px */;
  }

  &-icon {
    height: 1rem /* 16px */;
    width: 1rem /* 16px */;

    @media (min-width: 640px) {
      height: 1.25rem /* 20px */;
      width: 1.25rem /* 20px */;
    }
  }
}

.signature-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.signature-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 83.333333%;
  width: 83.333333%;
  cursor: pointer;
  border: 1px dashed #b7bdc6;
  background: rgba(255, 255, 255, 0.75);

  @media (min-width: 640px) {
    border: 2px dashed #b7bdc6;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 150px;
    }
  }
}

.barcode-img {
  display: inline-block;
  height: 36px;
  width: 36px;
  border-radius: 0.125rem /* 2px */;
  border: 1px solid #fff;
  object-fit: cover;
  object-position: center;
}

.detail-wrapper {
  margin-left: 3px;
  display: inline-block;

  > p {
    display: flex;
    width: auto;
    flex-direction: column;
    font-size: 0.4rem;
    line-height: 1rem /* 16px */;

    .digital-sign {
      font-size: 0.6rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.025em;
      color: rgba(113, 113, 122, 1);
    }

    .digital-username {
      font-size: 0.5rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
    }
  }
}
</style>
