<template>
  <div class="home">
    <h1>Mosaic</h1>
    <button class="mosaicOptions--btn" @click="showOptions">
      <mdicon name="menu" size="30" />
    </button>
    <MosaicOptions class="mosaicOptions--comp" />
    <div class="mosaic-comp">
      <Mosaic />
    </div>
  </div>
</template>

<script>
import Mosaic from '@/components/Mosaic.vue';
import MosaicOptions from '@/components/MosaicOptions.vue';

export default {
  name: 'HomeView',
  components: {
    Mosaic,
    MosaicOptions,
  },
  setup() {
    const showOptions = () => {
      const OPTIONS_HTML = document.querySelector('.mosaicOptions--comp');
      console.log(OPTIONS_HTML);
      OPTIONS_HTML.style.transition = 'all .5s ease-out';
      setTimeout(() => {
        OPTIONS_HTML.style.height = '30vh';
        OPTIONS_HTML.style.opacity = 1;
      }, 100);
    };
    return {
      showOptions,
    };
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
.mosaicOptions--btn {
  position: fixed;
  cursor: pointer;
  transition: all .3s ease-out;
  top: 3vh;
  left: 3vh;
  padding: 10px;
  height: auto;
  width: auto;
  background: none;
  border: none;
  color: $mainDark;
  &:hover {
    color: white;
  }
}
.mosaicOptions--comp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0vh;
  opacity: 0;
  z-index: 999999;
}
</style>
