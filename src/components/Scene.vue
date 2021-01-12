<template>
  <div class="scene">
    <div id="three-scene-canvas"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let sceneCanvas, scene, camera, renderer, controls

export default {
  name: 'Scene',
  mounted () {
    sceneCanvas = document.getElementById('three-scene-canvas')
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
      75,
      sceneCanvas.getBoundingClientRect().width / sceneCanvas.getBoundingClientRect().height,
      0.1,
      1000
    )
    camera.position.set(15, 5, 15)

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.outputEncoding = THREE.sRGBEncoding
    controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', this.animateThreeJs)
    renderer.setSize(sceneCanvas.offsetWidth, sceneCanvas.offsetHeight)
    renderer.setClearColor('#212121')
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.shadowMapSoft = true
    renderer.shadowMap.autoUpdate = false
    renderer.shadowMap.needsUpdate = true
    sceneCanvas.append(renderer.domElement)

    // lighting
    const ambientLight = new THREE.AmbientLight(0xdaccff, 0.5)
    scene.add(ambientLight)
    const light = new THREE.PointLight(0xfc831d, 1, 100)
    light.position.set(15, 10, 15)
    light.castShadow = true
    light.shadow.radius = 1
    light.shadow.mapSize.width = 2048
    light.shadow.mapSize.height = 2048
    scene.add(light)
    // Adding a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    this.animateThreeJs()

    window.addEventListener('resize', () => {
      this.resizeCanvas()
    })
  },
  methods: {
    animateThreeJs () {
      renderer.render(scene, camera)
      renderer.shadowMap.needsUpdate = true
    },

    resizeCanvas () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      this.animateThreeJs()
    }
  }
}
</script>

<style lang="scss">
  #three-scene-canvas {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>
