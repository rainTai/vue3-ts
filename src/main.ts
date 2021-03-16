import { createApp, h } from "vue";
import App from "@/App.vue";
import store from "./store";
import router from "./router";
import "./styles/index.scss";
import element3 from "element3";
import "element3/lib/theme-chalk/index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(element3)
  .mount("#app");
