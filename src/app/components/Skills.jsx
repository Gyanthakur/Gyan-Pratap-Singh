

'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaGitkraken } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="light:text-red-600 dark:text-black" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Gitkraken', icon: <FaGitkraken className="text-green-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-yellow-600" /> },
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen light:bg-white dark:bg-black light:text-black dark:text-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">🚀 My Tech Stack</h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
              <div className="bg-black/5 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 shadow-xl transition hover:shadow-cyan-500/30">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
