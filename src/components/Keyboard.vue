<template>
  <div class="keyboard__wrapper">
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

.keyboard__wrapper {

}

.keyboard__row {
  display: flexbox;
  padding: 5px;
}
</style>
