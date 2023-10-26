<template>
  <ul class="languages__list">
    <li class="language" v-for="(language, index) in languages" :key="index">
      <h3 class="language__title">
        {{ language.language_name }}
      </h3>
      <div class="progress-bar">
        <LanguageLinesComponent
          :procent="language.level"
          :levelTitle="language.level_title"
        />
        <LanguageLevelsComponent />
      </div>
    </li>
  </ul>
</template>

<script>
import LanguageLinesComponent from "./LanguageLinesComponent";
import LanguageLevelsComponent from "./LanguageLevelsComponent";
export default {
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
  components: { LanguageLinesComponent, LanguageLevelsComponent },
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.progress-bar {
  width: 100%;
}

.language__title {
  color: #fff;
  font-family: Montserrat;
  font-size: 2.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 142%; /* 142.857% */
  letter-spacing: 0.13125rem;
  margin-bottom: 10px;
  margin-left: 10px;

  @media (max-width: $laptop-size) {
    margin-bottom: 5px;
  }

  @media (min-width: $desktop-size) {
    font-size: 2.2vw;
  }

  @media (max-width: $phone-size) {
    font-size: 4vw;
  }
}

.languages__list {
  display: flex;
  flex-direction: column;
  gap: 4vw;

  @media (max-width: $big-phone-size) {
    gap: 30px;
  }

  @media (max-width: $phone-size) {
    gap: 45px;
  }
}
</style>
