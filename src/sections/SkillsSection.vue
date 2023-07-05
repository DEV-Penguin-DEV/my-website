<template>
  <section class="skills">
    <h2 class="skills__title title">{{ DB.title }}</h2>
    <div class="skills__rows">
      <SkillsRow
        v-for="(skillsRow, index) in DB.skill_rows"
        :skillsRow="skillsRow"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
import SkillsRow from "@/components/SkillsRow.vue";

export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: { SkillsRow },
};
</script>

<style lang="scss" scoped>
.skills {
  width: 100vw;
  overflow-x: hidden;
}
.skills__rows {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.skills {
  margin-bottom: 130px;
  padding-bottom: 20px;
}
</style>
