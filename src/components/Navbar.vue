<template>
  <nav>
    <div class="navbar__icon">
      <router-link to="/">
        <mdicon size="30" name="home"></mdicon>
      </router-link>
    </div>
    <div class="navbar__icon">
      <router-link to="/about">
        <mdicon size="30" name="information"></mdicon>
      </router-link>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavbarComp',
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
nav {
  padding: 30px;

  .navbar__icon {
    transition: all 0.3s ease-out;
    margin-block: 30vw;
    cursor: pointer;
    background: $gradient_1;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0px 0px 2px white, 0px 0px 5px pink, 0px 0px 10px magenta;
    &:hover {
      color: #151515;
    }
  }

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
