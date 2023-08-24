import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

// Импортируйте ваши компоненты
import Home from "./App.vue"; // Подставьте путь к вашему компоненту для домашней страницы

const routes = [
  { path: "/", redirect: "/ru" }, // Перенаправляем с '/' на '/ru'
  { path: "/ru", component: Home },
  { path: "/de", component: Home },
  { path: "/ua", component: Home },
  { path: "/fr", component: Home },
  { path: "/en", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const langFromPath = window.location.pathname.slice(1);
if (["ru", "de", "ua", "fr", "en"].includes(langFromPath)) {
  router.beforeEach((to, from, next) => {
    const langParametr = to.path.slice(1); // Получаем язык из пути маршрута
    store.commit("changeLang", langParametr);
    next();
  });
}

export default router;
