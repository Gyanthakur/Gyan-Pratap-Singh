// 'use client'

// import CanvasWrapper from '../components/CanvasWrapper'
// import { Float, Text3D, OrbitControls } from '@react-three/drei'
// import { Suspense } from 'react'

// export default function Contact() {
//   return (
//     <section className="relative mt-16 w-full h-screen light:bg-white dark:bg-black transition-colors duration-300">
//       {/* 3D Canvas */}
//       <CanvasWrapper>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[0, 5, 5]} intensity={1} />

//         <Suspense fallback={null}>
//           <Float speed={2} rotationIntensity={1.2} floatIntensity={2.5}>
//             <Text3D
//               font="/fonts/helvetiker_regular.typeface.json"
//               size={1.1}
//               height={0.3}
//               bevelEnabled
//               bevelThickness={0.02}
//               bevelSize={0.02}
//               bevelSegments={5}
//             >
//               Let's Connect
//               <meshStandardMaterial color="#00ffff" metalness={0.6} roughness={0.1} />
//             </Text3D>
//           </Float>
//         </Suspense>

//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={1.5}
//           enablePan={false}
//         />
//       </CanvasWrapper>

//       {/* Contact Form */}
//       <div className="absolute top-0 left-0  w-full h-full z-10 flex items-center justify-center light:bg-black/50 dark:bg-black/60 backdrop-blur-md px-4 sm:px-6">
//         <form
//           action="mailto:gps.96169@gmail.com"
//           method="POST"
//           encType="text/plain"
//           className="w-full max-w-lg sm:max-w-xl md:max-w-2xl light:bg-white dark:bg-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border dark:border-white/20 space-y-6 transition-all duration-300"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-center light:text-black dark:text-white">
//             Contact Me
//           </h2>

//           {/* Name */}
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Your name"
//               className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="you@example.com"
//               className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>

//           {/* Message */}
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Message</label>
//             <textarea
//               name="message"
//               required
//               rows={5}
//               placeholder="Say hello..."
//               className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }

'use client'

import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLink
} from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="relative mt-28 w-full h-screen light:bg-white dark:bg-black transition-colors duration-300">
      {/* 3D Canvas */}
      <CanvasWrapper>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.2} floatIntensity={2.5}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1.1}
              height={0.3}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelSegments={5}
            >
              Let's Connect
              <meshStandardMaterial color="#00ffff" metalness={0.6} roughness={0.1} />
            </Text3D>
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
      </CanvasWrapper>

      {/* Contact Form */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center light:bg-black/50 dark:bg-black/60 backdrop-blur-md px-4 sm:px-6">
        <form
          action="mailto:gps.96169@gmail.com"
          method="POST"
          encType="text/plain"
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl light:bg-white dark:bg-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border dark:border-white/20 space-y-6 transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center light:text-black dark:text-white">
            Contact Me
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm sm:text-base light:text-black dark:text-white">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Say hello..."
              className="rounded-md px-4 py-2 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>

         {/* Social Message */}

<p className="text-center text-base sm:text-lg light:text-gray-600 dark:text-gray-300 mt-6">
  You can also connect with me on these platforms:
</p>
{/* Social Media Icons */}
<div className="flex justify-center gap-4 text-2xl light:text-gray-700 dark:text-white">
  <a href="https://github.com/Gyanthakur" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
    <FaLinkedin />
  </a>
  <a href="mailto:gps.96169@gmail.com" className="hover:text-green-500 transition">
    <FaEnvelope />
  </a>
  <a href="https://twitter.com/gps_96169" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
    <FaTwitter />
  </a>
  <a href="https://instagram.com/gp.singh.ro.ckstar4438" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
    <FaInstagram />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100026766931684" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
    <FaFacebook />
  </a>
  <a href="https://wa.me/918957818597" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
    <FaWhatsapp />
  </a>
  <a href="https://linktr.ee/gp_singh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
    <FaLink />
  </a>
</div>

        </form>
      </div>
    </section>
  )
}
