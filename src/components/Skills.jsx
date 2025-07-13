import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Code, Database, Cpu, Palette, Smartphone, Server, GitBranch, Cloud } from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js', level: 80 }
    ],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'GraphQL', level: 85 }
    ],
    color: 'from-amber-500 to-orange-500'
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'MySQL', level: 80 }
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'NGINX', level: 75 }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'Swift', level: 65 },
      { name: 'Kotlin', level: 70 },
      { name: 'Expo', level: 80 }
    ],
    color: 'from-pink-500 to-rose-500'
  },
  {
    category: 'Other',
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'REST APIs', level: 90 },
      { name: 'Jest', level: 85 },
      { name: 'Webpack', level: 80 },
      { name: 'Figma', level: 75 }
    ],
    color: 'from-violet-500 to-fuchsia-500'
  }
]

const SkillBar = ({ level }) => {
  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.3, type: 'spring' }}
        className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full`}
      />
    </div>
  )
}

const SkillCard = ({ category, icon, skills, color }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl p-6 shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 transition-all duration-300`}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
          />
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-xs font-bold text-blue-500">{skill.level}%</span>
            </div>
            <SkillBar level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('All')

  const tabs = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Mobile', 'Other']

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
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
            My Technical Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Mastering the full spectrum of web development with cutting-edge technologies and modern best practices.
          </motion.p>
        </motion.div>

        {/* Animated Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData
            .filter((skill) => activeTab === 'All' || skill.category === activeTab)
            .map((skill) => (
              <SkillCard key={skill.category} {...skill} />
            ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['React', 'Node', 'TS', 'Py', 'DB', 'AWS'].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [100, -100],
                x: Math.random() * 200 - 100
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'loop',
                delay: Math.random() * 5,
                ease: 'linear'
              }}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}