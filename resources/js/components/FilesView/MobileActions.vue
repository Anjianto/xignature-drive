<template>
  <div id="mobile-actions-wrapper">
    <!--Actions for trash location with MASTER permission--->
    <div v-if="trashLocationMenu && !multiSelectMode" class="mobile-actions">
      <MobileActionButton
        icon="trash"
        @click.native="$store.dispatch('emptyTrash')"
      >
        {{ $t("context_menu.empty_trash") }}
      </MobileActionButton>
      <MobileMultiSelectButton @click.native="enableMultiSelectMode">
        {{ $t("context_menu.select") }}
      </MobileMultiSelectButton>
      <MobileActionButton
        class="preview-sorting"
        icon="preview-sorting"
        @click.native="showViewOptions"
      >
        {{ $t("preview_sorting.preview_sorting_button") }}
      </MobileActionButton>
    </div>

    <!--ContextMenu for Base location with MASTER permission-->
    <transition name="button">
      <div
        v-if="baseLocationMasterMenu && !multiSelectMode"
        class="mobile-actions"
      >
        <MobileActionButton
          icon="folder-plus"
          :class="{ 'is-inactive': multiSelectMode }"
          @click.native="createFolder"
        >
          {{ $t("context_menu.add_folder") }}
        </MobileActionButton>
        <MobileActionButtonUpload :class="{ 'is-inactive': multiSelectMode }">
          {{ $t("context_menu.upload") }}
        </MobileActionButtonUpload>
        <MobileMultiSelectButton @click.native="enableMultiSelectMode">
          {{ $t("context_menu.select") }}
        </MobileMultiSelectButton>
        <MobileActionButton
          class="preview-sorting"
          icon="preview-sorting"
          @click.native="showViewOptions"
        >
          {{ $t("preview_sorting.preview_sorting_button") }}
        </MobileActionButton>
      </div>
    </transition>

    <!-- Selecting buttons -->
    <transition name="button">
      <div v-if="multiSelectMode" class="mobile-actions">
        <MobileActionButton icon="check-square" @click.native="selectAll">
          {{ $t("mobile_selecting.select_all") }}
        </MobileActionButton>
        <MobileActionButton icon="x-square" @click.native="deselectAll">
          {{ $t("mobile_selecting.deselect_all") }}
        </MobileActionButton>
        <MobileActionButton icon="check" @click.native="disableMultiSelectMode">
          {{ $t("mobile_selecting.done") }}
        </MobileActionButton>
      </div>
    </transition>

    <!--ContextMenu for Base location with VISITOR permission-->
    <div
      v-if="baseLocationVisitorMenu && !multiSelectMode"
      class="mobile-actions"
    >
      <MobileMultiSelectButton @click.native="enableMultiSelectMode">
        {{ $t("context_menu.select") }}
      </MobileMultiSelectButton>
      <MobileActionButton
        class="preview-sorting"
        icon="preview-sorting"
        @click.native="showViewOptions"
      >
        {{ $t("preview_sorting.preview_sorting_button") }}
      </MobileActionButton>
    </div>

    <!--Upload Progressbar-->
    <UploadProgress />
  </div>
</template>

<script>
import MobileActionButtonUpload from "@/components/FilesView/MobileActionButtonUpload";
import MobileMultiSelectButton from "@/components/FilesView/MobileMultiSelectButton";
import MobileActionButton from "@/components/FilesView/MobileActionButton";
import UploadProgress from "@/components/FilesView/UploadProgress";
import { mapGetters } from "vuex";
import { events } from "@/bus";

export default {
  name: "MobileActions",
  components: {
    MobileActionButtonUpload,
    MobileMultiSelectButton,
    MobileActionButton,
    UploadProgress,
  },
  data() {
    return {
      multiSelectMode: false,
      mobileSortingAndPreview: false,
    };
  },
  computed: {
    ...mapGetters(["FilePreviewType"]),
    previewIcon() {
      return this.FilePreviewType === "list" ? "th" : "th-list";
    },
    trashLocationMenu() {
      return (
        this.$isThisLocation(["trash", "trash-root"]) &&
        this.$checkPermission("master")
      );
    },
    baseLocationMasterMenu() {
      return (
        this.$isThisLocation(["base", "public"]) &&
        this.$checkPermission(["master", "editor"])
      );
    },
    baseLocationVisitorMenu() {
      return (
        (this.$isThisLocation(["base", "shared", "public"]) &&
          this.$checkPermission("visitor")) ||
        (this.$isThisLocation(["latest", "shared"]) &&
          this.$checkPermission("master"))
      );
    },
  },
  mounted() {
    events.$on("mobileSelecting:stop", () => (this.multiSelectMode = false));
    events.$on(
      "mobileSortingAndPreview",
      (state) => (this.mobileSortingAndPreview = state)
    );
  },
  methods: {
    selectAll() {
      this.$store.commit("SELECT_ALL_FILES");
    },
    deselectAll() {
      this.$store.commit("CLEAR_FILEINFO_DETAIL");
    },
    enableMultiSelectMode() {
      this.multiSelectMode = true;

      events.$emit("mobileSelecting:start");
    },
    disableMultiSelectMode() {
      this.multiSelectMode = false;

      events.$emit("mobileSelecting:stop");
    },
    showViewOptions() {
      this.mobileSortingAndPreview = !this.mobileSortingAndPreview;

      // Toggle mobile sorting
      events.$emit("mobileSortingAndPreview", this.mobileSortingAndPreview);
      events.$emit(
        "mobileSortingAndPreviewVignette",
        this.mobileSortingAndPreview
      );
    },
    createFolder() {
      events.$emit("popup:open", { name: "create-folder" });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.button-enter-active,
.button-leave-active {
  transition: all 250ms;
}

.button-enter {
  opacity: 0;
  transform: translateY(-50%);
}

.button-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

.button-leave-active {
  position: absolute;
}

.preview-sorting {
  background: $light_background !important;
  /deep/ .label {
    color: $text !important;
  }
  /deep/ .preview-sorting {
    path,
    line,
    polyline,
    rect,
    circle {
      stroke: $text !important;
    }
  }
}

#mobile-actions-wrapper {
  display: none;
  background: white;
  position: sticky;
  top: 35px;
  z-index: 3;
}

.mobile-action-button {
  &.is-inactive {
    opacity: 0.25;
    pointer-events: none;
  }
}

.mobile-actions {
  white-space: nowrap;
  overflow-x: auto;
  margin: 0 -15px;
  padding: 10px 0 10px 15px;
}

@media only screen and (max-width: 960px) {
  #mobile-actions-wrapper {
    display: block;
  }
}

@media (prefers-color-scheme: dark) {
  #mobile-actions-wrapper {
    background: $dark_mode_background;
  }
  .preview-sorting {
    background: $dark_mode_foreground !important;
    /deep/ .label {
      color: $dark_mode_text_primary !important;
    }
    /deep/ .preview-sorting {
      path,
      line,
      polyline,
      rect,
      circle {
        stroke: $theme !important;
      }
    }
  }
}
</style>
