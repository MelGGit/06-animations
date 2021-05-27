import "./style.css"
import * as THREE from "three"
import gsap from "gsap"

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()

// let time = Date.now()

// Animations
// function requestAnimationFrame() is used to call a function on the next frame
const tick = () => {
  // One way to animate and not depend on framerate
  // Time to not depend on framerate of user pc
  // evaluate this against the previous timestamp to get the delta
  //   const currentTime = Date.now()
  //   const deltaTime = currentTime - time
  //   time = currentTime

  // Clock
  // starts at 0 and each second gets increased by 1
  // 0,1,2,3,4
  const elapsedTime = clock.getElapsedTime()

  // Update Objects
  camera.position.y = Math.sin(elapsedTime)
  camera.position.x = Math.cos(elapsedTime)
  camera.lookAt(mesh.position)

  // Render after each new update
  renderer.render(scene, camera)

  // calls function tick every next frame
  window.requestAnimationFrame(tick)
}

tick()
