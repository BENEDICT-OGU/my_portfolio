// import { Canvas, useFrame } from '@react-three/fiber'
// import { Suspense, useRef, useState, useEffect } from 'react'
// import { OrbitControls, Environment, Box, Sphere, Torus, Text } from '@react-three/drei'
// import { motion } from 'framer-motion'

// // Loading Spinner Component
// function LoadingSpinner({ progress = 0 }) {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-16 h-16">
//         <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
//         <div 
//           className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
//           style={{
//             background: `conic-gradient(#3b82f6 ${progress}%, transparent ${progress}%)`
//           }}
//         ></div>
//       </div>
//       <p className="mt-4 text-gray-400">Loading... {progress}%</p>
//     </div>
//   )
// }


// // Placeholder Model Components
// const PlaceholderModels = {
//   dashboard: ({ isActive }) => (
//     <group>
//       <Box args={[1.5, 0.2, 1]} position={[0, 0.5, 0]}>
//         <meshStandardMaterial color={isActive ? "#3b82f6" : "#4b5563"} />
//       </Box>
//       <Box args={[0.3, 0.8, 0.3]} position={[-0.6, -0.2, 0]}>
//         <meshStandardMaterial color={isActive ? "#2563eb" : "#374151"} />
//       </Box>
//       <Box args={[0.3, 0.5, 0.3]} position={[0, -0.35, 0]}>
//         <meshStandardMaterial color={isActive ? "#2563eb" : "#374151"} />
//       </Box>
//       <Box args={[0.3, 0.6, 0.3]} position={[0.6, -0.1, 0]}>
//         <meshStandardMaterial color={isActive ? "#2563eb" : "#374151"} />
//       </Box>
//     </group>
//   ),
//   arApp: ({ isActive }) => (
//     <group>
//       <Box args={[1, 1.8, 0.1]} position={[0, 0, 0]}>
//         <meshStandardMaterial color={isActive ? "#8b5cf6" : "#5b21b6"} />
//       </Box>
//       <Sphere args={[0.2, 16, 16]} position={[0, 0.5, 0.11]}>
//         <meshStandardMaterial color="#ffffff" />
//       </Sphere>
//     </group>
//   ),
//   blockchain: ({ isActive }) => (
//     <group>
//       <Torus args={[0.8, 0.1, 16, 32]} position={[0, 0, 0]}>
//         <meshStandardMaterial color={isActive ? "#10b981" : "#065f46"} />
//       </Torus>
//       <Torus args={[0.5, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[0, 0, Math.PI/3]}>
//         <meshStandardMaterial color={isActive ? "#10b981" : "#065f46"} />
//       </Torus>
//       <Torus args={[0.3, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[0, 0, -Math.PI/3]}>
//         <meshStandardMaterial color={isActive ? "#10b981" : "#065f46"} />
//       </Torus>
//     </group>
//   ),
//   aiPlatform: ({ isActive }) => (
//     <group>
//       <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
//         <meshStandardMaterial color={isActive ? "#f59e0b" : "#92400e"} />
//       </Sphere>
//       <Text
//         position={[0, 0, 0.81]}
//         fontSize={0.3}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         AI
//       </Text>
//     </group>
//   )
// }

// function ProjectModel({ modelType, isActive, ...props }) {
//   const group = useRef()
  
//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += isActive ? 0.01 : 0.002
//     }
//   })

//   const ModelComponent = PlaceholderModels[modelType] || PlaceholderModels.dashboard

//   return (
//     <group ref={group} {...props}>
//       <ModelComponent isActive={isActive} />
//     </group>
//   )
// }

