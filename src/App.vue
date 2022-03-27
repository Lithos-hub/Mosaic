<template>
<div class="app__background">
  <Navbar class="navbar" />
  <div class="background__1"></div>
  <div class="background__2"></div>
  <router-view/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { onMounted } from 'vue';

export default {
  components: {
    Navbar,
  },
  setup() {
    const listenClickOutsideOptions = () => {
      document.addEventListener('click', ({ target }) => {
        const OPTIONS_COMP = document.querySelector('.mosaicOptions--comp');
        const OPTIONS_BTN = document.querySelector('.mosaicOptions--btn');
        if (!OPTIONS_COMP.contains(target) && !OPTIONS_BTN.contains(target)) {
          OPTIONS_COMP.style.transition = 'all .5s ease-in';
          OPTIONS_COMP.style.height = 0;
          OPTIONS_COMP.style.opacity = 0;
        }
      });
    };

    onMounted(() => {
      listenClickOutsideOptions();
    });

    return {
      listenClickOutsideOptions,
    };
  },
};
</script>

<style lang="scss">
@import './scss/variables';
body {
  // animation: backgroundColors 50s linear infinite alternate-reverse;
  height: 100%;
  width: 100%;
  background: $mainDark;
}

.background__1 {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 300%;
  height: 500%;
  background: linear-gradient(50deg, #ffe96d 50%, #42b364 50%);
  animation: rotate1 10s linear infinite;
}
.background__2 {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 500%;
  height: 300%;
  background: linear-gradient(120deg, #4fa2e6 50%, #f89f63 50%);
  animation: rotate2 15s linear infinite;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family: 'Saira Condensed', sans-serif;
}

.navbar {
  position: fixed;
  right: 5vh;
  top: 50%;
  padding: 0;
  max-width: 25px;
  transform: translateY(-50%);
  z-index: 99;
}

@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
