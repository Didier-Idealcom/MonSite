<template>
  <div class="portfolio">
    <h1 ref="h1">Réalisations</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus explicabo, soluta veritatis, obcaecati beatae vero porro, consequuntur quas repudiandae recusandae aliquam sed architecto nihil officia tempora cum hic delectus?</p>

    <!--<Scene />-->
  </div>
</template>

<script>
import { gsap } from 'gsap'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols'
// import Scene from '@/components/Scene.vue'

let scene, camera, renderer, controls, cube

export default {
  name: 'Portfolio',
  components: {
    // Scene
  },
  methods: {
    buildTimeline () {
      const tl = gsap.timeline()
      tl.fromTo(this.$refs.h1, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      this.timeline = tl
    },
    threeInit () {
      // Camera
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.z = 100

      // Scene
      scene = new THREE.Scene()

      const light1 = new THREE.AmbientLight(0xffffff, 0.5),
            light2 = new THREE.DirectionalLight(0xffffff)

      light2.position.set(0, 0, 0)

      scene.add(light1)
      scene.add(light2)

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      renderer.setClearColor(0xCCCCCC)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      // Controls
      controls = new TrackballControls(camera, renderer.domElement)
      controls.update()

      // Window resize
      window.addEventListener('resize', this.onWindowResize, false)
    },
    threeAnimate () {
      requestAnimationFrame(this.threeAnimate)
      controls.update()
      this.threeRender()
    },
    threeAddShapes () {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
    },
    threeRender () {
      renderer.render(scene, camera)
    },
    onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight)
      controls.handleResize();
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
    this.threeInit()
    this.threeAnimate()
    this.threeAddShapes()
    this.threeRender()
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

<style lang="scss">

</style>
