// 'use client'

// import { motion } from 'framer-motion'
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// const projects = [
//   {
//     title: 'E-Learning Website',
//     description: 'A platform to learn courses through curated YouTube videos. Built with HTML, CSS, JS.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/TanviCodesEveryday/e-learning',
//     demo: 'https://your-elearning-site.vercel.app',
//   },
//   {
//     title: 'Job Portal App',
//     description:
//       'A full-stack job portal using Next.js, MongoDB, Clerk, Supabase, and Tailwind. Supports auth and job listings.',
//     tech: ['Next.js', 'MongoDB', 'Tailwind', 'Clerk'],
//     github: 'https://github.com/TanviCodesEveryday/job-portal',
//     demo: 'https://job-portal-app.vercel.app',
//   },
//   {
//     title: 'Text Utils',
//     description:
//       'A React-based app to transform and analyze text: convert case, count words, clear/copy text, etc.',
//     tech: ['React', 'JavaScript', 'CSS'],
//     github: 'https://github.com/TanviCodesEveryday/text-utils',
//     demo: 'https://text-utils-app.vercel.app',
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen bg-black text-white py-16 px-4">
//       <h1 className="text-4xl font-bold text-center mb-12">Projects I've Built</h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -10, scale: 1.02 }}
//             className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-6 space-y-4 flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//               <p className="text-gray-300 text-sm">{project.description}</p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-2 py-1 text-xs rounded bg-white/20 text-cyan-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center gap-4 pt-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-sm text-white hover:text-cyan-400 transition"
//               >
//                 <FaGithub /> Code
//               </a>
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition"
//               >
//                 <FaExternalLinkAlt /> Live
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Learning Website',
    description: 'A platform to learn courses through curated YouTube videos. Built with HTML, CSS, JS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TanviCodesEveryday/e-learning',
    demo: 'https://your-elearning-site.vercel.app',
  },
  {
    title: 'Job Portal App',
    description:
      'A full-stack job portal using Next.js, MongoDB, Clerk, Supabase, and Tailwind. Supports auth and job listings.',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'Clerk'],
    github: 'https://github.com/TanviCodesEveryday/job-portal',
    demo: 'https://job-portal-app.vercel.app',
  },
  {
    title: 'Text Utils',
    description:
      'A React-based app to transform and analyze text: convert case, count words, clear/copy text, etc.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/TanviCodesEveryday/text-utils',
    demo: 'https://text-utils-app.vercel.app',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 light:bg-white dark:bg-black light:text-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-12">Projects I've Built</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.02 }}
            className="rounded-xl border p-6 space-y-4 flex flex-col justify-between
                      light:bg-black/5 dark:bg-white/10
                      light:border-black/10 dark:border-white/10
                      light:shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                      backdrop-blur-md transition-all duration-300"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm light:text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded light:bg-black/10 dark:bg-white/20 light:text-blue-800 dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm transition
                           light:text-black dark:text-white
                           hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm transition
                           light:text-black dark:text-white
                           hover:text-green-600 dark:hover:text-green-400"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
