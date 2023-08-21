<template>
  <section id="experience" class="experiences" ref="sliderWrapper">
    <div class="experiences-hide">
      <div class="experiences-hide__blur"></div>
    </div>
    <div class="title-container">
      <h2 class="experience__title title">{{ DB.title }}</h2>
    </div>

    <div class="slider-wrapper">
      <div class="experiences__container" ref="sliderContainer">
        <swiper
          class="slider"
          :modules="modules"
          :navigation="true"
          :scrollbar="{ draggable: true }"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :effect="'cards'"
          :grabCursor="true"
          :mousewheel="true"
          :keyboard="true"
        >
          <swiper-slide v-for="(company, index) in slides" :key="index">
            <ExperienceComponent
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceComponent from "@/components/ExperienceComponent.vue";
import {
  Navigation,
  A11y,
  Autoplay,
  Pagination,
  EffectCards,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: { ExperienceComponent, Swiper, SwiperSlide },
  data() {
    return {
      slides: this.DB.companies,
    };
  },
  setup() {
    return {
      modules: [Navigation, A11y, Autoplay, Pagination, EffectCards],
    };
  },
};
</script>

<style lang="scss">
.swiper-cards {
  overflow: hidden !important;
}

.experiences-hide {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: $bg-color;
}

.experiences-hide__blur {
  position: absolute;
  top: 0;
  right: -10vw;
  width: 30vw;
  height: 100%;
  filter: blur(50px);
  z-index: 3;
  background-color: #000;
}

.experiences {
  position: relative;
  & .swiper-button-next {
    right: 40px !important;
  }

  & .swiper-button-prev {
    left: 40px !important;
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    &::after {
      font-weight: 800;
      color: #fff;
      font-size: 3.5rem;
    }
  }

  & .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    margin: 0 15px !important;
    box-sizing: border-box;

    &:not(.swiper-pagination-bullet-active) {
      border: 2px solid #fff;
    }
  }

  & .swiper-pagination {
    bottom: -60px !important;
  }
}
</style>

<style lang="scss" scoped>
.experiences {
  min-height: 100vh;
}

.experiences__container {
  display: flex;
  width: 100%;
}

.slider {
  display: flex;
  width: 100%;
}

.slider-wrapper {
  position: relative;
}
</style>
