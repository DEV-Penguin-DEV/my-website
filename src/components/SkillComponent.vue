<template>
  <div class="skill slider-item">
    <img class="skill__img" :src="`/img/${iconSrc}`" :alt="iconAlt" />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
    iconAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.skill {
  border-radius: 50%;
  box-shadow: 0px 1px 10px 0px #00e0ff;
  width: fit-content;
  min-height: 10vw;
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: $phone-size) {
    width: 15vw;
    height: 15vw;
  }
}
.skill__img {
  min-width: 6vw;
  min-height: 6vw;
  width: 6vw;
  height: 6vw;

  @media (max-width: $phone-size) {
    width: 9vw;
    height: 9vw;
  }
}
</style>
