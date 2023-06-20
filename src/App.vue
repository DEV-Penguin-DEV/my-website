<template>
  <MainHeader />
</template>

<script>
import MainHeader from "@/components/MainHeader";

export default {
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
$bg-color: #000000;
$success-color: #10c938;
$white-color: #f9f9f9;
$alert-color: #ff1d16;
$second-text-color: #484848;
$gold-color: #c3a66e;
$main-text-color: #00e0ff;
$blue-gradient: linear-gradient(
    180deg,
    rgba(85, 255, 255, 0.8) 0%,
    rgba(0, 236, 255, 0) 100%
  ),
  rgba(0, 224, 255, 0.65);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-color;
  background-color: $bg-color;
}
</style>
