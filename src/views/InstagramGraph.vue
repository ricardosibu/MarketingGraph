<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="title">
          ¿Como mejoro tu cuenta de Instagram gracias a nuestra ayuda?
        </h1>
        <p class="subtitle">(Ayuda con Instagram)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="graph" v-if="!optionId">
          <div class="vl-primary"></div>
          <p>80% de los clientes dicen que doblar el numero de likes</p>
          <p class="subtitle">Ayuda con Instagram</p>
          <apexchart
            width="500"
            height="350"
            type="bar"
            :options="chartOptions"
            :series="series"
            @dataPointSelection="dataPointSelectionHandler"
          ></apexchart>
          <div class="footer-image">
            <hr />
            <div class="vl">
              <p>Yes Them</p>
            </div>
            <p class="origin">
              <span class="fuente">Fuente:</span> Encuesta a 123 clientes de
              NeoMarketing
            </p>
            <img src="../assets/btn-validate.png" alt="" />
          </div>
        </v-card>
        <v-card v-if="optionId">
          <card-option :optionId="optionId" @close="optionId = $event" />
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card v-if="!optionId">
          <recomendation :filterOption="filterOption" />
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="option">
          <v-row>
            <span class="facebook">
              <i class="fab fa-facebook-f"></i>
            </span>

            <span class="twitter">
              <i class="fab fa-twitter"></i>
            </span>

            <span class="linkedin">
              <i class="fab fa-linkedin-in"></i>
            </span>
          </v-row>
          <v-tabs v-model="tab" background-color="indigo">
            <v-tab style="color:#2f80e7">
              FILTRAR
            </v-tab>
            <v-tab style="color:#2f80e7">
              IMAGEN
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-card-text
                  >Filtrar Validaciones y Recomendaciones</v-card-text
                >
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Industria</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Nombre Empresa</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Puesto</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Tamaño Empresa</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-group>
                <v-card-text>URL PARA USAR COMO ENLACE</v-card-text>
              </v-card>
            </v-tab-item>
            <!-- Tabs Cards Cambiar a nuevo componente-->
            <v-tab-item>
              <v-tabs v-model="card">
                <v-tab>
                  Opciones
                </v-tab>
                <v-tab>
                  Recomendaciones
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="card">
                <v-tab-item>
                  <v-card flat>
                    <v-container fluid>
                      <v-radio-group v-model="optionId" column>
                        <v-radio label="Todas" value=""></v-radio>
                        <v-radio
                          label="Doblar el numero de likes"
                          value="0"
                        ></v-radio>
                        <v-radio
                          label="Gestionar campañas en Instagram"
                          optionId="1"
                        ></v-radio>
                        <v-radio
                          label="Interactuar con nuestros 60 seguidores"
                          value="2"
                        ></v-radio>
                        <v-radio
                          label="Hacer y publicar videos"
                          value="3"
                        ></v-radio>
                        <v-radio
                          label="Desarrollar concursos y promociones"
                          value="4"
                        ></v-radio>
                        <v-radio
                          label="Medir el progreso en reportes"
                          value="5"
                        ></v-radio>
                      </v-radio-group>
                    </v-container>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <recomendation-option />
                </v-tab-item>
              </v-tabs-items>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="8">
      <card-comments />
    </v-col>
  </v-container>
