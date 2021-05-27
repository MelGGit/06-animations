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
// const clock = new THREE.Clock()

// Use gsap for moving you move the position of the mesh
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 })
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 })

// Animations
// function requestAnimationFrame() is used to call a function on the next frame
const tick = () => {
  // Clock
  // starts at 0 and each second gets increased by 1
  // 0,1,2,3,4
  //   const elapsedTime = clock.getElapsedTime()

  // Update Objects
  //   camera.position.y = Math.sin(elapsedTime)
  //   camera.position.x = Math.cos(elapsedTime)
  //   camera.lookAt(mesh.position)

  // Render after each new update
  renderer.render(scene, camera)

  // calls function tick every next frame
  window.requestAnimationFrame(tick)
}

tick()
