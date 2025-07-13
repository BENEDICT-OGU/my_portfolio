import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Code, Database, Cpu, Palette, Smartphone, Server, GitBranch, Cloud, Rocket, CpuIcon } from 'lucide-react'
import Profile from "../assets/images/image.png"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('about')

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Rocket className="w-5 h-5" /> },
    { value: '50+', label: 'Projects Completed', icon: <Code className="w-5 h-5" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Cpu className="w-5 h-5" /> },
    { value: 'Full', label: 'Stack Mastery', icon: <Server className="w-5 h-5" /> }
  ]

  const timeline = [
    {
      year: '2023-Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading cross-functional teams in building scalable web applications with React, Node.js, and cloud infrastructure.'
    },
    {
      year: '2020-2023',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Developed and maintained enterprise applications using modern JavaScript frameworks and RESTful APIs.'
    },
    {
      year: '2018-2020',
      title: 'Frontend Developer',
      company: 'Web Craft Studios',
      description: 'Created responsive user interfaces and implemented design systems for various clients.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-500 uppercase"
          >
            Get To Know Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"
          >
            About <span className="text-gray-800 dark:text-white">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Crafting digital experiences that blend innovation with impeccable functionality.
          </motion.p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {['about', 'journey', 'skills'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src={Profile}
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">Available for work</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            {['React', 'TS', 'Node', 'Py', 'AWS'].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 1],
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50
                } : {}}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: Math.random() * 3,
                  ease: 'linear'
                }}
                className="absolute text-xl font-bold bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Content Based on Active Tab */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.h3 
                    className="text-3xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    The Developer Behind the Code
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    I'm Benedict, a passionate full-stack developer with 5+ years of experience crafting exceptional digital experiences. My journey in tech has taken me from frontend aesthetics to backend architecture, giving me a holistic understanding of web development.
                  </motion.p>
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or mentoring aspiring developers. I believe in writing clean, maintainable code that stands the test of time.
                  </motion.p>

                  {/* Stats Grid */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-2 gap-4 mt-8"
                  >
                    {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-500 dark:text-blue-400">
                            {stat.icon}
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'journey' && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <motion.h3 
                    className="text-3xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    My Professional Journey
                  </motion.h3>
                  
                  <div className="space-y-6">
                    {timeline.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * i }}
                        className="relative pl-8 border-l-2 border-blue-400/20"
                      >
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                        <p className="text-sm text-blue-500 mb-1">{item.year}</p>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-blue-400 font-medium mb-2">{item.company}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.h3 
                    className="text-3xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    My Technical Arsenal
                  </motion.h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS' },
                      { name: 'Backend', skills: 'Node.js, Express, Python, Django' },
                      { name: 'Database', skills: 'MongoDB, PostgreSQL, Firebase' },
                      { name: 'DevOps', skills: 'Docker, AWS, CI/CD, Kubernetes' },
                      { name: 'Mobile', skills: 'React Native, Flutter' },
                    ].map((category, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <h4 className="font-bold text-gray-800 dark:text-white mb-2">{category.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{category.skills}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}