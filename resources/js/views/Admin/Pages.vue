<template>
  <div id="single-page">
    <div v-show="!isLoading" id="page-content">
      <MobileHeader :title="$t($router.currentRoute.meta.title)" />
      <PageHeader :title="$t($router.currentRoute.meta.title)" />

      <div class="content-page">
        <DatatableWrapper
          api="/api/pages"
          :paginator="false"
          :columns="columns"
          class="table table-users"
          @init="isLoading = false"
        >
          <template slot-scope="{ row }">
            <tr>
              <td class="name" style="min-width: 200px">
                <router-link
                  :to="{
                    name: 'PageEdit',
                    params: { slug: row.data.attributes.slug },
                  }"
                  class="cell-item"
                  tag="div"
                >
                  <span>{{ row.data.attributes.title }}</span>
                </router-link>
              </td>
              <td>
                <span class="cell-item">
                  {{ row.data.attributes.slug }}
                </span>
              </td>
              <td>
                <span class="cell-item">
                  <SwitchInput
                    class="switch"
                    :state="row.data.attributes.visibility"
                    @input="changeStatus($event, row.data.attributes.slug)"
                  />
                </span>
              </td>
              <td>
                <div class="action-icons">
                  <router-link
                    :to="{
                      name: 'PageEdit',
                      params: { slug: row.data.attributes.slug },
                    }"
                  >
                    <edit-2-icon size="15" class="icon icon-edit"></edit-2-icon>
                  </router-link>
                </div>
              </td>
            </tr>
          </template>
        </DatatableWrapper>
      </div>
    </div>

    <div v-if="isLoading" id="loader">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import DatatableWrapper from "@/components/Others/Tables/DatatableWrapper";
import SwitchInput from "@/components/Others/Forms/SwitchInput";
import MobileHeader from "@/components/Mobile/MobileHeader";
import { Edit2Icon } from "vue-feather-icons";
import PageHeader from "@/components/Others/PageHeader";
import Spinner from "@/components/FilesView/Spinner";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pages",
  components: {
    DatatableWrapper,
    MobileHeader,
    SwitchInput,
    PageHeader,
    Edit2Icon,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      columns: [
        {
          label: this.$t("admin_pages.table.page"),
          field: "title",
          sortable: true,
        },
        {
          label: this.$t("admin_pages.table.slug"),
          field: "slug",
          sortable: true,
        },
        {
          label: this.$t("admin_pages.table.status"),
          field: "visibility",
          sortable: true,
        },
        {
          label: this.$t("admin_page_user.table.action"),
          sortable: false,
        },
      ],
    };
  },
  methods: {
    changeStatus(val, slug) {
      this.$updateText("/pages/" + slug, "visibility", val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.table-tools {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 10px;
  position: sticky;
  top: 40px;
  z-index: 9;
}

.table {
  .cell-item {
    @include font-size(15);
    white-space: nowrap;
  }

  .name {
    font-weight: 700;
    cursor: pointer;
  }
}

@media only screen and (max-width: 690px) {
  .table-tools {
    padding: 0 0 5px;
  }
}

@media (prefers-color-scheme: dark) {
  .table-tools {
    background: $dark_mode_background;
  }

  .action-icons {
    .icon {
      cursor: pointer;

      circle,
      path,
      line,
      polyline {
        stroke: $dark_mode_text_primary;
      }
    }
  }

  .user-thumbnail {
    .info {
      .email {
        color: $dark_mode_text_secondary;
      }
    }
  }
}
</style>
