<template>
  <div class="home">
    <h1>Mosaic</h1>
    <div class="mosaic-comp">
      <Mosaic />
    </div>
  </div>
</template>

<script>
import Mosaic from '@/components/Mosaic.vue';

export default {
  name: 'HomeView',
  components: {
    Mosaic,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

h1 {
  width: auto;
  position: absolute;
  top: 2.5vh;
  left: 50%;
  text-transform: uppercase;
  letter-spacing: 10px;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: white;
  text-shadow: 3px 3px 1px black;
}
</style>
