import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Code,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Palette
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const techStack = [
    { icon: <Code className="w-5 h-5" />, name: "Frontend" },
    { icon: <Database className="w-5 h-5" />, name: "Backend" },
    { icon: <Smartphone className="w-5 h-5" />, name: "Mobile" },
    { icon: <Cloud className="w-5 h-5" />, name: "DevOps" },
    { icon: <Palette className="w-5 h-5" />, name: "Design" }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#" },
    { icon: <Mail className="w-5 h-5" />, name: "Email", url: "mailto:hello@example.com" }
  ];

  return (
    <footer className="relative  pt-20 pb-12 overflow-hidden bg-white dark:bg-gray-900 ">
      {/* Floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: Math.random() * 100,
              x: Math.random() * 100,
              opacity: 0
            }}
            animate={{ 
              y: Math.random() * 100 - 50,
              x: Math.random() * 100 - 50,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                BENEDICT
              </span>
            </h3>
            <p className="text-gray-400">
              Full-stack developer crafting exceptional digital experiences with modern technologies and innovative solutions.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all relative"
                >
                  {social.icon}
                  <AnimatePresence>
                    {hoveredIcon === social.name && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        {social.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            <div className="space-y-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="p-1.5 bg-gray-800 rounded-lg text-blue-400">
                    {tech.icon}
                  </div>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((link, i) => (
                <motion.a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to my newsletter for tech insights and project updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-lg hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Benedict. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating tech tags */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        {/* <div className="inline-flex flex-wrap justify-center gap-3 max-w-2xl">
          {['React', 'Next.js', 'Node', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker'].map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
            >
              {tech}
            </motion.span>
          ))}
        </div> */}
      </div>
    </footer>
  );
}