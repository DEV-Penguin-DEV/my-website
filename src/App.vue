<template>
  <MainHeader :DB="DB.blocks.menu.content" />
  <main class="main-content">
    <FirstScreen :DB="DB.blocks.first_screen.content" />
    <SkillsSection :DB="DB.blocks.skills.content" />
    <ExperienceSection :DB="DB.blocks.experience.content" />
    <PortfolioSection :DB="DB.blocks.portfolio.content" />
    <LanguageSection :DB="DB.blocks.languages.content" />
  </main>

  <AppLoader />
</template>

<script>
import MainHeader from "@/sections/MainHeader";
import FirstScreen from "@/sections/FirstScreen";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import PortfolioSection from "@/sections/PortfolioSection";
import LanguageSection from "@/sections/LanguageSection";
import AppLoader from "@/sections/AppLoader";
import { db } from "@/db/db.js";

export default {
  components: {
    MainHeader,
    FirstScreen,
    SkillsSection,
    ExperienceSection,
    PortfolioSection,
    LanguageSection,
    AppLoader,
  },
  data() {
    return {
      DB: db,
    };
  },
};
</script>

<style lang="scss">
body {
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  color: $white-color;
  background-color: $bg-color;
  padding-bottom: 20vh;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

.container {
  width: 100vw;
  padding: 0 40px;
  box-sizing: border-box;
}

a {
  color: $white-color;
  text-decoration: none;
}

* {
  margin: 0;
}

.title {
  font-size: 3.75rem;
  font-family: Arial;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.1875rem;
  color: $main-text-color;
  margin-left: 48px;
  margin-bottom: 50px;
  display: block;
  width: fit-content;
  position: relative;

  @media (max-width: $mini-desktop-size) {
    font-size: 3rem;
  }

  &::before {
    @include default-pseudo-element(100%, 3px);
    background-color: #fff;
    bottom: -6px;
    left: 0;
  }

  &::after {
    @include default-pseudo-element(0%, 4px);
    background-color: $main-hover-color;
    bottom: -6px;
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

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

button {
  background: none;
  border: none;
  padding: 0;
}
</style>
