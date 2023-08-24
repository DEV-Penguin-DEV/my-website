<template>
  <header class="header container">
    <img class="header__logo" src="../../public/img/logo.svg" alt="Logo." />
    <a :href="DB.normal_CV.link" class="header__link">{{
      DB.normal_CV.title
    }}</a>
    <button
      class="header__mobile-menu-button open-mobile-menu-button open-mobile-menu-button--mobile"
    >
      <div></div>
      <span class="visually-hidden">Открыть мобильное меню</span>
    </button>

    <nav class="side-menu" ref="menu">
      <div class="side-menu-container">
        <img
          class="side-menu__logo"
          src="../../public/img/logo.svg"
          alt="Logo."
        />

        <ul class="side-menu__list">
          <li class="side-menu__item">
            <a href="#main" class="side-menu__link active">Главная</a>
          </li>

          <li class="side-menu__item">
            <a href="#skills" class="side-menu__link">Навыки</a>
          </li>

          <li class="side-menu__item">
            <a href="#experience" class="side-menu__link">Опыт работы</a>
          </li>

          <li class="side-menu__item">
            <a href="#portfolio" class="side-menu__link">Портфолио</a>
          </li>

          <li class="side-menu__item">
            <a href="#languages" class="side-menu__link">Языки</a>
          </li>
        </ul>
      </div>

      <a :href="DB.normal_CV.link" class="side-menu__pdf">{{
        DB.normal_CV.title
      }}</a>

      <div class="side-menu__open-line">
        <button class="side-menu__open-button open-mobile-menu-button">
          <img src="../../public/img/arrow.svg" alt="Открыть мобильное меню" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const buttons = document.querySelectorAll(".open-mobile-menu-button");
    const menuLinks = document.querySelectorAll(".side-menu__link");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("open");
        this.$refs.menu.classList.toggle("open");
      });
    });

    const mobileOpenButton = document.querySelector(
      ".open-mobile-menu-button--mobile"
    );
    const mediaQuery = window.matchMedia("(max-width: 440px)");
    if (mediaQuery.matches) {
      menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", () => {
          mobileOpenButton.classList.remove("open");
          this.$refs.menu.classList.remove("open");
        });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: $tablet-size) {
    padding-top: 10px;
  }

  @media (max-width: $phone-size) {
    margin: 0;
  }
}

.header__mobile-menu-button {
  display: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9998;

  & > div,
  & > div::before,
  & > div::after {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 33px;
    height: 3px;
    background-color: $main-text-color;
    transition-duration: 0.6s;
  }

  & > div::before {
    content: "";
    top: 10px;
  }
  & > div::after {
    content: "";
    top: 20px;
  }
  &.open {
    & > div {
      transform: translateX(-50%) rotate(45deg);
    }
    & > div::before {
      top: 0;
      transform: translateX(-50%) rotate(0);
    }
    & > div::after {
      top: 0;
      transform: translateX(-50%) rotate(90deg);
    }
  }

  @media (max-width: $phone-size) {
    display: block;
  }
}

.header__logo {
  width: 9vw;
  height: auto;

  @media (max-width: $laptop-size) {
    width: 11vw;
  }

  @media (max-width: $phone-size) {
    width: 25vw;
  }
}

.header__link,
.side-menu__pdf {
  font-size: 2.5vw;
  line-height: normal;
  position: relative;
  height: fit-content;

  &::before {
    @include default-pseudo-element(100%, 2px);
    background-color: #fff;
    bottom: -4px;
    left: 0;

    @media (max-width: $big-phone-size) {
      height: 1px;
    }
  }

  &::after {
    @include default-pseudo-element(0%, 3px);
    background-color: $main-hover-color;
    bottom: -4px;
    left: 0;
    transition: 0.5s;
    z-index: 2;

    @media (max-width: $big-phone-size) {
      height: 2px;
    }
  }

  &:hover {
    &::after {
      width: 100%;
      transition: 0.5s;
    }
  }

  @media (max-width: $phone-size) {
    display: none;
  }
}

.side-menu__pdf {
  display: none;

  @media (max-width: $phone-size) {
    margin: 0 auto;
    margin-bottom: 45px;
    font-size: 6.8vw;
    width: fit-content;
    display: block;
  }
}

.side-menu__link {
  position: relative;

  color: $main-text-color;
  font-family: Montserrat;
  font-size: 3vw;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  transition: 0.5s;

  @media (max-width: $mini-tablet-size) {
    font-size: 2.8vw;
  }

  @media (max-width: $tablet-size) {
    font-size: 2vw;
  }

  @media (max-width: $phone-size) {
    font-size: 8vw;
  }

  @media (min-width: $desktop-size) {
    font-size: 2.5vw;
  }

  &:hover {
    &::before {
      width: 100%;
      transition: 0.5s;
    }
  }

  &::before {
    @include default-pseudo-element(0, 3px);
    background-color: #fff;
    bottom: -6px;
    left: 0;
    transition: 0.5s;
    @media (max-width: $big-phone-size) {
      height: 2px;
    }
  }
}

.side-menu__list {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4vw;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0; /* ширина полосы прокрутки */
  }

  @media (max-width: $tablet-size) {
    gap: 3vw;
  }

  @media (max-width: $mini-tablet-size) {
    gap: 3.8vw;
  }

  @media (max-width: $mini-tablet-size) {
    gap: 2.5vw;
  }

  @media (max-width: $phone-size) {
    gap: 8vw;
  }
}

.side-menu__logo {
  width: 15vw;
  height: auto;
  margin-bottom: 30px;

  @media (max-width: $mini-tablet-size) {
    width: 13vw;
    margin-bottom: 15px;
  }

  @media (max-width: $phone-size) {
    margin-bottom: 30px;
    margin-right: auto;
    width: 40vw;
    display: block;
  }

  @media (min-width: $desktop-size) {
    width: 13vw;
  }
}

.side-menu {
  position: fixed;
  top: 0;
  left: -31vw;
  padding: 26px;
  background: #000;
  min-height: 100vh;
  z-index: 100;
  min-width: 32vw;
  max-width: 550px;
  box-sizing: border-box;
  transition: 0.7s;

  @media (max-width: $phone-size) {
    top: -100vh;
    min-width: 0;
    max-width: none;
    width: 100vw;
    left: 0;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::-webkit-scrollbar {
      width: 0; /* ширина полосы прокрутки */
    }
  }
  &.open {
    left: 0vw;
    transition: 0.7s;

    @media (max-width: $phone-size) {
      top: 0;
    }

    .side-menu__open-button {
      transform: translateY(-50%) rotate(180deg);
      transition: 0.7s;
    }
  }
}

.side-menu__open-line {
  position: absolute;
  right: 0;
  height: 95%;
  width: 3px;
  background: rgba(195, 166, 110, 0.28);
  @include centering-vertical-pseudo-element();

  @media (max-width: $mini-tablet-size) {
    width: 2px;
  }

  @media (max-width: $phone-size) {
    display: none;
  }
}

.side-menu__open-button {
  cursor: pointer;
  transition: 0.7s;
  position: absolute;
  @include centering-vertical-pseudo-element();
  right: -1.65vw;

  & img {
    width: 3vw;
    height: auto;
  }
}
</style>
