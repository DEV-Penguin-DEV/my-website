<template>
  <ul class="progress-bar__lines">
    <li
      :class="`progress-bar__level-line progress-bar__level-line--${i + 1}`"
      v-for="i in 6"
      :key="i"
    ></li>
  </ul>
</template>

<script></script>

<style lang="scss" scoped></style>
