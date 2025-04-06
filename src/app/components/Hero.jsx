// // 'use client'
// // import CanvasWrapper from '../components/CanvasWrapper'
// // import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
// // import { Suspense } from 'react'

// // export default function Home() {
// //   return (
// //     <section className="h-screen w-full relative">
// //       {/* 3D Canvas Background */}
// //       <CanvasWrapper>
// //         <ambientLight intensity={1.5} />
// //         <directionalLight position={[5, 5, 5]} intensity={1} />
// //         <Stars radius={100} depth={50} count={1000} factor={4} fade />

// //         <Suspense fallback={null}>
// //           <Float
// //             speed={2}
// //             rotationIntensity={1.2}
// //             floatIntensity={2.2}
// //           >
// //             <Text3D
// //               font="/fonts/helvetiker_regular.typeface.json"
// //               size={1.2}
// //               height={0.4}
// //               bevelEnabled
// //               bevelThickness={0.05}
// //               bevelSize={0.03}
// //               bevelOffset={0}
// //               bevelSegments={10}
// //             >
// //               Hello, I'm Gyan
// //               <meshStandardMaterial color="#ff914d" metalness={0.4} roughness={0.2} />
// //             </Text3D>
// //           </Float>
// //         </Suspense>

// //         <OrbitControls
// //           enableZoom={false}
// //           autoRotate
// //           autoRotateSpeed={1.8}
// //           enablePan={false}
// //           maxPolarAngle={Math.PI / 2}
// //           minPolarAngle={Math.PI / 3}
// //         />
// //       </CanvasWrapper>

// //       {/* Overlay Content */}
// //       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center px-6 z-10 light:bg-white/60 dark:bg-black backdrop-blur">
// //         <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
// //           Full Stack + 3D Web Dev
// //         </h1>
// //         <p className="mt-4 text-lg md:text-xl max-w-3xl light:text-gray-800 dark:text-gray-200">
// //           I build modern, immersive web apps using Next.js, React Three Fiber, and TailwindCSS. From static portfolios to full-stack 3D-powered platforms — I bring your ideas to life with code & creativity.
// //         </p>
// //         <a
// //           href="/contact"
// //           className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
// //         >
// //           Let’s Work Together
// //         </a>
// //       </div>
// //     </section>
// //   )
// // }

// 'use client'
// import CanvasWrapper from '../components/CanvasWrapper'
// import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
// import { Suspense } from 'react'

// export default function Home() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* 3D Canvas Background */}
//       <CanvasWrapper>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Stars radius={100} depth={50} count={1000} factor={4} fade />

//         <Suspense fallback={null}>
//           <Float speed={2} rotationIntensity={1.2} floatIntensity={2.2}>
//             <Text3D
//               font="/fonts/helvetiker_regular.typeface.json"
//               size={1.2}
//               height={0.4}
//               bevelEnabled
//               bevelThickness={0.05}
//               bevelSize={0.03}
//               bevelOffset={0}
//               bevelSegments={10}
//             >
//               Hello, I'm Gyan
//               <meshStandardMaterial color="#ff914d" metalness={0.4} roughness={0.2} />
//             </Text3D>
//           </Float>
//         </Suspense>

//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={1.8}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 3}
//         />
//       </CanvasWrapper>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 light:bg-white/60 dark:bg-black/60 backdrop-blur">
//         {/* Profile Image */}
//         <img
//           src="/gyan.jpg" // ⬅️ Replace this with your actual image path
//           alt="Gyan Pratap Singh"
//           className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-orange-500 shadow-lg object-cover mb-4"
//         />

//         {/* Name */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
//           Gyan Pratap Singh
//         </h1>

//         {/* Title */}
//         <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-medium light:text-gray-800 dark:text-gray-200">
//           Full Stack Developer | React & 3D Web Specialist
//         </h2>

//         {/* Description */}
//         <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg light:-gray-700 dark:text-gray-300">
//           B.Tech in Computer Science | Passionate about building powerful, interactive, and scalable
//           web applications. Experienced with Next.js, React Three Fiber, TailwindCSS, MongoDB, Clerk,
//           and Supabase. Let’s bring your ideas to life with tech & creativity!
//         </p>

//         {/* Contact CTA */}
//         <a
//           href="/contact"
//           className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
//         >
//           Let’s Work Together
//         </a>
//       </div>
//     </section>
//   )
// }

'use client'
import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      {/* <CanvasWrapper>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />

        <Suspense fallback={null}>
          <Float speed={1.8} rotationIntensity={1} floatIntensity={2}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1}
              height={0.3}
              bevelEnabled
              bevelThickness={0.05}
              bevelSize={0.03}
              bevelOffset={0}
              bevelSegments={10}
            >
              Hi, I'm Gyan
              <meshStandardMaterial color="#ff914d" metalness={0.4} roughness={0.2} />
            </Text3D>
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </CanvasWrapper> */}

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 light:bg-white/60 dark:bg-black/60 backdrop-blur-sm">
        {/* Profile Image */}
        <img
          src="/gyan.jpg"
          alt="Gyan Pratap Singh"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-orange-500 shadow-lg object-cover mb-4"
        />

        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
          👋 Hi, I'm Gyan Pratap Singh
        </h1>

        {/* Title with emoji */}
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-medium light:text-gray-800 dark:text-gray-200">
          💻 Full Stack Developer | ✨ 3D Web Specialist
        </h2>

        {/* Tech badges */}
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">React</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Next.js</span>
          <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-full">Tailwind</span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">MongoDB</span>
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Postman</span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">GitKraken</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Html</span>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">C++</span>
        </div>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg light:text-gray-700 dark:text-gray-300">
          🎓 B.Tech in Computer Science | 🚀 Passionate about building powerful, interactive, and 
          scalable web applications. I blend creativity with technical expertise to craft 
          exceptional digital experiences that stand out.
        </p>

        {/* Additional details */}
        <p className="mt-2 max-w-2xl text-sm sm:text-base md:text-lg light:text-gray-700 dark:text-gray-300">
          🏆 Hacktoberfest Maintainer | 🔍 Problem Solver | 🌱 Always Learning
        </p>

        {/* Buttons container */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
          >
            <span className="mr-2">🤝</span> Let's Work Together
          </a>
          
          <a
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
          >
            <span className="mr-2">📄</span> View My Resume
          </a>
        </div>

        {/* Social links */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/Gyanthakur" target="_blank" rel="noopener noreferrer" 
             className="light:text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank" rel="noopener noreferrer"
             className="light:text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/gps_96169" target="_blank" rel="noopener noreferrer"
             className="light:text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}