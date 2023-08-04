import { createApp } from "vue";
import App from "./App.vue";
import { startAnimation } from "./plugins/animation";

createApp(App).mount("#app");

document.addEventListener("DOMContentLoaded", () => startAnimation);
