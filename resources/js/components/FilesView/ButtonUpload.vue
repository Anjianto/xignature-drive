<template>
  <label
    :class="buttonStyle"
    label="file"
    class="button file-input button-base"
  >
    <slot></slot>
    <input
      v-show="false"
      id="file"
      :accept="Object.values(ALLOWED_EXTENSIONS).join(', ')"
      multiple
      name="files[]"
      type="file"
      @change="emmitFiles"
    />
  </label>
</template>

<script>
import { ALLOWED_EXTENSIONS } from "@/constants/upload_rules";

export default {
  name: "ButtonBase",
  props: ["buttonStyle"],
  data() {
    return {
      files: undefined,
      ALLOWED_EXTENSIONS,
    };
  },
  methods: {
    emmitFiles(e) {
      this.$uploadFiles(e.target.files);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.button-base {
  @include font-size(15);
  font-weight: 700;
  cursor: pointer;
  transition: 0.15s all ease;
  border-radius: 8px;
  border: 0;
  padding: 10px 28px;
  display: inline-block;

  &:active {
    transform: scale(0.95);
  }

  &.theme {
    color: $theme;
    background: rgba($theme, 0.1);
  }

  &.secondary {
    color: $text;
    background: $light_background;
  }
}
</style>
