<template>
  <div v-if="isAdmin">
    <slot />
  </div>
  <div v-else-if="isLoading && !isAdmin">
    <Spinner />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Spinner from "../FilesView/Spinner.vue";

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