// const projects = [
//   {
//     id: 1,
//     title: "Cosmic Dashboard",
//     description: "Interactive data visualization platform with real-time analytics",
//     tags: ["React", "Three.js", "D3.js"],
//     modelType: "dashboard",
//     color: "bg-blue-500",
//     link: "#",
//     year: "2023"
//   },
//   {
//     id: 2,
//     title: "AR Shopping App",
//     description: "Augmented reality e-commerce experience for mobile devices",
//     tags: ["React Native", "ARKit", "Node.js"],
//     modelType: "arApp",
//     color: "bg-purple-500",
//     link: "#",
//     year: "2022"
//   },
//   {
//     id: 3,
//     title: "Blockchain Explorer",
//     description: "Real-time blockchain data visualization and analytics tool",
//     tags: ["Web3.js", "Ethereum", "GraphQL"],
//     modelType: "blockchain",
//     color: "bg-green-500",
//     link: "#",
//     year: "2023"
//   },
//   {
//     id: 4,
//     title: "AI Content Platform",
//     description: "Next-gen content creation with generative AI",
//     tags: ["Next.js", "OpenAI", "Firebase"],
//     modelType: "aiPlatform",
//     color: "bg-amber-500",
//     link: "#",
//     year: "2024"
//   }
// ]

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState(0)
//   const [isLoading, setIsLoading] = useState(true)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000)
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         const newProgress = prev + Math.floor(Math.random() * 15) + 5
//         return newProgress > 100 ? 100 : newProgress
//       })
//     }, 200)

//     return () => {
//       clearTimeout(timer)
//       clearInterval(interval)
//     }
//   }, [])

//   return (
//     <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden opacity-10">
//         {[...Array(12)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-blue-500"
//             style={{
//               width: `${Math.random() * 300 + 100}px`,
//               height: `${Math.random() * 300 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               filter: 'blur(60px)',
//               opacity: 0.15
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.h2 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
//         >
//           My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="h-96 lg:h-[32rem] relative rounded-xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
//             {isLoading ? (
//               <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
//                 <LoadingSpinner progress={progress} />
//               </div>
//             ) : (
//               <Canvas>
//                 <ambientLight intensity={0.7} />
//                 <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
//                 <pointLight position={[-10, -5, -10]} intensity={0.5} />
                
//                 <Suspense fallback={null}>
//                   {projects.map((project, index) => (
//                     <ProjectModel 
//                       key={project.id}
//                       modelType={project.modelType}
//                       isActive={activeProject === index}
//                       position={[0, 0, 0]}
//                     />
//                   ))}
//                   <Environment preset="city" />
//                 </Suspense>
                
//                 <OrbitControls 
//                   enableZoom={false}
//                   enablePan={false}
//                   autoRotate={false}
//                   maxPolarAngle={Math.PI / 2}
//                   minPolarAngle={Math.PI / 2}
//                 />
//               </Canvas>
//             )}
//           </div>

//           <div className="space-y-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onHoverStart={() => !isLoading && setActiveProject(index)}
//                 onFocus={() => !isLoading && setActiveProject(index)}
//                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeProject === index 
//                     ? `${project.color} bg-opacity-20 border-l-4 border-blue-400 shadow-xl scale-[1.02]`
//                     : 'bg-gray-800 hover:bg-gray-700'
//                 }`}
//               >
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
//                   <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
//                     {project.year}
//                   </span>
//                 </div>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, tagIndex) => (
//                     <motion.span 
//                       key={tagIndex}
//                       whileHover={{ scale: 1.05 }}
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         activeProject === index 
//                           ? 'bg-blue-900 text-blue-100' 
//                           : 'bg-gray-700 text-gray-200'
//                       }`}
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>
//                 <motion.a
//                   href={project.link}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${
//                     activeProject === index
//                       ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                       : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
//                   }`}
//                 >
//                   View Project
//                 </motion.a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Code, Gamepad2, Paintbrush, Database, Smartphone, X, ArrowRight,
  Server as ServerIcon, Zap, Flag, Puzzle, Keyboard, Trophy, Sparkles,
  Type, Cpu, Bug, Lock, Check, RotateCw, Clock, Music, Settings, 
  Award, Gift, Shield, Star, Heart, Smile, Frown, Meh, Battery,
  Camera, Compass, Download, Upload, Wifi, Bluetooth, Volume2,
  Mic, Video, Image, Headphones, Airplay, Cast, Monitor, Tablet,
  Smartphone as Phone, Watch, Anchor, Archive, AtSign, BarChart2,
  Bell, Bookmark, Calendar, CameraOff, Cloud, Coffee, CreditCard,
  Crop, DollarSign, DownloadCloud, Eye, Film, Filter, Flag as FlagIcon,
  Folder, Hash, Home, Inbox, Layers, Link, List, Loader, Mail,
  Map, Maximize, Minimize, Moon, Paperclip, PieChart, Printer,
  Radio, RefreshCw, Save, Scissors, Send, Share2, Shuffle,
  SkipBack, SkipForward, Sliders, Speaker, Tag, Target, ThumbsUp,
  Trash, TrendingUp, Umbrella, User, Volume, Wind, ZoomIn, ZoomOut
} from 'lucide-react';
import Exclusive from "../assets/images/exclusive.png";
import Chain from "../assets/images/chain.png";
import Cosmic from "../assets/images/cosmic.png";

