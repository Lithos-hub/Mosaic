<template>
  <div :class="isCorrectAnswer ? 'dialog dialog__success' : 'dialog dialog__wrong'">
    <h1>{{ isCorrectAnswer ? "¡Correcto!" : "¡Has fallado!" }}</h1>
    <mdicon
      class="dialog__icon"
      :name="isCorrectAnswer ? 'thumb-up' : 'thumb-down'"
      size="60"
    ></mdicon>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    success: {
      type: Boolean,
    },
  },
  setup(props) {
    const isCorrectAnswer = ref(props.success);

    return {
      isCorrectAnswer,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: $mosaicSide / 1.5;
  height: $mosaicSide / 1.5;
  z-index: 999999;
  border-radius: 5%;
  padding: 20px;
  box-shadow: 0px 5px 10px black, 0px 10px 50px #202020;

  h1 {
    position: absolute;
    width: 100%;
    top: 10vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .dialog__icon {
    position: absolute;
    top: 25vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.dialog__success {
  background: #35bd52;
}

.dialog__wrong {
  background: #bd3535;
}
</style>
