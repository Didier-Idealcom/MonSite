<template>
  <div class="portfolio">
    <h1 ref="h1">Réalisations</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus explicabo, soluta veritatis, obcaecati beatae vero porro, consequuntur quas repudiandae recusandae aliquam sed architecto nihil officia tempora cum hic delectus?</p>

    <div id="threejs">
      <a id="devant" href="javascript:;">devant</a>
      <a id="gauche" href="javascript:;">gauche</a>
      <a id="droite" href="javascript:;">droite</a>
      <a id="derriere" href="javascript:;">derriere</a>
      <div id="webgl"></div>
      <div id="css"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import voieLactee from '@/assets/images/voie_lactee.jpg'

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
const renderer2 = new CSS3DRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

export default {
  name: 'Portfolio',
  methods: {
    buildTimeline () {
      const tl = gsap.timeline()
      tl.fromTo(this.$refs.h1, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      this.timeline = tl
    },
    threeInit () {
      // Camera
      camera.position.set(0, 0, 1)

      // Renderers
      renderer.setClearColor(0xCCCCCC)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.querySelector('#webgl').appendChild(renderer.domElement)

      renderer2.setSize(window.innerWidth, window.innerHeight)
      renderer2.domElement.style.position = 'absolute'
      renderer2.domElement.style.top = 0
      document.querySelector('#css').appendChild(renderer2.domElement)

      // Controls
      controls.rotateSpeed = -0.2
      controls.enableZoom = false
      controls.autoRotate = false
      controls.update()

      this.threeAddShapes()

      // Window resize
      window.addEventListener('resize', this.onWindowResize, false)

      document.querySelector('#devant').addEventListener('click', function (e) {
        camera.lookAt (new THREE.Vector3(0,0,0));
        controls.update()
        renderer.render(scene, camera)
        renderer2.render(scene2, camera)
      })
    },
    threeAnimate () {
      requestAnimationFrame(this.threeAnimate)
      controls.update()
      renderer.render(scene, camera)
      renderer2.render(scene2, camera)
    },
    threeAddShapes () {
      // Sphère
      const sphereGeometry = new THREE.SphereGeometry(50, 32, 32)
      const textureLoader = new THREE.TextureLoader()
      const sphereTexture = textureLoader.load(voieLactee)
      const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture, side: THREE.DoubleSide })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      scene.add(sphere)

      var element1 = document.createElement('div')
      element1.style.color = new THREE.Color(0x00ff00).getStyle()
      element1.style.fontSize = '10px'
      element1.style.background = new THREE.Color(0xff0000).getStyle()
      element1.textContent = 'Devant'

      var element2 = document.createElement('div')
      element2.style.color = new THREE.Color(0x00ff00).getStyle()
      element2.style.fontSize = '10px'
      element2.style.background = new THREE.Color(0xff0000).getStyle()
      element2.textContent = 'Gauche'

      var element3 = document.createElement('div')
      element3.style.color = new THREE.Color(0x00ff00).getStyle()
      element3.style.fontSize = '10px'
      element3.style.background = new THREE.Color(0xff0000).getStyle()
      element3.textContent = 'Droite'

      var element4 = document.createElement('div')
      element4.style.color = new THREE.Color(0x00ff00).getStyle()
      element4.style.fontSize = '10px'
      element4.style.background = new THREE.Color(0xff0000).getStyle()
      element4.textContent = 'Derrière'

      var domObject1 = new CSS3DObject(element1)
      domObject1.position.set(0, 0, -45)

      var domObject2 = new CSS3DObject(element2)
      domObject2.position.set(-45, 0, 0)
      domObject2.rotateY(Math.PI / 2)

      var domObject3 = new CSS3DObject(element3)
      domObject3.position.set(45, 0, 0)
      domObject3.rotateY(Math.PI / 2 * -1)

      var domObject4 = new CSS3DObject(element4)
      domObject4.position.set(0, 0, 45)
      domObject4.rotateY(Math.PI)

      scene2.add(domObject1)
      scene2.add(domObject2)
      scene2.add(domObject3)
      scene2.add(domObject4)

      // Textes
      /* const font_loader = new THREE.FontLoader()
      const text_material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

      font_loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
        const text_geometry1 = new THREE.TextGeometry('Devant', {
          font: font,
          size: 1,
          height: 0.5
        })
        text_geometry1.center()
        const text_mesh1 = new THREE.Mesh(text_geometry1, text_material)
        text_mesh1.position.set(0, 0, -30)

        const text_geometry2 = new THREE.TextGeometry('Gauche', {
          font: font,
          size: 1,
          height: 0.5
        })
        text_geometry2.center()
        const text_mesh2 = new THREE.Mesh(text_geometry2, text_material)
        text_mesh2.position.set(-30, 0, 0)
        text_mesh2.rotateY(Math.PI / 2)

        const text_geometry3 = new THREE.TextGeometry('Droite', {
          font: font,
          size: 1,
          height: 0.5
        })
        text_geometry3.center()
        const text_mesh3 = new THREE.Mesh(text_geometry3, text_material)
        text_mesh3.position.set(30, 0, 0)
        text_mesh3.rotateY(Math.PI / 2 * -1)

        const text_geometry4 = new THREE.TextGeometry('Derriere', {
          font: font,
          size: 1,
          height: 0.5
        })
        text_geometry4.center()
        const text_mesh4 = new THREE.Mesh(text_geometry4, text_material)
        text_mesh4.position.set(0, 0, 30)
        text_mesh4.rotateY(Math.PI)

        scene.add(text_mesh1)
        scene.add(text_mesh2)
        scene.add(text_mesh3)
        scene.add(text_mesh4)
      }) */
    },
    onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer2.setSize(window.innerWidth, window.innerHeight)
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
  canvas {outline: none;}

  #threejs {position: relative; width: 100vw; height: 100vh; margin: 50px 0 0 0;}
  #css, #webgl {position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
  #css {pointer-events: none;}
  #devant {position: absolute; top: 10px; right: 30px; z-index: 10;}
  #gauche {position: absolute; top: 30px; right: 30px; z-index: 10;}
  #droite {position: absolute; top: 50px; right: 30px; z-index: 10;}
  #derriere {position: absolute; top: 70px; right: 30px; z-index: 10;}
</style>
