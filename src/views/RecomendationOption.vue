<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-container fluid>
            <header>Hacer y publicar videos</header>
            <v-radio-group column>
              <v-radio
                v-for="i in comments"
                :key="i.id"
                :label="`${i.name}`"
                :value="i"
              ></v-radio>
            </v-radio-group>
            <header>Desarrollar concursos y promociones</header>
            <v-radio-group column>
              <v-radio
                v-for="i in comments"
                :key="i.id"
                :label="`${i.name}`"
                :value="i"
              ></v-radio>
            </v-radio-group>
            <header>Medir el progreso en reportes</header>
            <v-radio-group column>
              <v-radio
                v-for="i in comments"
                :key="i.id"
                :label="`${i.name}`"
                :value="i"
              ></v-radio>
            </v-radio-group>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "RecomendationOption",
  data: function() {
    return {
      comments: [
        {
          id: 0,
          section: "Hacer y publicar videos",
          name: "Pedro Garcia "
        },
        {
          id: 1,
          section: "Hacer y publicar videos",
          name: "Montze Lopez"
        },
        {
          id: 2,
          section: "Hacer y publicar videos",
          name: "Abogado"
        },
        {
          id: 3,
          section: "Hacer y publicar videos",
          name: "Software"
        }
      ]
    };
  }
};
</script>
