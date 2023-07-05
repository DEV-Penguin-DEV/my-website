<template>
  <ul class="progress-bar__levels">
    <li
      :class="`progress-bar__level progress-bar__level--${level}`"
      v-for="level in Levels"
      :key="level"
    >
      {{ level }}
    </li>
  </ul>
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

<style lang="scss" scoped></style>
