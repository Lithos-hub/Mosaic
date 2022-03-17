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
  width:  100px;
  position: absolute;
  top: 1vw;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $gradient_1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
