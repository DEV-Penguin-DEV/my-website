import { createStore } from "vuex";

const store = createStore({
  state: {
    lang: "ru",
  },
  mutations: {
    // Мутации для изменения состояния
    changeLang(state, newLang) {
      state.lang = newLang;
    },
  },
  actions: {
    // Действия для асинхронных операций
  },
  getters: {
    // Геттеры для получения данных из состояния
  },
});

export default store;
