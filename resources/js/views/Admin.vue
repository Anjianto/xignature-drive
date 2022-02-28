<template>
  <section id="viewport">
    <ContentSidebar>
      <!--Admin-->
      <ContentGroup :title="$t('global.admin')" class="navigator">
        <div class="menu-list-wrapper vertical">
          <router-link :to="{ name: 'Dashboard' }" class="menu-list-item link">
            <div class="icon">
              <box-icon size="17"></box-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.dashboard") }}
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Users' }"
            class="menu-list-item link"
            :class="[
              $route.name === 'UserCreate' ||
              $route.name === 'User' ||
              $route.name === 'UserDetail' ||
              $route.name === 'UserStorage' ||
              $route.name === 'UserSubscription' ||
              $route.name === 'UserInvoices' ||
              $route.name === 'UserPassword' ||
              $route.name === 'UserDelete' ||
              $route.name === 'UserIntegration'
                ? 'router-link-exact-active router-link-active'
                : '',
            ]"
          >
            <div class="icon">
              <users-icon size="17"></users-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.users") }}
            </div>
          </router-link>
          <router-link
            :to="{ name: 'AppOthers' }"
            class="menu-list-item link"
            :class="[
              $route.name === 'AppAppearance' ||
              $route.name === 'AppIndex' ||
              $route.name === 'AppEmail' ||
              $route.name === 'AppIntegration'
                ? 'router-link-exact-active router-link-active'
                : '',
            ]"
          >
            <div class="icon">
              <settings-icon size="17"></settings-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.settings") }}
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Pages' }"
            class="menu-list-item link"
            :class="[
              $route.name === 'PageEdit'
                ? 'router-link-exact-active router-link-active'
                : '',
            ]"
          >
            <div class="icon">
              <monitor-icon size="17"></monitor-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.pages") }}
            </div>
          </router-link>
          <router-link :to="{ name: 'Language' }" class="menu-list-item link">
            <div class="icon text-theme">
              <globe-icon size="17" />
            </div>
            <div class="label text-theme">
              {{ $t("admin_menu.languages") }}
            </div>
          </router-link>
        </div>
      </ContentGroup>

      <!--SaaS-->
      <ContentGroup v-if="config.isSaaS" title="Subscription" class="navigator">
        <div class="menu-list-wrapper vertical">
          <router-link :to="{ name: 'Plans' }" class="menu-list-item link">
            <div class="icon">
              <database-icon size="17"></database-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.plans") }}
            </div>
          </router-link>
          <router-link :to="{ name: 'Invoices' }" class="menu-list-item link">
            <div class="icon">
              <file-text-icon size="17"></file-text-icon>
            </div>
            <div class="label">
              {{ $t("admin_menu.invoices") }}
            </div>
          </router-link>
        </div>
      </ContentGroup>
    </ContentSidebar>

    <Layout>
      <router-view />
    </Layout>
  </section>
</template>

<script>
import {
  GlobeIcon,
  UsersIcon,
  SettingsIcon,
  FileTextIcon,
  DatabaseIcon,
  BoxIcon,
  MonitorIcon,
} from "vue-feather-icons";
import ContentSidebar from "@/components/Sidebar/ContentSidebar";
import ContentGroup from "@/components/Sidebar/ContentGroup";
import { mapGetters } from "vuex";
import Layout from "@/components/Admin/Layout";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settings",
  components: {
    MonitorIcon,
    BoxIcon,
    DatabaseIcon,
    FileTextIcon,
    SettingsIcon,
    ContentSidebar,
    ContentGroup,
    UsersIcon,
    GlobeIcon,
    Layout,
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>

<style lang="scss" scoped>
.user-headline {
  margin-bottom: 38px;
}
</style>
