<template>
  <section class="educations">
    <h2 class="educations__title title">{{ DB.title }}</h2>
    <ul class="educations__list">
      <li
        class="education"
        v-for="(education, index) in DB.educations"
        :key="index"
        :data-procents="education.important"
      >
        <h3 class="education__tile">{{ education.title }}</h3>
        <p class="education__period">{{ education.period }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
