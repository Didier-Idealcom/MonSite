<template>
  <div class="about">
    <div class="presentation">
      <div class="presentation_portrait">
        <img ref="portrait" src="../assets/images/portrait.png" alt="Didier Largeron">
      </div>
      <div class="presentation_infos">
        <h1 ref="h1">Didier Largeron</h1>
        <h2 ref="h2">Développeur web de génie</h2>
      </div>
    </div>

    <div class="liste_logos">
      <div class="logo_icon"><img src="../assets/images/logo_php.png" alt="PHP"></div>
      <div class="logo_icon"><img src="../assets/images/logo_laravel.png" alt="Laravel"></div>
      <div class="logo_icon"><img src="../assets/images/logo_mysql.png" alt="MySQL"></div>

      <div class="logo_icon"><img src="../assets/images/logo_html.png" alt="HTML"></div>
      <div class="logo_icon"><img src="../assets/images/logo_css.png" alt="CSS"></div>
      <div class="logo_icon"><img src="../assets/images/logo_javascript.png" alt="Javascript"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'About',
  methods: {
    buildTimeline () {
      const tl = gsap.timeline()
      tl.fromTo(this.$refs.portrait, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
      tl.fromTo(this.$refs.h1, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, '<0.5')
      tl.fromTo(this.$refs.h2, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, '<0.5')
      this.timeline = tl
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeCreate () {

  },
  created () {

  },
  beforeMount () {

  },
  mounted () {
    this.buildTimeline()
    this.timeline.timeScale(1)
    this.timeline.play()
  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeRouteLeave (to, from, next) {
    this.timeline.timeScale(2)
    this.timeline.reverse().then(function () {
      next()
    })
  },
  beforeUnmount () {

  },
  unmounted () {

  }
}
</script>

<style lang="scss">
.presentation {
  display: flex; justify-content: space-between; align-items: center; width: 80%; margin: 0 auto 50px auto;
  h1 {font-size: 80px;}
  h2 {font-size: 50px;}
}

.liste_logos {
  display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 50px; width: max-content; margin: 0 auto;
  .logo_icon {display: flex; justify-content: center; align-items: center; width: 200px; height: 200px;}
}
</style>
