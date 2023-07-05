<template>
  <section class="experience">
    <h2 class="experience__title title">{{ DB.title }}</h2>
    <div class="experiences__container">
      <ExperienceComponent
        v-for="(company, index) in DB.companies"
        :key="index"
        :iconSrc="company.logo"
        :iconAlt="`${company.company_name} logo.`"
        :companyName="company.company_name"
        :companyIndustry="company.company_indystry"
        :position="company.position"
        :timePeriod="company.period"
        :mainTasks="company.mainTask"
        :positionTitle="DB.text.position_title"
        :timePeriodTitle="DB.text.period_title"
        :mainTasksTitle="DB.text.main_task_title"
      />
    </div>
  </section>
</template>

<script>
import ExperienceComponent from "@/components/ExperienceComponent.vue";
export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: { ExperienceComponent },
};
</script>

<style lang="scss" scoped>
.experience {
  margin-bottom: 150px;
}
.experiences__container {
  padding-left: 40px;
}
</style>
