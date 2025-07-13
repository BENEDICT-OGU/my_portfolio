// src/components/ParticleCursor.jsx
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleCursor() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(50, 50)
    mountRef.current.appendChild(renderer.domElement)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    
    const posArray = new Float32Array(particlesCount * 3)
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 2

    // Animation
    let mouseX = 0
    let mouseY = 0

    const animate = () => {
      requestAnimationFrame(animate)
      
      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001
      
      particlesMesh.position.x += (mouseX * 2 - particlesMesh.position.x) * 0.1
      particlesMesh.position.y += (-mouseY * 2 - particlesMesh.position.y) * 0.1
      
      renderer.render(scene, camera)
    }
    animate()

    // Mouse move
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5
      mouseY = (e.clientY / window.innerHeight) - 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}