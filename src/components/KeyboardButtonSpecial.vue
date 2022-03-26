<template>
  <button class="keyboard__specialButton" @click="emitAction">
    <mdicon :name="icon" size="25" />
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  action: String,
  icon: String,
});

const emit = defineEmits(['backspace', 'send']);

const emitAction = () => {
  emit(props.action);
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.keyboard__specialButton {
    display: block;
    cursor: pointer;
    transition: all .3s ease-out;
    font-weight: bold;
    color: $mainDark;
    background: rgba(0, 0, 0, 0.253);
    border-radius: 5px;
    border: none;
    margin-block: 0.5em;
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
