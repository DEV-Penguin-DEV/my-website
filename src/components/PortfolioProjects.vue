<template>
  <div class="portfolio-projects">
    <PortfolioProject
      v-for="(project, index) in filterProjects(this.sortType).slice(
        0,
        shownItemsCount
      )"
      :key="index"
      :imgSrc="project.project_photo"
      :projectName="project.project_title"
      :projectTime="project.project_time"
      :technologies="project.technology_stack"
      :projectTimeTitle="DB.text.projects_texts.project_time_title"
      :projectLink="project.link"
      :projectTag="project.tag"
    />
  </div>
  <button
    @click="onMoreButtonClick"
    class="portfolio-projects__button"
    v-if="DB.projects.length > 4"
  >
    {{ buttonText }}
  </button>
</template>

<script>
import PortfolioProject from "./PortfolioProject.vue";
import { addBaseAnimationClass } from "@/plugins/animation";
import { Visible } from "@/plugins/animation";

export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
    sortType: {
      type: String,
      required: true,
    },
  },
  components: {
    PortfolioProject,
  },
  data() {
    return {
      shownItemsCount: 4,
      buttonText: "Показать ещё",
      previousSortType: this.sortType,
    };
  },
  methods: {
    onMoreButtonClick() {
      this.shownItemsCount += 2;

      this.changeMoreButtonText();

      window.setTimeout(() => {
        addBaseAnimationClass(".portfolio-project");
        const blockElements = document.querySelectorAll(
          ".block-animation.portfolio-project"
        );
        blockElements.forEach((el) => {
          Visible(el);
        });
        blockElements.forEach((block) => {
          window.addEventListener("scroll", () => Visible(block));
        });
      }, 10);
    },

    filterProjects(sortType) {
      if (this.previousSortType != sortType) {
        this.shownItemsCount = 4;
        this.buttonText = "Показать ещё";
      } else {
        this.previousSortType = sortType;
      }

      return sortType == "all"
        ? this.DB.projects
        : this.DB.projects.filter((el) => el.tag == sortType);
    },

    changeMoreButtonText() {
      if (this.buttonText == "Скрыть") {
        this.shownItemsCount = 4;
        this.buttonText = "Показать ещё";
        return;
      }
      if (this.shownItemsCount >= this.filterProjects(this.sortType).length) {
        this.buttonText = "Скрыть";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.portfolio-projects__button {
  border-radius: 100px;
  background: #fff;
  backdrop-filter: blur(10px);
  font-weight: 700;
  line-height: 1.875rem;
  color: $main-text-color;
  font-size: 1.75rem;
  padding: 20px 60px;
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
