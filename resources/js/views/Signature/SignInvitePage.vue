<template>
  <div id="shared">
    <!--Loading Spinenr-->
    <Spinner v-if="isPageLoading" />

    <!--Single file page-->
    <div v-if="sharedFile" id="single-file">
      <div class="single-file-wrapper">
        <div class="title center">
          <img
            v-if="config.app_logo"
            class="logo"
            :src="$getImage(config.app_logo)"
            :alt="config.app_name"
          />
          <b v-if="!config.app_logo" class="auth-logo-text">{{
            config.app_name
          }}</b>

          <h1>{{ $t("share_sign.title") }}</h1>
          <h2>{{ $t("share_sign.subtitle") }}</h2>
        </div>
        <div class="file-wrapper" spellcheck="false">
          <!--Grid preview-->
          <div
            class="file-item"
            :class="{
              'no-clicked': true,
            }"
          >
            <!--Thumbnail for item-->
            <div class="icon-item">
              <!--If is file or image, then link item-->
              <span class="file-icon-text">
                {{ sharedFile.mimetype }}
              </span>

              <!--Folder thumbnail-->
              <FontAwesomeIcon class="file-icon" icon="file" />
            </div>

            <!--Name-->
            <div class="item-name">
              <!--Name-->
              <b class="name">
                {{ sharedFile.name }}
              </b>
            </div>
          </div>
        </div>
        <ButtonBase
          class="download-button"
          button-style="theme"
          @click.native="registerAndSign"
        >
          Register To Sign
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "@/components/FilesView/ButtonBase";
import Spinner from "@/components/FilesView/Spinner";
import axios from "axios";
import Cookies from "js-cookie";
import { mapGetters } from "vuex";

