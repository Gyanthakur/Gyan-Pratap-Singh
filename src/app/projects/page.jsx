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
    title: 'Cure Connect',
    description: 'Cure Connect is a healthcare appointment booking platform that connects patients with doctors. It allows users to view doctor profiles, check their availability, and book appointments online. The platform is designed to streamline the process of finding and scheduling appointments with healthcare professionals, making it easier for patients to access medical care. It also includes features for managing appointments and patient records, ensuring a comprehensive solution for both patients and doctors.',
    tech: ['React', 'Tailwind', 'rest api', 'Cloudinary', 'ExpressJS', 'Mongoose' , 'NodeJS', 'MongoDB', 'JWT', 'Cloudinary', 'Razor Pay', 'Axios', 'React Router', 'React Toastify'],
    github: 'https://github.com/Gyanthakur/CureConnect',
    demo: 'https://cureconnect-6t81.onrender.com/',
  },
  {
    title: 'Agri Connect',
    description: 'Agriconnect is a modern, full-stack web application designed to streamline agricultural services for farmers and merchants. It provides dedicated Farmer Login and Merchant Login pages with features tailored for their needs. The application allows farmers to easily access services, while merchants can manage their offerings efficiently. Built with Next.js, Express.js, MongoDB, and Tailwind CSS, Agriconnect ensures a seamless user experience and robust performance.',
    tech: ['React', 'Tailwind', 'Clerk', 'Cloudinary', 'ExpressJS', 'Mongoose', 'NodeJS', 'MongoDB', 'JWT', 'Cloudinary', 'Nodemailer', 'Axios', 'React Router', 'React Toastify'],
    github: 'https://github.com/Gyanthakur/AgriConnect',
    demo: 'https://agri-connect-nu.vercel.app/',
  },
  {
    title: 'Edemy LMS',
    description: 'Edemy LMS is a full-stack learning management system (LMS) that provides educators and students with a seamless e-learning experience. Built using modern web technologies, it includes user authentication, course management, video streaming, and progress tracking. The platform is designed to be user-friendly and responsive, ensuring accessibility across devices. With features like course creation, quizzes, and a community forum, Edemy LMS aims to enhance the online learning experience for both instructors and learners.',

    
    tech: ['React', 'Tailwind CSS', 'Javascript', 'Clerk', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Stripe', 'Quill Editor', 'Multer', 'Cloudinary',  'Vite', 'React YouTube', 'React Toastify'],
    github: 'https://github.com/Gyanthakur/Edemy-LMS',
    demo: 'https://edemy-lms-gps.vercel.app/',
  },
  {
    title: 'Clear Background',
    description: 'I am developing a React-based tool that uses the ClipDrop API to remove backgrounds from images seamlessly. The tool allows users to upload an image, and download the result with a transparent background, offering a user-friendly and efficient image-editing experience.',
    tech: ['React', 'Tailwind', 'Clerk', 'ClipDrop'],
    github: 'https://github.com/Gyanthakur/ClearBg',
    demo: 'https://clear-bg.vercel.app/',
  },
  {
    title: 'ImageGenesis',
    description: 'Image Generator A tool that creates images from text prompts or custom inputs 🎨. Features include customizable styles 🎭, high-resolution outputs 🖌️, and creative flexibility 🌈. Ideal for designers, marketers, and anyone needing unique visuals for projects! ',
    tech: ['React', 'Tailwind', 'Clerk', 'ClipDrop'],
    github: 'https://github.com/Gyanthakur/ImageGenesis',
    demo: 'https://image-genesis.onrender.com/',
  },
  
  {
    title: 'Notes-Store',
    description:
      'Enhanced Document Management and Sharing: Developed features for creating, updating, deleting, hosting, and sharing documents on Notes-Store. Implemented a user-friendly interface for seamless document management.',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'Convex', 'Clerk'],
    github: 'https://github.com/Gyanthakur/notes_store',
    demo: 'https://notes-store-app.vercel.app/',
  },
  {
    title: 'Your-Cafe',
    description:
      'Your Cafe is a modern food ordering web application that provides users with a seamless experience for browsing, selecting, and ordering food online.',
    tech: ['React', 'Tailwind', 'JavaScript', 'MongoDB', 'Express'],
    github: 'https://github.com/Gyanthakur/your-cafe',
    demo: 'https://your-cafe.onrender.com/',
  },
  {
    title: 'Text Utils',
    description:
      'Text-Utils is a web application that allows users to perform various operations on text like removing extra spaces, converting to uppercase, etc.. It is built using React and provides a user-friendly interface for text manipulation.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Gyanthakur/TextUtils',
    demo: 'https://gyanthakur.github.io/TextUtils/',
  },
  {
    title: 'Notes-Store',
    description:
      'Enhanced Document Management and Sharing: Developed features for creating, updating, deleting, hosting, and sharing documents on Notes-Store. Implemented a user-friendly interface for seamless document management.',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'Convex', 'Clerk'],
    github: 'https://github.com/Gyanthakur/notes_store',
    demo: 'https://notes-store-app.vercel.app/',
  },
  
  
 
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-6 px-4 light:bg-white dark:bg-black light:text-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl text-orange-500 dark:text-white font-bold text-center mb-12">Projects I've Built</h1>

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
              <h2 className="text-xl text-cyan-400 underline font-bold mb-2">{project.title}</h2>
              <p className="text-sm light:text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded light:bg-black/10 dark:bg-white/20 text-cyan-400"
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
