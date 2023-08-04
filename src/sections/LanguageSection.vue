<template>
  <section class="languages">
    <h2 class="languages__title title">{{ DB.title }}</h2>
    <LanguagesComponent class="container" :languages="DB.languages_list" />
  </section>
</template>

<script>
import LanguagesComponent from "@/components/LanguagesComponent";

export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: {
    LanguagesComponent,
  },
};
</script>

<style lang="scss" scoped></style>
