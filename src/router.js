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

export function updateAddressPath(newPath) {
  const currentPath = router.currentRoute.value.path; // Получаем текущий путь
  const rootPath = window.location.origin; // Получаем корень сайта

  // Извлекаем все "/.." и т.д. из текущего пути
  const pathParts = currentPath.split("/").filter((part) => part !== "..");

  // Объединяем путь из корня и нового пути, игнорируя начальные "../"
  const newPathParts = newPath.split("/").filter((part) => part !== "..");
  const finalPathParts = [
    ...pathParts.slice(0, -newPathParts.length),
    ...newPathParts,
  ];

  const newFullPath = `${rootPath}${finalPathParts.join("/")}`;
  window.history.pushState({}, "", newFullPath); // Обновляем адресную строку
}

export default router;
