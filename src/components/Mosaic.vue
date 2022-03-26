<template>
  <div class="mosaicComp">
    <img :src="images[randomNumber].path" alt="image" class="img" />
    <div class="mosaic__wrapper">
      <div class="mosaic__square mosaic__square--hover locked" v-for="i in 36" :key="i">
        <div class="mosaic__square--icon">
          <mdicon class="icon" name="eye" size="50" />
        </div>
      </div>
    </div>
  </div>
  <Input
    class="mosaic__input"
    :image="images[randomNumber].path"
    :model="inputModel"
    :sending="isSendingAnswer"
    :key="inputKey"
  />
  <button
    :class="`mosaic__keyboard--button ${
      showKeyboard ? 'keyboard__button--active' : 'keyboard__button--inactive'
    }`"
    @click="showKeyboard = !showKeyboard"
  >
    <mdicon name="keyboard" size="40" />
  </button>
  <Keyboard
    :class="`keyboardComp ${showKeyboard ? 'showKeyboard' : 'hideKeyboard'}`"
    @write-key="writeKey"
    @backspace="backspace"
    @send="send"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Keyboard from './Keyboard.vue';
import Input from './Input.vue';

const inputKey = ref(1);
const showKeyboard = ref(false);
const images = ref([
  {
    path: '../img/1.jpg',
  },
  {
    path: '../img/2.jpg',
  },
]);
const isSendingAnswer = ref(false);
const inputModel = ref('');
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
const writeKey = (key) => {
  inputModel.value += key;
  inputKey.value += 1;
};
const backspace = () => {
  const firstValue = inputModel.value;
  const newValue = firstValue.substring(0, firstValue.length - 1);
  inputModel.value = newValue;
  inputKey.value += 1;
};
const send = () => {
  console.log('Changing sending boolean from ', isSendingAnswer.value);
  isSendingAnswer.value = true;
  console.log('To...', isSendingAnswer.value);
  setTimeout(() => {
    isSendingAnswer.value = false;
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid $mainDark;
}

.mosaic__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  width: $mosaicSide;
  height: $mosaicSide;
  display: grid;
  border: 10px solid $mainDark;
  grid-template-columns: repeat(6, 1fr);
}

.img {
  position: absolute;
  top: 0;
  left: 0;
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
  border: 1px solid $mainDark;

  &:nth-child(1) {
    border-radius: 15px 0px 0px 0px;
  }
  &:nth-child(6) {
    border-radius: 0px 15px 0px 0px;
  }
  &:nth-child(31) {
    border-radius: 0px 0px 0px 15px;
  }
  &:nth-child(36) {
    border-radius: 0px 0px 15px 0px;
  }
}

.mosaic__square--hover {
  &:hover {
    background: white;

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
  animation: flash 0.3s ease-in;
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
  bottom: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mosaic__keyboard--button {
  transition: all 0.3s ease-in;
  cursor: pointer;
  padding-inline: 20px;
  background: white;
  box-shadow: 0px 0px 10px $mainDark;
  border: none;
  border-radius: 10px;
  position: fixed;
  bottom: 1vw;
  transform: translate(-50%, -50%);
  z-index: 9999;
  right: 0vw;
}
.keyboard__button--active {
  transition: all 0.3s ease-in;
  background: $mainDark;
  color: white;
}
.keyboard__button--inactive {
  transition: all 0.3s ease-in;
  background: white;
  color: $mainDark;
}
.keyboardComp {
  transition: all 0.3s ease-in;
  background: rgba(255, 255, 255, 0.103);
  border-radius: 10px;
  display: grid;
  width: 100%;
}
.showKeyboard {
  transition: all 0.3s ease-in;
  position: fixed;
  bottom: 0;
  left: 0;
}
.hideKeyboard {
  transition: all 0.3s ease-in;
  position: fixed;
  bottom: -30em;
  left: 0;
}

@keyframes flash {
  0% {
    background: white;
    filter: brightness(2);
  }
  100% {
    background: transparent;
    filter: brightness(1);
  }
}
</style>
