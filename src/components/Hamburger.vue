<template>
  <button class="hamburger hamburger--slider" :class="{ 'is-active': isActive }" type="button" @click="isActive = !isActive">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Hamburger',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
@import "hamburgers/_sass/hamburgers/hamburgers";
</style>