// Project data with categories and tech stacks
const projectsData = [
  {
    id: 1,
    title: "Cosmic Dashboard",
    description: "Real-time analytics platform with 3D data visualization",
    category: "web",
    tech: ["React", "Three.js", "D3.js", "Node.js"],
    image: Cosmic,
    liveUrl: "https://cosmic-dashboard-eight.vercel.app/",
    codeUrl: "https://github.com/BENEDICT-OGU/cosmic-dashboard",
  },
  {
    id: 2,
    title: "AR Shopping App",
    description: "Augmented reality e-commerce experience for mobile",
    category: "mobile",
    tech: ["React Native", "ARKit", "Firebase"],
    image: Exclusive,
    liveUrl: "https://exclusivestore-sle3.vercel.app/",
    codeUrl: "https://github.com/BENEDICT-OGU/exclusivestore",
  },
  {
    id: 3,
    title: "Blockchain Explorer",
    description: "Interactive visualization of blockchain transactions",
    category: "web",
    tech: ["Web3.js", "Ethereum", "GraphQL"],
    image: Chain,
    liveUrl: "https://chain-sage-omega.vercel.app/",
    codeUrl: "https://github.com/BENEDICT-OGU/chain-sage"
  },
  {
    id: 4,
    title: "AI Content Platform",
    description: "Next-gen content creation with generative AI",
    category: "web",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    image: "/ai-platform.jpg",
    liveUrl: "#",
    codeUrl: "#",
    
  },
  {
    id: 5,
    title: "Fitness Game",
    description: "Motion-controlled fitness game with React Native",
    category: "mobile",
    tech: ["React Native", "TensorFlow.js", "MongoDB"],
    image: "/fitness-game.jpg",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "DevOps Dashboard",
    description: "Centralized monitoring for cloud infrastructure",
    category: "devops",
    tech: ["AWS", "Docker", "Kubernetes", "React"],
    image: "/devops-dashboard.jpg",
    liveUrl: "#",
    codeUrl: "#"
  }
];

// Game types
const GAME_TYPES = {
  BUG_HUNTER: 'bug_hunter',
  CODE_TYPING: 'code_typing',
  MEMORY_MATCH: 'memory_match',
  PUZZLE_SOLVER: 'puzzle_solver',
  REACTION_TEST: 'reaction_test',
  CODE_MAZE: 'code_maze',
  DEV_QUIZ: 'dev_quiz',
  PIXEL_ART: 'pixel_art',
  MUSIC_SYNTH: 'music_synth',
  AI_CHALLENGE: 'ai_challenge',
  VR_EXPLORER: 'vr_explorer',
  BLOCKCHAIN_SIM: 'blockchain_sim',
  ALGORITHM_RACE: 'algorithm_race',
  NETWORK_DEFENSE: 'network_defense',
  DATA_VIS: 'data_vis',
  CLOUD_ARCHITECT: 'cloud_architect',
  UI_DESIGNER: 'ui_designer',
  API_CONNECTOR: 'api_connector',
  SECURITY_CTF: 'security_ctf',
  DEBUGGING_RUSH: 'debugging_rush'
};

