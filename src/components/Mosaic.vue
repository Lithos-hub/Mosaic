<template>
  <div class="mosaicComp">
    <img :src="images[randomNumber].path" alt="image" class="img" />
    <div class="mosaic__wrapper">
      <div
        class="mosaic__square mosaic__square--hover locked"
        v-for="i in 36"
        :key="i"
      >
        <div class="mosaic__square--icon">
          <mdicon class="icon" name="eye" size="50" />
        </div>
      </div>
    </div>
  </div>
  <Input class="mosaic__input" :image="images[randomNumber].path" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Input from './Input.vue';

const images = ref([
  {
    path: '../img/1.jpg',
  },
  {
    path: '../img/2.jpg',
  },
]);
const randomNumber = Math.floor(Math.random() * images.value.length);
const listenClick = () => {
  const squares = document.querySelectorAll('.mosaic__square');
  squares.forEach((square) => {
    square.addEventListener('click', () => {
      square.classList.remove('locked');
      square.classList.remove('mosaic__square--hover');
      square.classList.add('unlocked');
    });
  });
};
onMounted(() => {
  listenClick();
});
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.icon {
  opacity: 0;
  transition: all 0.5s ease-in;
  color: #505050;
}
.mosaicComp {
  border-radius: 20px;
  width: $mosaicSide;
  height: $mosaicSide;
  position: fixed;
  top: 24vw;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px white, 5px 5px 10px #ff00ea, -5px -5px 10px cyan;
}

.mosaic__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  width: $mosaicSide;
  height: $mosaicSide;
  display: grid;
  box-shadow: 0px 0px 5px black;
  grid-template-columns: repeat(6, 1fr);
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  height: $mosaicSide;
  width: $mosaicSide;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.mosaic__square {
  position: relative;
  transition: all 0.5s ease-in;
  opacity: 1;
  background: white;
  margin: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 0px 4px 10px pink, 2px 0px 5px cyan, 0px 3px 7px rgb(195, 0, 255);

  &:nth-child(1) {
    border-radius: 20px 0px 0px 0px;
  }
  &:nth-child(6) {
    border-radius: 0px 20px 0px 0px;
  }
  &:nth-child(31) {
    border-radius: 0px 0px 0px 20px;
  }
  &:nth-child(36) {
    border-radius: 0px 0px 20px 0px;
  }

}

.mosaic__square--hover {
  &:hover {
    background: white;
    box-shadow: inset 3px 2px 5px #00ffea, inset 5px 0px 8px rgba(195, 0, 255, 0.678);

    .mosaic__square--icon,
    .icon {
      opacity: 1;
    }
  }
}

.locked {
  transition: all 0.2s ease-in;
  background: #ffffff;
  opacity: 1;
}

.unlocked {
  transition: all 0.2s ease-in;
  background: transparent;
}

.mosaic__square--icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  opacity: 0;
}

.mosaic__input {
  position: fixed;
  bottom: 1vw;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
