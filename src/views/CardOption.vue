<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card id="card-image" class="option-card">
          <span class="icon-download"
            ><button class="fas fa-download" @click="saveCard()"></button
          ></span>
          <span class="icon-close"
            ><button class="fas fa-times" @click="closeCard()"></button
          ></span>
          <v-card-title>Ayuda con Instagram</v-card-title>
          <v-list-item three-line>
            <v-list-item-content>
              <h2>
                ¿Como mejoro tu cuenta de Instagram gracias a nuestra ayuda?
              </h2>
              <v-list-item-title class="headline mb-1"
                ><p class="title-option">
                  <strong> {{ option[optionId].clients }} </strong>
                  <strong>{{ option[optionId].option }}</strong> dicen que<br />
                  <strong>{{ option[optionId].optionNext }}</strong>
                </p></v-list-item-title
              >
            </v-list-item-content>
            <Progress
              strokeColor="#0b85e5"
              :transitionDuration="5000"
              :radius="65"
              :strokeWidth="6"
              :value="option[optionId].circle"
            >
              <div class="content">
                <h2>{{ option[optionId].clients }}</h2>
              </div>
            </Progress>
          </v-list-item>
          <div class="footer-image">
            <hr />
            <div class="vl">
              <p>Yes Them</p>
            </div>
            <p class="origin">
              <span class="fuente">Fuente:</span>
              Encuesta a 123 clientes de NeoMarketing
            </p>
            <img src="../assets/btn-validate.png" alt="" />
          </div>
          <p></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Progress from "@/index.vue";
import html2canvas from "html2canvas";

export default {
  name: "CardOption",
  components: {
    Progress
  },
  props: ["optionId"],
  data: function() {
    return {
      canvas: "",
      ctx: "",
      ox: "",
      oy: "",
      image: "",
      option: [
        {
          id: 0,
          clients: 80,
          circle: "80",
          option: "clientes",
          optionNext: "doblar el número de likes"
        },
        {
          id: 1,
          clients: 70,
          circle: "70",
          option: "clientes",
          optionNext: "gestionar campañas de Instagram Ads"
        },
        {
          id: 2,
          clients: 60,
          circle: "60",
          option: "clientes",
          optionNext: "interactuar con nuestros 60 seguidores"
        },
        {
          id: 3,
          clients: 45,
          circle: "45",
          option: "clientes",
          optionNext: " hacer y publicar vídeos"
        },
        {
          id: 4,
          clients: 20,
          circle: "20",
          option: "clientes ",
          optionNext: "desarrollar concursos y promociones"
        },
        {
          id: 5,
          clients: 15,
          circle: "15",
          option: "clientes ",
          optionNext: "medir el progreso en reportes"
        }
      ]
    };
  },
  created() {
    console.log(this.optionId);
  },
  methods: {
    /*download_img() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.image = document.getElementById("card-image");
      this.ox = this.canvas.width / 2;
      this.oy = this.canvas.height / 2;
      this.ctx.font = "42px serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = "#800";
      this.ctx.fillRect(this.ox / 2, this.oy / 2, this.ox, this.oy);
      this.ctx.drawImage(this.image, 10, 10);
      let image = this.canvas.toDataURL("image/jpg");
      var link = document.createElement("a");
      link.download = "filename.png";
      link.href = image;
      link.click();
    }*/

    saveCard() {
      html2canvas(document.querySelector("#card-image")).then(canvas => {
        var a = document.createElement("a");
        a.href = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octec-stream");
        a.download = "card-image.png";
        a.click();
        //window.location.href = image.download;
      });
    },

    closeCard() {
      this.$emit("close", !this.optionId);
    }
  }
};
</script>
<style>
.v-card {
  box-shadow: none !important;
  max-width: 130% !important;
}
.v-list-item__content > :not(:last-child) {
  font-size: 24px !important;
  color: #0f2741 !important;
  font-family: "Roboto";
  line-height: 26px;
  font-weight: normal;
}
.option-card {
  padding-top: 10px;
  margin-left: 0px;
  width: 800px;
  overflow-wrap: break-word;
  border: none;
}

.option-card .v-card {
  max-width: 120% !important;
}

.option-card .v-card__title {
  font-family: "Roboto";
  color: #1166ea;
  font-size: 14px;
  font-weight: normal;
}

.option-card .content h2 {
  font-family: "Roboto";
  font-size: 45px;
  color: #0b85e5;
  line-height: 24px;
  font-weight: normal;
}

.option-card .vue-circular-progress {
  min-height: 110px;
  margin-left: 45px;
}

.option-card .footer-image {
  margin-top: 35px;
}

.option-card .origin {
  margin-top: 15px;
  font-family: "Roboto";
  font-size: 15px;
  color: 5c5c5c;
}

.option-card .title-option {
  overflow-wrap: break-word;
}

.option-card .icon-download {
  color: gray;
  text-align: right;
  padding: 5px;
  margin-left: 75%;
}

.option-card .icon-close {
  color: gray;
  text-align: left;
}

.fuente {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
}

.vl {
  border-left: 1px solid gray;
  height: 40px;
  position: absolute;
  left: 85%;
  margin-top: 12px;
}

.vl p {
  margin-top: 15px;
  margin-left: 5px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  color: #999999;
}

.origin {
  font-family: "Roboto";
  padding-top: 23px;
  padding-bottom: 10px;
  font-size: 15px;
}

.title-option {
  font-family: "Roboto";
  font-size: 24px;
  color: rgb(6, 33, 63);
  overflow-wrap: break-word;
  padding-top: 40px;
}

.v-list-item__subtitle {
  color: gray !important;
}

.v-card > .v-card__progress + :not(.v-btn):not(.v-chip),
.v-card > :first-child:not(.v-btn):not(.v-chip) {
  width: 550px !important;
  margin-right: 10px !important;
  margin-top: 20px !important;
}

.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 0px;
}

.v-card__title {
  font-family: "Roboto" !important;
  font-weight: bold !important;
  font-size: 18px !important;
}
</style>
