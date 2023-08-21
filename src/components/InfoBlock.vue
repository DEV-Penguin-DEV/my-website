<template>
  <a class="info-block" :href="href" target="_blank">
    <img :src="`/img/${iconSrc}`" :alt="iconAlt" class="info-block__icon" />
    <p class="info-block__text">{{ blockContent }}</p>
  </a>
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
    blockContent: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  display: flex;
  width: 35vw;
  gap: 1.5vw;
  padding: 1.5vw 45px;
  box-sizing: border-box;
  transition: 0.75s;
  border-radius: 100px 30px 30px 100px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 26.26%,
    rgba(0, 127, 146, 0.52) 100%
  );
  backdrop-filter: blur(10px);
  align-items: center;

  @media (max-width: $mini-desktop-size) {
    width: 38vw;
    padding: 1.75vw 35px;
  }

  @media (max-width: $big-tablet-size) {
    width: 39vw;
    padding: 1.75vw 25px;
  }

  @media (max-width: $tablet-size) {
    width: 40vw;
    padding: 1.75vw 15px;
  }

  &:nth-of-type(2),
  &:nth-of-type(5) {
    position: relative;
    left: -3vw;
  }

  &:nth-of-type(1),
  &:nth-of-type(6) {
    position: relative;
    left: -9vw;
  }

  &:hover {
    transition: 0.75s;
    cursor: pointer;
    scale: 1.1;
  }
}

.info-block__icon {
  width: 2.5vw;
  height: 2.5vw;
}

.info-block__text {
  color: $main-text-color;
  font-size: 1.8vw;
  font-family: Arial;
  font-style: normal;
  font-weight: 700;
  line-height: 2.2vw;
  letter-spacing: 0.175rem;
}
</style>
