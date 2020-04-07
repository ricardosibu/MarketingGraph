<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-card ref="page" class="advice">
          <v-card-title>Recomendaciones</v-card-title>
          <div v-if="!filterOption">
            <paginate
              :container="this"
              ref="paginator"
              name="items"
              :list="items"
              :per="4"
            >
              <v-list-item
                v-for="string in paginated('items')"
                :key="string.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ string.title }}</v-list-item-title>
                  <v-list-item-title>{{ string.titleNext }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    string.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!--<li v-for="string in paginated('items')" :key="string.id">
              <p>{{ string.title }}</p>
              <p class="font-weight-bold">{{ string.subtitle }}</p>
            </li>-->
            </paginate>
            <paginate-links
              for="items"
              :show-step-links="true"
              :simple="{
                prev: '<<',
                next: '>>'
              }"
              :container="{
                state: paginate.languages,
                el: $refs.page
              }"
            ></paginate-links>
          </div>
          <div v-if="filterOption == 1">
            <paginate
              :container="this"
              ref="paginator"
              name="items1"
              :list="items1"
              :per="4"
            >
              <v-list-item
                v-for="string in paginated('items1')"
                :key="string.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ string.title }}</v-list-item-title>
                  <v-list-item-title>{{ string.titleNext }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    string.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!--<li v-for="string in paginated('items')" :key="string.id">
              <p>{{ string.title }}</p>
              <p class="font-weight-bold">{{ string.subtitle }}</p>
            </li>-->
            </paginate>
            <paginate-links
              for="items1"
              :show-step-links="true"
              :simple="{
                prev: '<<',
                next: '>>'
              }"
              :container="{
                state: paginate.languages,
                el: $refs.page
              }"
            ></paginate-links>
          </div>
          <div v-if="filterOption == 2">
            <paginate
              :container="this"
              ref="paginator"
              name="items2"
              :list="items2"
              :per="4"
            >
              <v-list-item
                v-for="string in paginated('items2')"
                :key="string.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ string.title }}</v-list-item-title>
                  <v-list-item-title>{{ string.titleNext }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    string.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!--<li v-for="string in paginated('items')" :key="string.id">
              <p>{{ string.title }}</p>
              <p class="font-weight-bold">{{ string.subtitle }}</p>
            </li>-->
            </paginate>
            <paginate-links
              for="items2"
              :show-step-links="true"
              :simple="{
                prev: '<<',
                next: '>>'
              }"
              :container="{
                state: paginate.languages,
                el: $refs.page
              }"
            ></paginate-links>
          </div>
          <div v-if="filterOption == 3">
            <paginate
              :container="this"
              ref="paginator"
              name="items3"
              :list="items3"
              :per="4"
            >
              <v-list-item
                v-for="string in paginated('items3')"
                :key="string.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ string.title }}</v-list-item-title>
                  <v-list-item-title>{{ string.titleNext }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    string.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!--<li v-for="string in paginated('items')" :key="string.id">
              <p>{{ string.title }}</p>
              <p class="font-weight-bold">{{ string.subtitle }}</p>
            </li>-->
            </paginate>
            <paginate-links
              for="items3"
              :show-step-links="true"
              :simple="{
                prev: '<<',
                next: '>>'
              }"
              :container="{
                state: paginate.languages,
                el: $refs.page
              }"
            ></paginate-links>
          </div>
          <!--<v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                class="advice-title"
                v-if="item.header"
                :key="item.header"
                inset
              >
                {{ item.header }}
              </v-subheader>
              <v-divider
                v-else-if="item.divider"
                :key="index"
                inset
              ></v-divider>
              <v-list-item v-else :key="item.title" ripple>
                <v-list-item-content>
                  <v-list-item-title>
                    <p style="font-size:14px" v-html="item.title"></p>
                    <p style="font-size:14px" v-html="item.titleNext"></p>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>-->
        </v-card>
        <div>
          <p class="author-advice">Yes Them</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { bus } from "../main";

