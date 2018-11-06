import Vue from "vue";

import App from "./app";
import "./assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const a = "hello world";
console.log(a);
class A {}

const b = new Set();
const sym = Symbol();
