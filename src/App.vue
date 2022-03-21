<template>
  <Navbar class="navbar" />
  <div class="background__1"></div>
  <div class="background__2"></div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">

body {
  // animation: backgroundColors 50s linear infinite alternate-reverse;
  height: 100%;
  width: 100%;
}

.background__1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(50deg, #ffe96d 50%, #42b364 50%);
}
.background__2 {
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #4fa2e6 50%, #f89f63 50%);
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
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99999;
}

// @keyframes backgroundColors {
//   0% {
//     background: #1b0417;
//   }
//   25% {
//     background: #0c0311;
//   }
//   50% {
//     background: #011612;
//   }
//   75% {
//     background: #150516;
//   }
//   100% {
//     background: #100111;
//   }
// }
</style>
