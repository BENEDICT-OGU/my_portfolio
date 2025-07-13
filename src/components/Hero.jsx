import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Text, OrbitControls } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, MousePointerClick, Sparkles, Code, Paintbrush, Smartphone } from 'lucide-react'

function Starfield(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 2.5 }))
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12
    ref.current.rotation.y -= delta / 18
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial 
          transparent
          color="#3b82f6"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

function FloatingTechIcons() {
  const techIcons = [
    { icon: <Code size={24} />, color: 'text-blue-400' },
    { icon: <Paintbrush size={24} />, color: 'text-purple-400' },
    { icon: <Smartphone size={24} />, color: 'text-green-400' },
    { icon: <Sparkles size={24} />, color: 'text-yellow-400' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const duration = Math.random() * 15 + 15
        const delay = Math.random() * 5
        const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)]

        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: Math.random() * 0.8 + 0.4,
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: delay
            }}
            className={`absolute text-2xl ${IconComponent.color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {IconComponent.icon}
          </motion.div>
        )
      })}
    </div>
  )
}

function InteractiveParticles() {
  const particles = useRef([])
  const containerRef = useRef()

  useEffect(() => {
    particles.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.2 + 0.1
    }))

    const moveParticles = () => {
      particles.current = particles.current.map(p => ({
        ...p,
        y: (p.y + p.speed) % 100
      }))
    }

    const interval = setInterval(moveParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {particles.current.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400 opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  )
}

function AnimatedGradientBorder() {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }}
      className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden z-0"
      style={{
        background: 'linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
        backgroundSize: '400% 400%',
        mask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
        maskComposite: 'exclude',
        padding: '2px',
        opacity: 0.3
      }}
    />
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef()
  const [showParticles, setShowParticles] = useState(false)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    setMousePosition({ x, y })
  }

  useEffect(() => {
    setShowParticles(true)
  }, [])

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white"
    >
      {/* 3D Starfield Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Canvas camera={{ position: [0, 0, 1.5] }}>
          <Starfield />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={1.5}
            enableZoom={false} 
          />
        </Canvas>
      </div>

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Interactive Particles */}
      {showParticles && <InteractiveParticles />}

      {/* Animated Gradient Border */}
      <AnimatedGradientBorder />

      {/* Floating UI Elements */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: mousePosition.x * 20,
              y: mousePosition.y * 20
            }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)'
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="absolute -inset-8 blur-xl rounded-full"
            />
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 relative">
              Hello, I'm Benedict
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mt-4 text-blue-300"
            >
              Crafting digital experiences that matter
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl md:text-4xl mb-12 h-16 text-blue-300"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1500,
                'UI/UX Specialist',
                1500,
                'Tech Innovator',
                1500,
                'Creative Problem Solver',
                1500,
                'Digital Craftsman',
                1500,
                'Code Architect',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Let's Collaborate
              </span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.2 }}
                className="absolute inset-0 bg-white/20"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-xl font-medium transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Code size={20} />
                View My Work
              </span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.1 }}
                className="absolute inset-0 bg-blue-400/10"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 mx-auto w-full max-w-4xl px-6 z-20"
      >
        <div className="grid grid-cols-3 gap-4 backdrop-blur-sm bg-gray-900/50 rounded-xl p-4 border border-gray-800">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold text-blue-400 mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
            className="w-10 h-16 border-2 border-blue-400 rounded-full flex justify-center items-end pb-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-4 bg-blue-400 rounded-full mb-1"
            />
          </motion.div>
          {/* <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center mt-2 gap-2 text-blue-400"
          >
            <MousePointerClick size={16} />
            <span className="text-sm">Scroll Down</span>
          </motion.div> */}
        </div>
      </motion.div>
    </motion.section>
  )
}