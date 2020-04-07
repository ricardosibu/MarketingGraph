<template>
  <div>
    <top-bar />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";

export default {
  name: "App",

  components: {
    TopBar
  },

  data: () => ({
    //
  })
};
</script>