export default {
  name: "SignInvitePage",
  components: {
    ButtonBase,
    Spinner,
  },
  data() {
    return {
      checkedAccount: undefined,
      password: "",
      isLoading: false,
      sharedFile: undefined,
      isPageLoading: true,
      currentPage: undefined,
      homeDirectory: undefined,
    };
  },
  computed: {
    ...mapGetters(["config"]),
  },
  mounted() {
    axios
      .get(
        `/api/invite/${this.$route.params.token}?filename=${this.$route.query.filename}`
      )
      .then(({ data: { file } }) => {
        // Hide page spinner
        this.sharedFile = file;
        this.isPageLoading = false;
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status == 404) {
          this.$router.push({ name: "NotFoundShared" });
        }
      });
  },
  methods: {
    goHome() {
      this.$store.dispatch("browseShared", [
        { folder: this.homeDirectory, back: false, init: true },
      ]);
    },
    getFiles() {
      // Get file
      if (this.sharedDetail.type === "file") {
        this.$store.dispatch("getSingleFile");
      }
    },
    registerAndSign() {
      const shareToken = this.$route.params.token;
      const shareId = this.$route.query["filename"];
      Cookies.set("share_token", shareToken);
      Cookies.set("share_id", shareId);
      this.$router.replace({ name: "SignUp", query: { sign: shareToken } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_auth-form";
@import "@assets/vue-file-manager/_auth";

#files-view {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 320px;
  overflow-x: hidden;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: hidden;
}

#shared {
  height: 100%;
}

#password-view {
  display: grid;
  height: inherit;

  .center {
    margin: auto;
  }
}

#single-file {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: grid;
  height: 100%;

  .single-file-wrapper {
    margin: auto;
    text-align: center;

    .download-button {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  /deep/ .file-wrapper {
    .file-item {
      width: 290px;

      &:hover,
      &.is-clicked {
        background: transparent;
      }

      .item-shared {
        display: none;
      }
    }
  }
}

.title {
  max-width: 500px;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 50px;
  }
  img {
    width: 400px;
    height: 400px / 1.5;
  }
}

//NOTE: file style

.check-select {
  margin-right: 10px;
  margin-left: 3px;
  position: absolute;
  top: -10px;
  z-index: 5;
  left: 0px;
}

.check-select-folder {
  margin-right: 10px;
  margin-left: 3px;
  position: absolute;
  top: 8px;
  z-index: 5;
  left: 10px;
}

.select-box {
  width: 20px;
  height: 20px;
  background-color: $light_background;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 3px 15px 2px hsla(220, 36%, 16%, 0.05);
}

.select-box-active {
  background-color: $theme;

  .icon {
    stroke: white;
  }
}

.show-actions {
  cursor: pointer;
  padding: 4px 26px;

  .icon-action {
    @include font-size(12);
  }

  path {
    fill: $theme;
  }
}

.file-wrapper {
  user-select: none;
  position: relative;
  text-align: center;
  display: inline-block;
  vertical-align: text-top;
  width: 100%;

  .item-name {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 20px;

    .item-size,
    .item-length {
      @include font-size(11);
      font-weight: 400;
      color: rgba($text, 0.7);
      display: inline-block;
    }

    .item-info {
      display: block;
      line-height: 1;
    }

    .item-shared {
      display: inline-block;

      .label {
        @include font-size(12);
        font-weight: 400;
        color: $theme;
      }

      .shared-icon {
        vertical-align: middle;

        path,
        circle,
        line {
          stroke: $theme;
        }
      }
    }

    .name {
      color: $text;
      @include font-size(14);
      font-weight: 700;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;

      &[contenteditable] {
        -webkit-user-select: text;
        user-select: text;
      }

      &[contenteditable="true"]:hover {
        text-decoration: underline;
      }

      &.actived {
        max-height: initial;
      }
    }
  }

  &.selected {
    .file-item {
      background: $light_background;
    }
  }

  .file-item {
    border: 2px dashed transparent;
    width: 165px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    padding: 15px 0;

    &.is-dragenter {
      border: 2px dashed $theme;
      border-radius: 8px;
    }

    &.no-clicked {
      background: white !important;

      .item-name {
        .name {
          color: $text !important;
        }
      }
    }

    &:hover,
    &.is-clicked {
      border-radius: 8px;
      background: $light_background;
    }
  }

  .icon-item {
    text-align: center;
    position: relative;
    height: 110px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .file-link {
      display: block;
    }

    .file-icon {
      @include font-size(100);
      margin: 0 auto;

      path {
        fill: #fafafc;
        stroke: #dfe0e8;
        stroke-width: 1;
      }
    }

    .file-icon-text {
      margin: 5px auto 0;
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      color: $theme;
      @include font-size(12);
      font-weight: 600;
      user-select: none;
      max-width: 65px;
      max-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .image {
      max-width: 95%;
      object-fit: cover;
      user-select: none;
      height: 110px;
      border-radius: 5px;
      margin: 0 auto;
      pointer-events: none;
    }

    .folder {
      width: 80px;
      height: 80px;
      margin: auto;

      /deep/ .folder-icon {
        @include font-size(80);
      }
    }
  }
}

@media only screen and (max-width: 960px) {
  .file-wrapper {
    .icon-item {
      margin-bottom: 15px;
    }
  }
}

@media only screen and (max-width: 690px) {
  .file-wrapper {
    .file-item {
      width: 120px;
    }

    .icon-item {
      margin-bottom: 10px;
      height: 90px;

      .file-icon {
        @include font-size(75);
      }

      .file-icon-text {
        @include font-size(12);
      }

      .folder {
        width: 75px;
        height: 75px;
        margin-top: 0;
        margin-bottom: 0;

        /deep/ .folder-icon {
          @include font-size(75);
        }
      }

      .image {
        width: 90px;
        height: 90px;
      }
    }

    .item-name .name {
      @include font-size(13);
      line-height: 0.9;
      max-height: 30px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .select-box {
    background-color: lighten($dark_mode_foreground, 10%);
  }

  .select-box-active {
    background-color: lighten($theme, 5%);

    .icon {
      stroke: white;
    }
  }

  .file-wrapper {
    .icon-item {
      .file-icon {
        path {
          fill: $dark_mode_foreground;
          stroke: #2f3c54;
        }
      }
    }

    .file-item {
      &.no-clicked {
        background: $dark_mode_background !important;

        .file-icon {
          path {
            fill: $dark_mode_foreground !important;
            stroke: #2f3c54;
          }
        }

        .item-name {
          .name {
            color: $dark_mode_text_primary !important;
          }
        }
      }

      &:hover,
      &.is-clicked {
        background: $dark_mode_foreground;

        .file-icon {
          path {
            fill: $dark_mode_background;
          }
        }
      }
    }

    .item-name {
      .name {
        color: $dark_mode_text_primary;
      }

      .item-size,
      .item-length {
        color: $dark_mode_text_secondary;
      }
    }
  }
}
</style>
