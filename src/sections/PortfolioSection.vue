<template>
  <section id="portfolio" class="portfolio">
    <div class="title-container">
      <h2 class="portfolio__title title">{{ DB.title }}</h2>
    </div>

    <div class="portfolio__container container">
      <PortfolioSort @sortEvent="onSortChange" :sort="DB.text.sort" />
      <PortfolioProjects :DB="DB" :sortType="sortType" />
    </div>
  </section>
</template>

<script>
import PortfolioSort from "@/components/PortfolioSort.vue";
import PortfolioProjects from "@/components/PortfolioProjects.vue";
export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: { PortfolioSort, PortfolioProjects },
  methods: { onSortChange },
  data() {
    return {
      sortType: "all",
    };
  },
};

function onSortChange(sortType) {
  this.sortType = sortType;
}
</script>

<style lang="scss" scoped>
.portfolio {
  margin-top: 50px;
  margin-bottom: 9vw;

  @media (max-width: $phone-size) {
    margin-bottom: 70px;
  }
}
</style>