// Achievement system
const achievements = [
  { id: 1, name: "Code Wizard", icon: Code, unlocked: true },
  { id: 2, name: "UI Artisan", icon: Paintbrush, unlocked: true },
  { id: 3, name: "Database Guru", icon: Database, unlocked: false },
  { id: 4, name: "Full Stack Champion", icon: ServerIcon, unlocked: false },
  { id: 5, name: "Bug Hunter", icon: Bug, unlocked: false },
  { id: 6, name: "Speed Coder", icon: Keyboard, unlocked: false },
  { id: 7, name: "Puzzle Master", icon: Puzzle, unlocked: false },
  { id: 8, name: "Game Champion", icon: Trophy, unlocked: false },
  { id: 9, name: "Reaction Pro", icon: Zap, unlocked: false },
  { id: 10, name: "Maze Runner", icon: Flag, unlocked: false },
  { id: 11, name: "Quiz Expert", icon: Type, unlocked: false },
  { id: 12, name: "Pixel Artist", icon: Image, unlocked: false },
  { id: 13, name: "Music Maestro", icon: Music, unlocked: false },
  { id: 14, name: "AI Specialist", icon: Sparkles, unlocked: false },
  { id: 15, name: "VR Explorer", icon: Airplay, unlocked: false },
  { id: 16, name: "Blockchain Pro", icon: Shield, unlocked: false },
  { id: 17, name: "Algorithm Ace", icon: BarChart2, unlocked: false },
  { id: 18, name: "Security Expert", icon: Lock, unlocked: false },
  { id: 19, name: "Data Visualizer", icon: PieChart, unlocked: false },
  { id: 20, name: "Cloud Architect", icon: Cloud, unlocked: false }
];

