<template>
  <div class="background" :class="theme">
    <app-header></app-header>
    <router-view/>
    <p>&nbsp;</p>
    <p class="flex flex-center-x"><button class="btn-second bg-primary color-white" @click="switchTheme">Switch Theme</button></p>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      theme: 'dark'
    }
  },
  methods: {
    switchTheme () {
      this.theme = (this.theme === 'light' ? 'dark' : 'light')
    }
  }
  /* metaInfo () {
    return {
      title: 'Didou Vue.js website',
      meta: [
        { name: 'description', content: 'Site internet test avec vue.js' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  } */
}
</script>

<style lang="scss">
@import 'assets/scss/framework';
@import 'assets/scss/buttons';

body {font-family: $font-primary; font-size: 16px; font-size: 1.6rem; color: $color-primary; overflow-x: hidden;}
#app {text-align: center;}

.background {
  min-height: 100vh; transition: all ease-in-out 1s;
  &.light {
    background-color: #fff; color: $color-primary;
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {background-color: #000;}
    .form_common input, .form_common select, .form_common textarea {background-color: transparent;}
  }
  &.dark {
    background-color: #000; color: $color-white;
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {background-color: #fff;}
    .form_common input, .form_common select, .form_common textarea {background-color: #fff;}
  }
}
</style>
