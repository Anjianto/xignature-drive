<template>
  <div v-if="isAdmin" class="admin-layout">
    <slot />
  </div>
  <div v-else-if="isLoading && !isAdmin" class="admin-layout">
    <Spinner />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Spinner from "@/components/FilesView/Spinner";

export default {
  name: "LayoutAdmin",
  components: { Spinner },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  mounted() {
    if (this.isAdmin) return;
    this.isLoading = true;
    axios
      .get("/api/is-admin")
      .then(() => {
        this.$store.dispatch("setIsAdmin", true);
      })
      .catch(() => {
        this.$router.push("/files");
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
}
</style>
