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
  min-height: 164px;
  width: 164px;
  height: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: $mini-desktop-size) {
    min-height: 145px;
    width: 145px;
    height: 145px;
  }
}
.skill__img {
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;
}
</style>
