<template>
  <div class="contact">
    <h1 ref="h1">Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus explicabo, soluta veritatis, obcaecati beatae vero porro, consequuntur quas repudiandae recusandae aliquam sed architecto nihil officia tempora cum hic delectus?</p>

    <form action="#" method="POST" @submit.prevent="handleSubmit" class="form_common">
      <div class="form_row">
        <div class="form_group">
          <input type="text" name="nom" v-model="form.nom" placeholder="Nom">
        </div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <input type="text" name="prenom" v-model="form.prenom" placeholder="Prénom">
        </div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <input type="text" name="email" v-model="form.email" placeholder="E-mail">
        </div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <input type="text" name="telephone" v-model="form.telephone" placeholder="Téléphone">
        </div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <textarea name="message" v-model="form.message" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="form_row">
        <div class="form_group">
          <button class="btn-primary bg-primary color-white">Envoyer</button>
        </div>
      </div>
    </form>

    <div class="form_data"><pre>{{ $data }}</pre></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'AppHeader',
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    buildTimeline () {
      const tl = gsap.timeline()
      tl.fromTo(this.$refs.h1, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      /* this.$el.querySelectorAll('input, select, textarea, button').forEach(function (input) {
        tl.fromTo(input, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      }) */
      tl.staggerFromTo(this.$el.querySelectorAll('input, select, textarea, button'), 1, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, 0.5)
      this.timeline = tl
    },
    handleSubmit (e) {
      this.isSubmitted = true
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
    this.timeline.timeScale(3)
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
@import '../assets/scss/forms';

.form_data {width: max-content; margin: 0 auto; text-align: left;}
</style>
