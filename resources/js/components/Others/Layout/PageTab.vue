<template>
  <div class="page-tab">
    <div v-show="isLoading" id="loader">
      <Spinner></Spinner>
    </div>
    <slot v-show="!isLoading"></slot>
  </div>
</template>

<script>
import Spinner from "@/components/FilesView/Spinner";

export default {
  name: "PageTab",
  components: {
    Spinner,
  },
  props: ["isLoading"],
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
</style>
