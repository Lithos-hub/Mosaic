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
    <div class="navbar__icon languageMenu__icon">
      <button class="navbar__icon--btn">
        <mdicon size="30" name="earth"></mdicon>
      </button>
      <div class="languageMenu__wrapper">
        <button class="languageMenu__btn btn__es" @click="changeLanguage('ES')">ES</button>
        <button class="languageMenu__btn btn__en" @click="changeLanguage('EN')">EN</button>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavbarComp',
  components: {},
  setup() {
    const changeLanguage = (lang) => {
      localStorage.setItem('language', JSON.stringify(lang));
      // TODO: Set language using i18n
    };
    return {
      changeLanguage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
nav {
  padding-inline: 25px;

  .navbar__icon {
    transition: all 0.3s ease-out;
    margin-block: 10vw;
    cursor: pointer;
    padding: 5px;
  }

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: $mainDark;
    }
  }
}

.languageMenu__icon {
  transition: all .3s ease-out;
  cursor: pointer;
  position: relative;

  &:hover {
    .languageMenu__wrapper {
      opacity: 1;
    }
    color: white;
  }
}

.navbar__icon--btn {
  padding: 0px;
  border-radius: 50%;
  border: none;
  background: none;
}
.languageMenu__wrapper {
  position: absolute;
  top: -3vh;
  left: -5vh;
  width: 10vh;
  transition: all .3s ease-out;
  opacity: 0;
  padding-left: 10px;
  display: block;
  border-radius: 5%;
  background: none;
  box-shadow: 0px 0px 5px black 0px 0px 10px #151515;
  border-radius: 25px;

  &:hover {
    background: rgba(255, 255, 255, 0.322);
  }
  .languageMenu__btn {
    display: block;
    transition: all .3s ease-out;
    cursor: pointer;
    border: none;
    background: $mainDark;
    color: beige;
    border-radius: 20px;
    padding: 10px;
    font-size: 14px;
    margin-block: 1vh;
    font-weight: bold;
    border-inline: 1px solid $mainDark;

    &:hover {
      border-radius: 20px;
      background: white;
      color: $mainDark;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
