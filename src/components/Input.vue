<template>
  <input placeholder="Enter your answer" v-model="answer" @change="checkAnswer" />
</template>

<script setup>
import { ref, defineProps } from 'vue';

const answer = ref('');
const props = defineProps({
  image: String,
});

const checkAnswer = () => {
  switch (props.image) {
    case '../img/1.jpg':
      if (answer.value.toLowerCase() === 'dog') {
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

input {
  background: white;
  min-width: $mosaicSide;
  height: 25px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.9rem;
  &:focus {
    outline: none;
  }
}
</style>
0
