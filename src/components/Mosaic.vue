<template>
  <div class="mosaicComp">
    <div class="mosaic__wrapper">
      <div class="mosaic__square locked" v-for="i in 9" :key="i">
        <div class="mosaic__square--icon">
          <mdicon class="icon" name="eye" size="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MosaicComp',
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.icon {
  opacity: 0;
  transition: all 0.5s ease-in;
  color: #505050;
}
.mosaicComp {
  border-radius: 20px;
  width: 35vw;
  height: 35vw;
  position: fixed;
  top: 24vw;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 2px white, 0px 0px 10px #ff00ea, 0px 0px 20px rgb(25, 124, 131);
}

.mosaic__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  width: 35vw;
  height: 35vw;
  display: grid;
  box-shadow: 0px 0px 5px black;
  grid-template-columns: repeat(3, 1fr);
  background-image: url("../assets/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.mosaic__square {
  position: relative;
  transition: all 0.5s ease-in;
  opacity: 1;
  margin: 0px;
  border: 1px solid #202020;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: white;
  box-shadow: 0px 0px 5px pink;

  &:nth-child(1) {
    border-radius: 20px 0px 0px 0px;
  }
  &:nth-child(3) {
    border-radius: 0px 20px 0px 0px;
  }
  &:nth-child(7) {
    border-radius: 0px 0px 0px 20px;
  }
  &:nth-child(9) {
    border-radius: 0px 0px 20px 0px;
  }

  &:hover {
    background: white;
    box-shadow: inset 0px 0px 10px #000000, inset 0px 0px 20px rgb(200, 178, 207),
      inset 0px 0px 30px #b6b19a;

    .mosaic__square--icon,
    .icon {
      opacity: 1;
    }
  }
}

.locked {
  transition: all 0.2s ease-in;
  background: white;
}

.unlocked {
  transition: all 0.2s ease-in;
  background: transparent;
}

.mosaic__square--icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  opacity: 0;
}
</style>