// Game data
const gamesData = [
  {
    id: 1,
    title: "Bug Hunter",
    description: "Find and squash bugs in the code",
    icon: Bug,
    type: GAME_TYPES.BUG_HUNTER,
    difficulty: "Easy",
    achievements: [5]
  },
  {
    id: 2,
    title: "Code Typing Challenge",
    description: "Type code snippets as fast as you can",
    icon: Keyboard,
    type: GAME_TYPES.CODE_TYPING,
    difficulty: "Medium",
    achievements: [6]
  },
  {
    id: 3,
    title: "Memory Match",
    description: "Match programming concepts",
    icon: Cpu,
    type: GAME_TYPES.MEMORY_MATCH,
    difficulty: "Easy",
    achievements: [7]
  },
  {
    id: 4,
    title: "Puzzle Solver",
    description: "Solve coding puzzles",
    icon: Puzzle,
    type: GAME_TYPES.PUZZLE_SOLVER,
    difficulty: "Hard",
    achievements: [7]
  },
  {
    id: 5,
    title: "Reaction Test",
    description: "Test your reaction time to coding errors",
    icon: Zap,
    type: GAME_TYPES.REACTION_TEST,
    difficulty: "Medium",
    achievements: [9]
  },
  {
    id: 6,
    title: "Code Maze",
    description: "Navigate through a maze of code blocks",
    icon: Flag,
    type: GAME_TYPES.CODE_MAZE,
    difficulty: "Medium",
    achievements: [10]
  },
  {
    id: 7,
    title: "Developer Quiz",
    description: "Test your programming knowledge",
    icon: Type,
    type: GAME_TYPES.DEV_QUIZ,
    difficulty: "Medium",
    achievements: [11]
  },
  {
    id: 8,
    title: "Pixel Art Designer",
    description: "Create pixel art with CSS",
    icon: Image,
    type: GAME_TYPES.PIXEL_ART,
    difficulty: "Easy",
    achievements: [12]
  },
  {
    id: 9,
    title: "Music Synthesizer",
    description: "Create music with code",
    icon: Music,
    type: GAME_TYPES.MUSIC_SYNTH,
    difficulty: "Hard",
    achievements: [13]
  },
  {
    id: 10,
    title: "AI Challenge",
    description: "Train a simple AI model",
    icon: Sparkles,
    type: GAME_TYPES.AI_CHALLENGE,
    difficulty: "Hard",
    achievements: [14]
  },
  {
    id: 11,
    title: "VR Explorer",
    description: "Navigate a 3D code environment",
    icon: Airplay,
    type: GAME_TYPES.VR_EXPLORER,
    difficulty: "Medium",
    achievements: [15]
  },
  {
    id: 12,
    title: "Blockchain Simulator",
    description: "Build and mine blocks",
    icon: Shield,
    type: GAME_TYPES.BLOCKCHAIN_SIM,
    difficulty: "Hard",
    achievements: [16]
  },
  {
    id: 13,
    title: "Algorithm Race",
    description: "Optimize algorithms for speed",
    icon: BarChart2,
    type: GAME_TYPES.ALGORITHM_RACE,
    difficulty: "Hard",
    achievements: [17]
  },
  {
    id: 14,
    title: "Network Defense",
    description: "Protect your server from attacks",
    icon: Lock,
    type: GAME_TYPES.NETWORK_DEFENSE,
    difficulty: "Medium",
    achievements: [18]
  },
  {
    id: 15,
    title: "Data Visualization",
    description: "Create interactive data charts",
    icon: PieChart,
    type: GAME_TYPES.DATA_VIS,
    difficulty: "Medium",
    achievements: [19]
  },
  {
    id: 16,
    title: "Cloud Architect",
    description: "Design cloud infrastructure",
    icon: Cloud,
    type: GAME_TYPES.CLOUD_ARCHITECT,
    difficulty: "Hard",
    achievements: [20]
  },
  {
    id: 17,
    title: "UI Designer",
    description: "Create beautiful user interfaces",
    icon: Monitor,
    type: GAME_TYPES.UI_DESIGNER,
    difficulty: "Easy",
    achievements: [2]
  },
  {
    id: 18,
    title: "API Connector",
    description: "Connect APIs in the fastest time",
    icon: Link,
    type: GAME_TYPES.API_CONNECTOR,
    difficulty: "Medium",
    achievements: [1]
  },
  {
    id: 19,
    title: "Security CTF",
    description: "Capture the flag security challenge",
    icon: FlagIcon,
    type: GAME_TYPES.SECURITY_CTF,
    difficulty: "Hard",
    achievements: [18]
  },
  {
    id: 20,
    title: "Debugging Rush",
    description: "Find and fix bugs against the clock",
    icon: RotateCw,
    type: GAME_TYPES.DEBUGGING_RUSH,
    difficulty: "Medium",
    achievements: [5, 9]
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameState, setGameState] = useState({});
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Filter projects
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Game functions
  const startGame = (game) => {
    setSelectedGame(game);
    setGameScore(0);
    setGameState({});
    setShowGame(true);
  };

  const endGame = () => {
    // Check for achievements
    const newAchievements = selectedGame.achievements.filter(achId => 
      !unlockedAchievements.includes(achId) && 
      !achievements.find(a => a.id === achId)?.unlocked
    );
    
    if (newAchievements.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
    }
    
    setShowGame(false);
  };

  // Bug Hunter Game
  const catchBug = useCallback(() => {
    setGameScore(prev => prev + 10);
    // Spawn new bug
    if (Math.random() > 0.7) {
      setTimeout(() => {
        setGameState(prev => ({ ...prev, bugSpawned: true }));
      }, 500);
    }
  }, []);

  // Code Typing Game
  const [codeSnippet, setCodeSnippet] = useState("");
  const [userInput, setUserInput] = useState("");
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingTime, setTypingTime] = useState(0);

  const codeSnippets = [
    "const greet = (name) => `Hello ${name}!`;",
    "function sum(a, b) { return a + b; }",
    "const users = users.map(user => ({ ...user, active: true }));",
    "class Component extends React.Component { render() { return <div>Hello</div>; } }",
    "async function fetchData() { const res = await fetch(url); return res.json(); }"
  ];

  const startTypingGame = useCallback(() => {
    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setCodeSnippet(snippet);
    setUserInput("");
    setTypingStarted(false);
    setTypingTime(0);
    setGameScore(0);
  }, []);

  const handleTypingInput = useCallback((e) => {
    if (!typingStarted) {
      setTypingStarted(true);
      const timer = setInterval(() => {
        setTypingTime(prev => prev + 10);
      }, 10);
      return () => clearInterval(timer);
    }
    
    setUserInput(e.target.value);
    if (e.target.value === codeSnippet) {
      const score = Math.max(1000 - typingTime, 100);
      setGameScore(prev => prev + score);
      startTypingGame();
    }
  }, [codeSnippet, typingStarted, typingTime, startTypingGame]);

  // Memory Match Game
  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const techIcons = [
    { name: "React", icon: <Code /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "Node.js", icon: <Database /> },
    { name: "Python", icon: <Code /> },
    { name: "HTML", icon: <Code /> },
    { name: "CSS", icon: <Paintbrush /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "SQL", icon: <Database /> }
  ];

  const initializeMemoryGame = useCallback(() => {
    const cards = [...techIcons, ...techIcons]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    
    setMemoryCards(cards);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameScore(0);
  }, []);

  const handleCardClick = useCallback((id) => {
    // Don't allow flipping if 2 cards are already flipped or card is already matched
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;
    
    setFlippedCards(prev => [...prev, id]);
    
    // Check for match if 2 cards are flipped
    if (flippedCards.length === 1) {
      const firstCard = memoryCards.find(card => card.id === flippedCards[0]);
      const secondCard = memoryCards.find(card => card.id === id);
      
      if (firstCard.name === secondCard.name) {
        setMatchedCards(prev => [...prev, flippedCards[0], id]);
        setGameScore(prev => prev + 100);
        
        // Check if all cards are matched
        if (matchedCards.length + 2 === memoryCards.length) {
          setGameScore(prev => prev + 500); // Bonus for completing the game
        }
      } else {
        setTimeout(() => {
          setFlippedCards(prev => prev.filter(cardId => cardId !== flippedCards[0] && cardId !== id));
        }, 1000);
      }
    }
  }, [flippedCards, memoryCards, matchedCards]);

  // Puzzle Solver Game
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [puzzleGrid, setPuzzleGrid] = useState([]);

  const initializePuzzleGame = useCallback(() => {
    const pieces = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      content: `Puzzle ${i + 1}`,
      correctPosition: i
    })).sort(() => Math.random() - 0.5);
    
    setPuzzlePieces(pieces);
    setPuzzleGrid(Array(9).fill(null));
    setGameScore(0);
  }, []);

  const handlePuzzleDragStart = useCallback((e, piece) => {
    e.dataTransfer.setData("puzzleId", piece.id);
  }, []);

  const handlePuzzleDrop = useCallback((e, position) => {
    const pieceId = e.dataTransfer.getData("puzzleId");
    const piece = puzzlePieces.find(p => p.id === Number(pieceId));
    
    if (piece) {
      // Check if correct position
      if (piece.correctPosition === position) {
        setGameScore(prev => prev + 50);
      }
      
      // Update grid
      const newGrid = [...puzzleGrid];
      newGrid[position] = piece;
      setPuzzleGrid(newGrid);
      
      // Remove from pieces
      setPuzzlePieces(prev => prev.filter(p => p.id !== piece.id));
    }
  }, [puzzlePieces, puzzleGrid]);

  const handlePuzzleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  // Render the selected game
  const renderGame = () => {
    if (!selectedGame) return null;

    switch(selectedGame.type) {
      case GAME_TYPES.BUG_HUNTER:
        return (
          <div className="space-y-6">
            <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i}
                    className="border border-gray-200 dark:border-gray-600 relative"
                    onClick={() => catchBug()}
                  >
                    {Math.random() > 0.8 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1], rotate: [0, 360] }}
                        className="absolute inset-0 flex items-center justify-center text-red-500 text-2xl cursor-pointer"
                      >
                        🐛
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold text-blue-500">{gameScore}</p>
              </div>
              <button
                onClick={() => setGameScore(0)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
              >
                Reset
              </button>
            </div>
          </div>
        );
      
      case GAME_TYPES.CODE_TYPING:
        return (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                {codeSnippet}
              </pre>
            </div>
            <textarea
              value={userInput}
              onChange={handleTypingInput}
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono"
              placeholder="Start typing the code above..."
              rows={4}
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold text-blue-500">{gameScore}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Time</p>
                <p className="text-xl font-bold text-purple-500">
                  {(typingTime / 1000).toFixed(2)}s
                </p>
              </div>
              <button
                onClick={startTypingGame}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
              >
                New Code
              </button>
            </div>
          </div>
        );
      
      case GAME_TYPES.MEMORY_MATCH:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3">
              {memoryCards.map(card => (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCardClick(card.id)}
                  className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer text-xl ${
                    flippedCards.includes(card.id) || matchedCards.includes(card.id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? (
                    card.icon
                  ) : (
                    "?"
                  )}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold text-blue-500">{gameScore}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Matches</p>
                <p className="text-xl font-bold text-purple-500">
                  {matchedCards.length / 2} / {techIcons.length}
                </p>
              </div>
              <button
                onClick={initializeMemoryGame}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
              >
                Reset
              </button>
            </div>
          </div>
        );
      
      case GAME_TYPES.PUZZLE_SOLVER:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {Array(9).fill().map((_, i) => (
                <div
                  key={`grid-${i}`}
                  onDrop={(e) => handlePuzzleDrop(e, i)}
                  onDragOver={handlePuzzleDragOver}
                  className="aspect-square border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center"
                >
                  {puzzleGrid[i] && (
                    <div className="p-2 bg-blue-500 text-white rounded">
                      {puzzleGrid[i].content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {puzzlePieces.map(piece => (
                <motion.div
                  key={piece.id}
                  draggable
                  onDragStart={(e) => handlePuzzleDragStart(e, piece)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center cursor-move"
                >
                  {piece.content}
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold text-blue-500">{gameScore}</p>
              </div>
              <button
                onClick={initializePuzzleGame}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
              >
                Reset
              </button>
            </div>
          </div>
        );
      
      // Additional games would be implemented here...
      default:
        return (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">Game coming soon!</p>
          </div>
        );
    }
  };

  // Initialize games when selected
  useEffect(() => {
    if (selectedGame) {
      switch(selectedGame.type) {
        case GAME_TYPES.CODE_TYPING:
          startTypingGame();
          break;
        case GAME_TYPES.MEMORY_MATCH:
          initializeMemoryGame();
          break;
        case GAME_TYPES.PUZZLE_SOLVER:
          initializePuzzleGame();
          break;
        default:
          break;
      }
    }
  }, [selectedGame, startTypingGame, initializeMemoryGame, initializePuzzleGame]);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-20"
      >
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              opacity: 0.15
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-500 uppercase"
          >
            My Creations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"
          >
            Project Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Explore my work - each project is a unique solution crafted with cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Interactive filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["all", "web", "mobile", "devops"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
              {filter === "web" && <Code className="inline ml-1 w-4 h-4" />}
              {filter === "mobile" && <Smartphone className="inline ml-1 w-4 h-4" />}
              {filter === "devops" && <Database className="inline ml-1 w-4 h-4" />}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Game-inspired achievements panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Developer Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock badges by playing games and exploring projects!
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedGame(gamesData[0]);
                  setShowGame(true);
                }}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 transition-all"
              >
                <Gamepad2 className="w-5 h-5" />
                Quick Play
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.unlocked || unlockedAchievements.includes(achievement.id)
                    ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md" 
                    : "border-gray-200 dark:border-gray-700 opacity-70"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto ${
                  achievement.unlocked || unlockedAchievements.includes(achievement.id)
                    ? "bg-blue-100 dark:bg-blue-800 text-blue-500 dark:text-blue-400" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                }`}>
                  {achievement.icon && <achievement.icon className="w-5 h-5" />}
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white text-center">
                  {achievement.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {achievement.unlocked || unlockedAchievements.includes(achievement.id) 
                    ? "Unlocked!" 
                    : "Locked"}
                </p>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Choose a Game
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gamesData.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startGame(game)}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 flex items-center justify-center mb-3">
                  {game.icon && <game.icon className="w-5 h-5" />}
                </div>
                <h5 className="font-bold text-gray-800 dark:text-white">{game.title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{game.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  game.difficulty === "Easy" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : game.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {game.difficulty}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[1000000] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={selectedProject.liveUrl}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 transition-all"
                  >
                    view project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href={selectedProject.codeUrl}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full font-medium flex items-center gap-2 transition-all"
                  >
                    View Code
                    <Code className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Modal */}
      <AnimatePresence>
        {showGame && selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100000] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 flex items-center justify-center">
                    {selectedGame.icon && <selectedGame.icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedGame.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={endGame}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedGame.description}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                  selectedGame.difficulty === "Easy" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : selectedGame.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {selectedGame.difficulty}
                </span>
              </div>
              
              {renderGame()}
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Unlockable Achievements
                </h4>
                <div className="flex gap-2">
                  {selectedGame.achievements.map(achId => {
                    const achievement = achievements.find(a => a.id === achId);
                    return (
                      <div 
                        key={achId} 
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                          unlockedAchievements.includes(achId) || achievement?.unlocked
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {achievement?.icon && <achievement.icon className="w-4 h-4" />}
                        {achievement?.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}