<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list>
            <v-list-item :key="item.title">
              <v-list-item-avatar>
                <img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: "Estadistica validada por 123 clientes" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Pedro Lopez",
        subtitle:
          "<span class='font-weight-bold'>Abogado</span> &mdash; Derecho"
      },
      { divider: true, inset: true, vertical: false },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Carlos Perez",
        subtitle:
          "<span class='font-weight-bold'>Administrativo</span> &mdash; Consultoria"
      },
      { divider: true, inset: true, vertical: false },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Maria Gomez",
        subtitle:
          "<span class='font-weight-bold'>Ingeniero</span> &mdash; Marketing"
      }
    ]
  })
};
</script>
