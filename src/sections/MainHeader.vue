<template>
  <header class="header container">
    <img class="header__logo" src="../../public/img/logo.svg" alt="Logo." />
    <a href="" class="header__link">PDF Версия резюме</a>
  </header>
</template>

<script>
export default {};
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
</style>
