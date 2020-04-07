import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import VueApexCharts from "vue-apexcharts";
import Progress from "./index.vue";
import VuePaginate from "vue-paginate";

export const bus = new Vue();

Vue.use(VuePaginate);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  VueApexCharts,
  vuetify,
  Progress,
  render: h => h(App)
}).$mount("#app");
