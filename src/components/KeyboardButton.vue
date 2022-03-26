<template>
  <button @click="emitKey(props.letter)">
      {{ props.letter }}
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['emitKey']);
const props = defineProps({
  letter: String,
});

const emitKey = (key) => {
  emit('emitKey', key);
};

</script>

<style lang="scss" scoped>
@import "../scss/variables";

button {
    cursor: pointer;
    transition: all .3s ease-out;
    font-size: 0.8em;
    font-weight: bold;
    color: $mainDark;
    background: rgba(0, 0, 0, 0.253);
    border-radius: 5px;
    border: none;
    margin-inline: 1px;
    width: $keyboardLetterSizes;
    max-width: $keyboardLetterSizes;
    height: $keyboardLetterSizes;
    max-height: $keyboardLetterSizes;

    &:hover {
        background: $mainDark;
        color: white;
    }
}

</style>