</template>
<script>
import CardOption from "@/views/CardOption";
import Recomendation from "@/views/Recomendation";
import CardComments from "@/views/CardComments";
import RecomendationOption from "@/views/RecomendationOption";
export default {
  name: "InstagramGraph",
  components: {
    CardOption,
    Recomendation,
    CardComments,
    RecomendationOption
  },

  data: function() {
    return {
      show: false,
      tab: null,
      card: null,
      optionId: "",
      filterOption: "",
      chartOptions: {
        events: {
          dataPointSelection: function(event, chartContext, config) {
            this.active = this.series[config.seriesIndex];
            console.log("entro");
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              enabled: true,
              position: "center"
            },
            textAnchor: "middle",
            offsetX: 35,
            offsetY: 45
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#f5f9fc"]
        },
        xaxis: {
          type: "category",
          categories: [
            "Doblar el numero de likes",
            "Gestionar campañas de Instagram Ads",
            "Interactuar con nuestros 60 seguidores",
            "Hacer y publicar videos",
            "Desarrollar concursos y promociones",
            "Medir el progreso en reportes"
          ],
          labels: {
            show: true,
            rotate: 45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: -300,
            maxHeight: 800,
            width: 1600,
            style: {
              colors: [],
              fontSize: "-48px",
              fontFamily: "Roboto",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label"
            }
          },
          axisBorder: {
            show: true,
            color: "",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "",
            height: 12,
            offsetX: -12,
            offsetY: 20
          },
          tickAmount: undefined,
          tickPlacement: "between",
          min: -50,
          position: "right"
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            maxWidth: 720,
            offsetX: 110,
            offsetY: 5,
            rotate: 0
          }
        }
      },
      series: [
        {
          name: "",
          data: [85, 70, 60, 45, 20, 15]
        }
      ]
    };
  },

  created: function() {
    console.log(this.items);
    // this.filterOption = 1;
  },

  mounted() {
    setTimeout(() => {
      this.shown = true;
    }, 1000);
  },
  methods: {
    getCardGraph(option) {
      this.optionFilter = option;
    },
    dataPointSelectionHandler(e, chartContext, config) {
      this.filterOption = config.dataPointIndex;
      console.log(this.filterOption);
    },
    filteredAdvice() {
      if (this.filterOption == "") {
        return this.items;
      } else {
        console.log(this.filterOption);
        return this.items[this.filterOption];
      }
    },
    updateChart() {
      //const max = 90;
      //const min = 20;
      const newData = this.series[0].data.map(() => {
        //return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      const colors = ["#f5f9fc"];
      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]]
      };
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>
<style>
.container {
  margin-left: 12px;
}

p {
  font-family: "Roboto";
}
.graph {
  padding: 25px 15px 75px;
  margin: 15px;
  height: 460px;
  width: 550px;
}

.graph p {
  font-family: "Roboto";
  font-size: 24px;
  margin-left: 30px;
  font-weight: bold;
  color: #0f2741;
}

.select {
  width: 320px;
}

.option {
  width: 300px;
  margin: 0px;
}
.v-list-item-title {
  -webkit-line-clamp: 2 !important;
}
.v-card__title {
  padding-bottom: 0px;
}
.v-subheader--inset {
  margin-left: 0px;
}
.title {
  font-size: 27px;
  font-family: "Roboto";
  font-weight: bold;
  color: #0f2741;
}
.subtitle {
  font-size: 23px;
  font-style: italic;
  color: gray;
  padding-top: 8px;
}
.author-advice {
  text-align: right;
  padding-top: 10px;
  color: rgb(69, 95, 124);
}
.graph .origin {
  font-family: "Roboto";
  padding-top: 12px;
  color: #5c5c5c;
  font-size: 15px;
  margin-left: 5px;
}

.graph .vl {
  border-left: 1px solid gray;
  height: 40px;
  position: absolute;
  left: 80%;
  margin-top: 10px;
}

.graph .vl p {
  margin-top: 15px;
  margin-left: 5px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  color: #999999;
}

.graph .footer-image {
  margin-top: 15px;
}

.graph .footer-image img {
  margin-left: 15px;
}

.graph .subtitle {
  font-family: "Roboto";
  font-size: 23px;
  color: #444444;
  margin-top: 18px;
  font-weight: normal;
}

.apexcharts-text tspan {
  font-family: roboto !important;
  font-size: 18px !important;
  white-space: nowrap;
  overflow: hidden;
}

.v-card > .v-card__progress + :not(.v-btn):not(.v-chip),
.v-card > :first-child:not(.v-btn):not(.v-chip) {
  width: 500px !important;
  margin-right: 10px !important;
  margin-top: 20px !important;
}

.graph apexcharts-canvas apexcharts68e7fc apexcharts-theme-light {
  margin-left: 75px !important;
}
.graph #apexcharts331d3d {
  margin-left: 15px !important;
}

.graph .apexcharts-xaxis-texts-g {
  display: none;
}

.graph .apexcharts-grid {
  display: none;
}
.vl-primary {
  border-left: 18px solid #2876dd;
  height: 95px;
  position: absolute;
  left: 2%;
  margin-top: -10px;
}

.origin {
  font-family: "Roboto";
  padding-top: 23px;
  padding-bottom: 10px;
  font-size: 15px;
}

.option .facebook {
  width: 80px;
  height: 40px;
  background-color: #3b5998;
  margin-right: 5px;
  border-radius: 6px;
}

.facebook i {
  text-align: center;
  color: white;
  padding-top: 10px;
  font-size: 16px;
  margin-left: 32px;
}

.option .linkedin {
  width: 80px;
  height: 40px;
  background-color: #006fa6;
  border-radius: 6px;
}

.linkedin i {
  text-align: center;
  color: white;
  padding-top: 10px;
  font-size: 16px;
  margin-left: 32px;
}

.option .twitter {
  width: 80px;
  height: 40px;
  background-color: #1ea1f1;
  margin-right: 5px;
  border-radius: 6px;
}

.twitter i {
  text-align: center;
  color: white;
  padding-top: 10px;
  font-size: 16px;
  margin-left: 32px;
}

.v-input--selection-controls .v-radio .v-label {
  font-family: "Roboto" !important;
  font-size: 14px !important;
  margin-left: 5px !important;
}
</style>
