<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card id="comments-image" class="comments-card">
          <span class="icon-download"
            ><button class="fas fa-download"></button
          ></span>
          <span class="icon-close"><button class="fas fa-times"></button></span>
          <v-card-title>Ayuda con Instagram</v-card-title>
          <v-list-item three-line>
            <v-list-item-content>
              <h2>
                ¿Como mejoro tu cuenta de Instagram gracias a nuestra ayuda?
              </h2>
              <v-list-item-title class="headline mb-1"
                ><p class="title-comments">
                  Pedro Garcia | Hacer y publicar videos
                </p>
                <br />
                <p class="comments">
                  "Nos crearon videos de 15 segundos con lo que sumamos 10mil
                  followers
                  <br />
                  <strong></strong></p
              ></v-list-item-title>
            </v-list-item-content>
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
import { bus } from "../main";
export default {
  name: "CardComments",
  props: {
    comments: Array
  },

  created() {
    bus.$on("sendComments", data => {
      console.log(data);
      this.comments = data;
      console.log(this.comments);
    });
  }
};
</script>
<style>
.comments-card {
  padding-top: 10px;
  margin-left: 0px;
  width: 600px;
  overflow-wrap: break-word;
  border: none;
}

.comments-card .v-card {
  max-width: 120% !important;
}
.comments-card .v-card__title {
  font-family: "Roboto";
  color: #1166ea;
  font-size: 14px;
  font-weight: normal;
}

.comments-card .content h2 {
  font-family: "Roboto";
  font-size: 45px;
  color: #0b85e5;
  line-height: 24px;
  font-weight: normal;
}
.comments-card .footer-image {
  margin-top: 35px;
}

.comments-card .origin {
  margin-top: 15px;
  font-family: "Roboto";
  font-size: 15px;
  color: 5c5c5c;
}

.comments-card .title-comments {
  overflow-wrap: break-word;
  font-family: "Roboto";
  font-size: 24px;
  padding-top: 25px;
}

.comments-card .comments {
  width: 480px;
  overflow-wrap: break-word;
  font-family: "Roboto";
  font-size: 32px;
  font-style: italic;
}

.comments-card .icon-download {
  color: gray;
  text-align: right;
  padding: 5px;
  margin-left: 75%;
}

.comments-card .icon-close {
  color: gray;
  text-align: left;
}
</style>
