<template>
  <div class="progress-bar__levels">
    <ul class="progress-bar__levels-container">
      <li :class="'progress-bar__level'" v-for="level in Levels" :key="level">
        {{ level }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    };
  },
};
</script>

<style lang="scss" scoped>
.progress-bar__levels-container {
  display: flex;
  justify-content: space-between;
  width: 88%;
  position: absolute;
  @include centering-horizontal-absolut-element();
  z-index: 2;
}

.progress-bar__level {
  color: $main-text-color;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px; /* 116.667% */
  letter-spacing: 1.8px;
}
</style>
