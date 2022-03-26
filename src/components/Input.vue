<template>
  <input placeholder="Enter your answer" v-model="answer" />
</template>

<script>
import {
  watch,
  ref,
} from 'vue';

export default {
  props: {
    image: {
      type: String,
    },
    model: {
      type: String,
    },
    sending: {
      type: Boolean,
    },
  },
  emits: ['correct-answer', 'wrong-answer'],
  name: 'inputComp',
  setup(props, { emit }) {
    const answer = ref(props.model);

    const emitCorrectAnswer = () => {
      console.log('Emiting correct');
      emit('correct-answer');
    };
    const emitWrongAnswer = () => {
      console.log('Emiting wrong');
      emit('wrong-answer');
    };

    const checkAnswer = () => {
      const dictionary = {
        '../img/1.jpg': 'perro',
        '../img/2.jpg': 'casa',
      };

      const matchAnswer = dictionary[props.image];

      if (answer.value.toLowerCase() === matchAnswer) {
        emitCorrectAnswer();
      } else {
        emitWrongAnswer();
      }
    };
    watch(() => props.sending, (newVal) => {
      if (newVal) {
        checkAnswer();
      }
    });
    return {
      answer,
      checkAnswer,
      emitCorrectAnswer,
      emitWrongAnswer,
    };
  },
};

</script>

<style lang="scss" scoped>
@import "../scss/variables";

input {
  background: white;
  width: $mosaicSide;
  height: 40px;
  max-width: $mosaicSide;
  padding: 10px;
  border-radius: 0px 0px 25px 25px;
  border: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
}
</style>
0
