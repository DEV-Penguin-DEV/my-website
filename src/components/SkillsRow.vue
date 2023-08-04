<template>
  <swiper
    class="skills-row"
    :modules="modules"
    navigation
    :slides-per-view="4"
    :sledes-per-step="1"
    :loop="true"
    :cssMode="true"
    :autoplay="{
      delay: 1000,
    }"
  >
    <swiper-slide
      class="swiper-slide"
      v-for="(skill, index) in skillsRow"
      :key="index"
    >
      <SkillComponent :iconSrc="skill.img" :iconAlt="skill.alt" />
    </swiper-slide>
  </swiper>
</template>

<script>
import SkillComponent from "./SkillComponent.vue";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  props: {
    skillsRow: {
      type: Array,
      required: true,
    },
  },
  components: { SkillComponent, Swiper, SwiperSlide },
  setup() {
    return {
      modules: [A11y, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.skills {
  & .swiper-wrapper {
    padding: 25px 0;
  }
}
</style>

<style lang="scss" scoped>
.skills-row {
  box-shadow: 0px 0px 20px 4px #fff;
  width: 100%;
}
</style>
