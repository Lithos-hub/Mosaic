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
    padding: 10px;
    font-size: 1.5em;
    font-weight: bold;
    color: $mainDark;
    background: rgba(0, 0, 0, 0.253);
    border-radius: 5px;
    border: none;
    margin: 2px;
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
