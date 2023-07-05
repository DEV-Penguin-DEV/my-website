<template>
  <div class="skills-row">
    <div class="slider">
      <SkillComponent
        v-for="(skill, index) in skillsRow"
        :iconSrc="skill.img"
        :iconAlt="skill.alt"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import SkillComponent from "./SkillComponent.vue";

export default {
  props: {
    skillsRow: {
      type: Array,
      required: true,
    },
  },
  components: { SkillComponent },
  mounted() {
    this.initializeSlider();
  },
  methods: {
    initializeSlider() {
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      const wrapSlider = document.querySelector(".slider-item");
      const widthWrap = wrapSlider.offsetWidth;

      let sliders;
      let sliderList = [];

      const getSliderList = () => {
        sliders = document.querySelectorAll(".slider");
        // get the dom elements in a array to better use it
        sliderList = [...sliders];
      };
      // made a function for update later
      getSliderList();

      const slider = sliderList[0];
      const sliderWidth = slider.offsetWidth;

      const iterationItems = Math.ceil((widthWrap + sliderWidth) / sliderWidth);

      // we create an array for knowing the state of each item
      let stateList = sliderList.map((item, i) => {
        let pos = 0;
        let start = false;

        // here we allow the slide to start fully at left
        if (i < iterationItems - 1) {
          pos = -widthWrap + sliders[i].offsetWidth * i;
          start = true;

          sliders[i].style.transform = `translate(${pos}px, -50%)`;
        }

        return {
          pos,
          start,
        };
      });

      // logic animation for sliding each item at a time
      const translate = () => {
        for (let i = 0; i < sliderList.length; i++) {
          const slider = sliderList[i];
          const sliderWidth = slider.offsetWidth;
          const nextIndex = i != sliderList.length - 1 ? i + 1 : 0;
          let pos;

          // if slider should be in movement
          if (stateList[i].start) {
            stateList[i].pos -= 1;
            pos = stateList[i].pos;

            slider.style.transform = `translate(${pos}px, -50%)`;
          }

          const isComplete = pos <= -sliderWidth;
          const isOutSeen = pos <= -widthWrap - sliderWidth;

          // if the slider is fully on screen
          if (isComplete) {
            stateList[nextIndex].start = true;
          }
          // if the slider finished crossing the slider and has disappeared
          if (isOutSeen) {
            stateList[i].start = false;
            stateList[i].pos = 0;
          }
        }
      };

      function start() {
        translate();

        window.requestAnimFrame(start);
      }

      start();
    },
  },
};
</script>

<style lang="scss" scoped>
.skills-row {
  box-shadow: 0px 0px 20px 4px #fff;
  padding: 25px 0;
}

.slider {
  display: flex;
  gap: 40px;
}
</style>
