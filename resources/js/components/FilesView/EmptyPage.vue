<template>
  <div v-if="isLoading || isEmpty" class="empty-page">
    <div class="empty-state">
      <!--Shared empty message-->
      <div
        v-if="$isThisLocation(['shared']) && !isLoading"
        class="text-content"
      >
        <h1 class="title">{{ $t("shared.empty_shared") }}</h1>
      </div>

      <!--Trash empty message-->
      <div
        v-if="$isThisLocation(['trash', 'trash-root']) && !isLoading"
        class="text-content"
      >
        <h1 class="title">{{ $t("empty_page.title") }}</h1>
      </div>

      <!--Trash empty message-->
      <div
        v-if="$isThisLocation(['participant_uploads']) && !isLoading"
        class="text-content"
      >
        <h1 class="title">{{ $t("messages.nothing_from_participants") }}</h1>
      </div>

      <!--Base file browser empty message-->
      <div
        v-if="$isThisLocation(['base', 'public', 'latest']) && !isLoading"
        class="text-content"
      >
        <h1 class="title">{{ $t("empty_page.title") }}</h1>
        <p v-if="$checkPermission(['master', 'editor'])" class="description">
          {{ $t("empty_page.description") }}
        </p>
        <ButtonUpload
          v-if="$checkPermission(['master', 'editor'])"
          button-style="theme"
        >
          {{ $t("empty_page.call_to_action") }}
        </ButtonUpload>
      </div>

      <!--Spinner-->
      <div v-if="isLoading" class="text-content">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUpload from "@/components/FilesView/ButtonUpload";
import Spinner from "@/components/FilesView/Spinner";
import { mapGetters } from "vuex";

export default {
  name: "EmptyPage",
  components: {
    ButtonUpload,
    Spinner,
  },
  props: ["title", "description"],
  computed: {
    ...mapGetters(["data", "isLoading", "currentFolder"]),
    isEmpty() {
      return this.data && this.data.length == 0;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.empty-page {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin-top: 85px;
  display: flex;
  align-items: center;

  .empty-state {
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.text-content {
  text-align: center;
  margin: 30px 0;

  .title {
    @include font-size(20);
    color: $text;
    font-weight: 700;
    margin: 0;
  }

  .description {
    @include font-size(13);
    color: $text-muted;
    margin-bottom: 20px;
    display: block;
  }
}

@media (prefers-color-scheme: dark) {
  .text-content {
    .title {
      color: $dark_mode_text_primary;
    }

    .description {
      color: $dark_mode_text_secondary;
    }
  }
}
</style>
