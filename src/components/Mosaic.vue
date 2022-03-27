<template>
  <CheckingDialog v-if="isCheckingAnswer" :success="isCorrectAnswer" />
  <div class="mosaicComp">
    <img :src="images[randomNumber].path" alt="image" class="img" />
    <div class="mosaic__wrapper">
      <div class="mosaic__square mosaic__square--hover locked" v-for="i in numSquares" :key="i">
        <div class="mosaic__square--icon">
          <mdicon class="icon" name="eye" size="30" />
        </div>
      </div>
  <Input
    class="mosaic__input"
    :image="images[randomNumber].path"
    :model="inputModel"
    :sending="isSendingAnswer"
    :key="inputKey"
    @correct-answer="correctAnswer"
    @wrong-answer="wrongAnswer"
  />
    </div>
  </div>
  <button
    :class="`mosaic__keyboard--button ${
      showKeyboard ? 'keyboard__button--active' : 'keyboard__button--inactive'
    }`"
    @click="showKeyboard = !showKeyboard"
  >
    <mdicon name="keyboard" size="30" />
  </button>
  <Keyboard
    :class="`keyboardComp ${showKeyboard ? 'showKeyboard' : 'hideKeyboard'}`"
    @write-key="writeKey"
    @backspace="backspace"
    @send="send"
  />
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Keyboard from './Keyboard.vue';
import CheckingDialog from './CheckingDialog.vue';
import Input from './Input.vue';

export default {
  name: 'MosaicComp',
  components: {
    Keyboard,
    CheckingDialog,
    Input,
  },
  setup() {
    const store = useStore();

    const { numSquares } = store.getters;
    const inputKey = ref(1);
    const showKeyboard = ref(false);
    const isCorrectAnswer = ref(false);
    const isCheckingAnswer = ref(false);
    const images = ref([
      // {
      //   path: '../img/1.jpg',
      // },
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
      console.log('Sending!');
      isSendingAnswer.value = true;
      setTimeout(() => {
        isSendingAnswer.value = false;
      }, 1000);
    };
    const correctAnswer = () => {
      console.log('Correct!');
      isCheckingAnswer.value = true;
      isCorrectAnswer.value = true;
      setTimeout(() => {
        isCheckingAnswer.value = false;
      }, 2000);
    };
    const wrongAnswer = () => {
      console.log('Wrong!');
      isCheckingAnswer.value = true;
      isCorrectAnswer.value = false;
      setTimeout(() => {
        isCheckingAnswer.value = false;
      }, 2000);
    };
    onMounted(() => {
      listenClick();
    });

    return {
      numSquares,
      showKeyboard,
      randomNumber,
      writeKey,
      backspace,
      send,
      correctAnswer,
      wrongAnswer,
      listenClick,
      isCorrectAnswer,
      isCheckingAnswer,
      isSendingAnswer,
      images,
    };
  },
};

</script>

<style lang="scss" scoped>
@import "../scss/variables";

.icon {
  opacity: 0;
  transition: all 0.5s ease-in;
  color: #505050;
}
.mosaicComp {
  border-radius: 20px 20px 0px 0px;
  width: $mosaicSide;
  height: $mosaicSide;
  position: fixed;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mosaic__wrapper {
  position: relative;
  border-radius: 25px 25px 0px 0px;
  width: 100%;
  height: 100%;
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
  padding: 10px;
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
  // &:nth-child(31) {
  //   border-radius: 0px 0px 0px 15px;
  // }
  // &:nth-child(36) {
  //   border-radius: 0px 0px 15px 0px;
  // }
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
  position: absolute;
  top: 55vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mosaic__keyboard--button {
  transition: all 0.3s ease-in;
  cursor: pointer;
  width: 60px;
  padding: 2px;
  background: white;
  box-shadow: 0px 0px 10px $mainDark;
  border: none;
  border-radius: 2px;
  position: absolute;
  bottom: 5vh;
  transform: translate(-50%, -50%);
  z-index: 9999;
  right: 0vh;
}
.keyboard__button--active {
  transition: all 0.3s ease-in;
  cursor: pointer;
  background: $mainDark;
  color: white;
  z-index: 9999;
}
.keyboard__button--inactive {
  transition: all 0.3s ease-in;
  cursor: pointer;
  background: white;
  color: $mainDark;
  z-index: 9999;
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
