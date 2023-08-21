<template>
  <header class="header container">
    <img class="header__logo" src="../../public/img/logo.svg" alt="Logo." />
    <a :href="DB.normal_CV.link" class="header__link">{{
      DB.normal_CV.title
    }}</a>

    <nav class="side-menu" ref="menu">
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

      <div class="side-menu__open-line">
        <button class="side-menu__open-button" ref="button">
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
    const button = this.$refs.button;
    button.addEventListener("click", () => {
      this.$refs.menu.classList.toggle("open");
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.header__logo {
  width: 155px;
  height: auto;
}

.header__link {
  font-size: 2rem;
  line-height: normal;
  position: relative;
  height: fit-content;

  &::before {
    @include default-pseudo-element(100%, 2px);
    background-color: #fff;
    bottom: -4px;
    left: 0;
  }

  &::after {
    @include default-pseudo-element(0%, 3px);
    background-color: $main-hover-color;
    bottom: -4px;
    left: 0;
    transition: 0.5s;
    z-index: 2;
  }

  &:hover {
    &::after {
      width: 100%;
      transition: 0.5s;
    }
  }
}

.side-menu__link {
  position: relative;

  color: $main-text-color;
  font-family: Montserrat;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 88.235% */
  transition: 0.5s;

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
  }
}

.side-menu__list {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.side-menu__logo {
  width: 155px;
  height: auto;
  margin-bottom: 30px;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -335px;
  padding: 26px;
  background: #000;
  min-height: 100vh;
  z-index: 100;
  min-width: 358px;
  box-sizing: border-box;
  transition: 0.7s;
  &.open {
    left: 0vw;
    transition: 0.7s;

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
}

.side-menu__open-button {
  cursor: pointer;
  transition: 0.7s;
  position: absolute;
  @include centering-vertical-pseudo-element();
  right: -22px;
}
</style>
