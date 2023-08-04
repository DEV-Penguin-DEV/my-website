<template>
  <div class="progress-bar__lines">
    <ul class="progress-bar__container">
      <li :class="'progress-bar__level-line'" v-for="i in 6" :key="i"></li>
    </ul>

    <div
      class="progress__green-line"
      :style="{
        width: procent,
        borderTopRightRadius: procent == '100%' ? '50px' : '0',
        borderBottomRightRadius: procent == '100%' ? '50px' : '0',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    procent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar__lines {
  width: 100%;
  border-radius: 50px;
  background: #fff;
  height: 30px;
  position: relative;
}

.progress__green-line {
  height: 100%;
  background: #32d342;
  border-radius: 50px;
  position: absolute;
  left: 0;
  top: 0;
}

.progress-bar__container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  @include centering-horizontal-absolut-element();
  height: 100%;
  z-index: 2;
}

.progress-bar__level-line {
  width: 5px;
  height: 100%;
  background-color: $main-text-color;
}
</style>
