<template>
  <div class="portfolio">
    <h1 ref="h1">Réalisations</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus explicabo, soluta veritatis, obcaecati beatae vero porro, consequuntur quas repudiandae recusandae aliquam sed architecto nihil officia tempora cum hic delectus?</p>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Portfolio',
  methods: {
    buildTimeline () {
      const tl = gsap.timeline()
      tl.fromTo(this.$refs.h1, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
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
    this.timeline.play()
  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeRouteLeave (to, from, next) {
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
