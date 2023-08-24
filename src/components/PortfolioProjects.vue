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
    {{ `${buttonText ? DB.text.button_more : DB.text.button_hidden}` }}
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
      buttonText: true,
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
      if (this.previousSortType == sortType) {
        this.previousSortType = sortType;
      } else {
        this.shownItemsCount = 4;
        this.buttonText = true;
      }

      return sortType == "all"
        ? this.DB.projects
        : this.DB.projects.filter((el) => el.tag == sortType);
    },

    changeMoreButtonText() {
      if (!this.buttonText) {
        this.shownItemsCount = 4;
        this.buttonText = true;
        return;
      }
      if (this.shownItemsCount >= this.filterProjects(this.sortType).length) {
        this.buttonText = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;

  @media (max-width: $laptop-size) {
    gap: 2.5vw;
  }

  @media (max-width: $phone-size) {
    grid-template-columns: 1fr;
    gap: 7vw;
  }
}

.portfolio-projects__button {
  border-radius: 100px;
  background: #fff;
  backdrop-filter: blur(10px);
  font-weight: 700;
  line-height: 2.2vw;
  color: $main-text-color;
  font-size: 1.8vw;
  padding: 20px 60px;
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: $big-laptop-size) {
    padding: 15px 40px;
    margin-top: 60px;
  }
  @media (max-width: $laptop-size) {
    margin-top: 50px;
  }

  @media (max-width: $tablet-size) {
    padding: 10px 40px;
    margin-top: 40px;
  }

  @media (max-width: $tablet-size) {
    padding: 8px 35px;
  }

  @media (max-width: $phone-size) {
    font-size: 3.5vw;
    padding: 10px 25px;
    margin-top: 40px;
  }
}
</style>
