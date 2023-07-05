<template>
  <ul class="languages__list">
    <li class="language" v-for="(language, index) in languages" :key="index">
      <h3 class="language__title" :data-procents="language.level">
        {{ language.language_name }}
      </h3>
      <div class="progress-bar">
        <LanguageLinesComponent />
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

<style lang="scss" scoped></style>
