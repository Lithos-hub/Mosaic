<template>
  <div class="options__wrapper">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card__options--title">Difficulty options</div>
          <div class="card__options--body">
            <div class="row">
              <div class="col">
                <button class="difficulty__btn" @click="selectDifficulty('easy')">Easy</button>
              </div>
              <div class="col">
                <button class="difficulty__btn" @click="selectDifficulty('mid')">Mid</button>
              </div>
              <div class="col">
                <button class="difficulty__btn" @click="selectDifficulty('hard')">Hard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card__options--title">Title</div>
          <div class="card__options--body">Body</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'MosaicOptions',
  setup() {
    const store = useStore();
    const selectDifficulty = (type) => {
      store.commit('setDifficulty', type);
    };
    return {
      selectDifficulty,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/app";

.options__wrapper {
  background: rgba(255, 255, 255, 0.781);
}

.options__title {
  position: absolute;
  left: 5vh;
  top: 0;
  font-size: 1em;
  color: $mainDark;
}

.card__options--title {
  font-size: 20px;
  font-weight: bold;
  background: $mainDark;
  color: beige;
  border-radius: 5px;
  padding: 5px;
}

.card__options--body {
  margin-top: 2em;
  padding-block: auto;
  vertical-align: middle;
}

.difficulty__btn {
  cursor: pointer;
  padding: 5px;
  height: 10vh;
  width: 100%;
  background: beige;
  color: $mainDark;
  border: 1px solid $mainDark;
  box-shadow: 0px 5px 2px $mainDark;
  margin-inline: 5px;
  width: 100px;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transition: all .3s ease-out;

  &:hover {
    background: $mainDark;
    color: beige;
  }
}
</style>
