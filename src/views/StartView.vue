<template>
  <div>
    <div class="container">
      <p class="game__info">
        Mosaic is a game where you have to guess the image. For that, you may click on each square
        to reveal a image portion. For each square you reveal, less points you will get, so try to
        guess the image as fast as possible.
        <br>
        <br>
        Good luck!
      </p>
    </div>
    <router-link class="router__button" to="/game"> Start game </router-link>
  </div>
</template>

<script>
export default {
  name: 'StartView',
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/app";

.router__button {
  background: white;
  text-decoration: none;
  font-size: 18px;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-out;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5px;
  border: none;

  &:hover {
    background: $mainDark;
    color: beige;
  }
}

.game__info {
  color: black;
  position: fixed;
  top: 30%;
  width: 100vh;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  padding: 50px;
  font-size: 30px;
  font-weight: bold;
}
</style>
