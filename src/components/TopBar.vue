<template>
  <v-toolbar>
    <v-toolbar-title>Yes Them |</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="option">
      <span class="item">Crear estadisticas</span>
      <span class="item-1">Login</span>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "TopBar"
};
</script>
<style>
.option {
  margin: 35px;
}
.v-toolbar__content {
  background-color: rgb(6, 34, 63);
}
.v-toolbar__content {
  color: white;
}
.item {
  padding: 20px;
}
.item-1 {
  padding-right: 20px;
}
</style>
