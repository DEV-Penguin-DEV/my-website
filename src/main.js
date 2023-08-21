import { createApp } from "vue";
import App from "./App.vue";
import { startAnimation } from "./plugins/animation";

createApp(App).mount("#app");

window.addEventListener("load", () => {
  startAnimation();
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
});
