import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; // Импорт вашего store
import router from "./router";
import { startAnimation } from "./plugins/animation";

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");

window.addEventListener("load", () => {
  startAnimation();
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
});
