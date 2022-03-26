<template>
  <div class="keyboard__wrapper">
    <div class="keyboard__letters">
    <div class="keyboard__row">
      <KeyboardButton
        v-for="(letter, i) in keyboardKeys1"
        :key="i"
        :letter="letter"
        @emit-key="emitKey"
      />
    </div>
    <div class="keyboard__row">
      <KeyboardButton
        v-for="(letter, i) in keyboardKeys2"
        :key="i"
        :letter="letter"
        @emit-key="emitKey"
      />
    </div>
    <div class="keyboard__row">
      <KeyboardButton
        v-for="(letter, i) in keyboardKeys3"
        :key="i"
        :letter="letter"
        @emit-key="emitKey"
      />
    </div>
    </div>
    <div class="keyboard__options">
      <button class="keyboard__backspace--btn">
        <mdicon name="close-box" size="40" />
      </button>
      <button class="keyboard__send--btn">
        <mdicon name="send" size="40" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import KeyboardButton from './KeyboardButton.vue';

const emit = defineEmits(['writeKey']);

const KEYS_1 = ref('QWERTYUIOP');
const KEYS_2 = ref('ASDFGHJKLÑ');
const KEYS_3 = ref('ZXCVBNM');
const keyboardKeys1 = KEYS_1.value.split('');
const keyboardKeys2 = KEYS_2.value.split('');
const keyboardKeys3 = KEYS_3.value.split('');

const emitKey = (key) => {
  emit('writeKey', key);
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.keyboard__row {
  display: flexbox;
  padding: 5px;
}

.keyboard__options {
  position: absolute;
  right: 30vw;
  top: 50%;
  transform: translateY(-50%);
}

.keyboard__backspace--btn, .keyboard__send--btn {
    display: block;
    cursor: pointer;
    transition: all .3s ease-out;
    font-weight: bold;
    color: $mainDark;
    background: rgba(0, 0, 0, 0.253);
    border-radius: 5px;
    border: none;
    margin-block: 1em;
    width: 50px;
    max-width: 50px;
    height: 50px;
    max-height: 50px;

    &:hover {
        background: $mainDark;
        color: white;
    }
}
</style>
