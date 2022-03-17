<template>
  <Navbar class="navbar" />
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
  margin: 0;
  animation: backgroundColors 50s linear infinite alternate-reverse;
  height: 100%;
  width: 100%;
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
}

@keyframes backgroundColors {
  0% {
    background: #1b0417;
  }
  25% {
    background: #061103;
  }
  50% {
    background: #011612;
  }
  75% {
    background: #150516;
  }
  100% {
    background: #100111;
  }
}
</style>