export default {
  name: "Recommendation",
  props: ["filterOption"],
  comment: [],
  data: function() {
    return {
      paginate: ["items", "items1", "items2", "items3", "items4"],
      items: [
        {
          title: "Nos crearon videos de 15 minutos con ",
          titleNext: "los que sumamos 10 mil followers",
          subtitle: "Pedro Garcia | Hacer y publicar videos"
        },
        {
          title: "Pasamos de no subir videos a subir ",
          titleNext: " uno cada semana y compartir 2 por stories al dia",
          subtitle: "Montse Lopez | Hacer y publicar videos"
        },
        {
          title: "Nos recomendaron los mejores filtros ",
          titleNext: "que añadir a cada video",
          subtitle: "Abogado | Hacer y publicar videos"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Hacer y publicar videos"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Interactuar con nuestros 60 seguidores"
        },
        {
          title: "Nos crearon videos de 15 minutos con ",
          titleNext: "los que sumamos 10 mil followers",
          subtitle: "Pedro Garcia |Doblar el numero de likes"
        },
        {
          title: "Pasamos de no subir videos a subir ",
          titleNext: " uno cada semana y compartir 2 por stories al dia",
          subtitle: "Montse Lopez | Doblar el numero de likes"
        },
        {
          title: "Nos recomendaron los mejores filtros ",
          titleNext: "que añadir a cada video",
          subtitle: "Abogado | Doblar el numero de likes"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Doblar el numero de likes"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Medir el progreso en reportes"
        },
        {
          title: "Nos recomendaron los mejores filtros ",
          titleNext: "que añadir a cada video",
          subtitle: "Abogado | Medir el progreso en reportes"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Medir el progreso en reportes"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Medir el progreso en reportes"
        }
      ],
      items1: [
        {
          title: "Nos crearon videos de 15 minutos con ",
          titleNext: "los que sumamos 10 mil followers",
          subtitle: "Pedro Garcia | Hacer y publicar videos"
        },
        {
          title: "Pasamos de no subir videos a subir ",
          titleNext: " uno cada semana y compartir 2 por stories al dia",
          subtitle: "Montse Lopez | Hacer y publicar videos"
        },
        {
          title: "Nos recomendaron los mejores filtros ",
          titleNext: "que añadir a cada video",
          subtitle: "Abogado | Hacer y publicar videos"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Hacer y publicar videos"
        }
      ],
      items2: [
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Interactuar con nuestros 60 seguidores"
        }
      ],
      items3: [
        {
          title: "Nos crearon videos de 15 minutos con ",
          titleNext: "los que sumamos 10 mil followers",
          subtitle: "Pedro Garcia |Doblar el numero de likes"
        },
        {
          title: "Pasamos de no subir videos a subir ",
          titleNext: " uno cada semana y compartir 2 por stories al dia",
          subtitle: "Montse Lopez | Doblar el numero de likes"
        },
        {
          title: "Nos recomendaron los mejores filtros ",
          titleNext: "que añadir a cada video",
          subtitle: "Abogado | Doblar el numero de likes"
        },
        {
          title: "Pudimos compartir videos en redes sociales ",
          titleNext: "para incrementar ventas",
          subtitle: "Software | Doblar el numero de likes"
        }
      ]
    };
  },
  created() {
    console.log(this.items);
  },
  updated() {
    console.log("atualizo", this.filterOption);
    console.log(this.items);
  },
  methods: {
    sendItems: function() {
      this.comments = this.items;
      console.log(this.comments);
      bus.$emit("sendComments", this.items);
    }
  }
};
</script>
<style>
.advice {
  height: 455px;
}
.advice-title {
  height: auto;
}

.advice .v-list-item .v-list-item__subtitle,
.v-list-item .v-list-item__title {
  font-size: 14px !important;
  overflow-wrap: break-word;
  white-space: normal;
  font-family: "Roboto";
}
</style>
