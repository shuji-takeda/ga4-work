import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGtag from "vue-gtag";

createApp(App)
  .use(store)
  .use(router)
  .use(
    VueGtag,
    {
      includes: [{ id: "XXXXXXXXXX" }],
      config: {
        id: "XXXXSXXXXXXX",
      },
      send_page_view: false,
    },
    router
  )
  .mount("#app");
