<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/logo.jpg" alt="Logo">
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <hamburger></hamburger>
  </header>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue'

export default {
  name: 'AppHeader',
  components: {
    Hamburger
  }
}
</script>

<style lang="scss">
.header {display: flex; justify-content: space-between; align-items: center; padding: 10px;}
.logo {width: 10%;}
.nav {
  a {
    padding: 5px 10px; font-size: 20px; font-size: 2.0rem; font-weight: bold;
    &.router-link-exact-active {color: #42b983;}
  }
}
.hamburger {width: 10%;}
</style>
