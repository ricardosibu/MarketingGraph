<template>
  <v-container class="grey lighten-5">
    <instagram-graph />
    <!--<div class="comments">
      <comments />
    </div>-->
  </v-container>
</template>

<script>
// @ is an alias to /src
import InstagramGraph from "@/views/InstagramGraph";

export default {
  name: "Home",
  components: {
    InstagramGraph
  }
};
</script>
