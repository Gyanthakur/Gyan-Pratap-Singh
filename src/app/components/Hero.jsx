// 'use client'
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Home({ theme }) {
// 	const isDark = theme === "dark";

// 	return (
// 		<section className="relative min-h-[115vh] sm:min-h-screen w-full overflow-hidden">
// 			{/* Overlay Content */}
// 			<div
// 				className={`absolute inset-0 mt-2 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 backdrop-blur-sm 
// 				${isDark ? "bg-black/60" : "bg-white"}`}
// 			>
// 				{/* Profile Image */}
// 				<img
// 					src="/gyan.jpg"
// 					alt="Gyan Pratap Singh"
// 					className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-orange-500 shadow-lg object-cover mb-4"
// 				/>

// 				<div className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300">
// 					<span className="mr-2">🤝</span> I am undergrad. at KNIT, Sultanpur.
// 				</div>

// 				{/* Greeting */}
// 				<h1
// 					className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md 
// 					${isDark ? "text-orange-400" : "text-orange-500"}`}
// 				>
// 					👋 Hi, I'm Gyan Pratap Singh
// 				</h1>

// 				{/* Title */}
// 				<h2
// 					className={`mt-2 text-lg sm:text-xl md:text-2xl font-medium 
// 					${isDark ? "text-gray-200" : "text-gray-800"}`}
// 				>
// 					💻 Full Stack Developer | ✨ Problem Solver
// 				</h2>

// 				{/* Tech Badges */}
// 				<div className="mt-4 flex flex-wrap justify-center gap-2">
// 					{[
// 						{ name: "React", color: "bg-blue-500" },
// 						{ name: "Next.js", color: "bg-black" },
// 						{ name: "Tailwind", color: "bg-blue-400" },
// 						{ name: "MongoDB", color: "bg-green-600" },
// 						{ name: "Postman", color: "bg-purple-600" },
// 						{ name: "GitKraken", color: "bg-green-600" },
// 						{ name: "Html", color: "bg-blue-600" },
// 						{ name: "C++", color: "bg-red-600" },
// 					].map((tech, index) => (
// 						<span
// 							key={index}
// 							className={`${tech.color} text-white text-xs px-2 py-1 rounded-full`}
// 						>
// 							{tech.name}
// 						</span>
// 					))}
// 				</div>

// 				{/* Description */}
// 				<p
// 					className={`mt-4 max-w-2xl text-sm sm:text-base md:text-lg 
// 					${isDark ? "text-gray-300" : "text-gray-700"}`}
// 				>
// 					🎓 B.Tech in Computer Science | 🚀 Passionate about building powerful,
// 					interactive, and scalable web applications. I blend creativity with
// 					technical expertise to craft exceptional digital experiences that
// 					stand out.
// 				</p>

// 				<p
// 					className={`mt-2 max-w-2xl text-sm sm:text-base md:text-lg 
// 					${isDark ? "text-gray-300" : "text-gray-700"}`}
// 				>
// 					🏆 Hacktoberfest Maintainer | 🔍 Problem Solver | 🌱 Always Learning
// 				</p>

// 				{/* Buttons */}
// 				<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
// 					<a
// 						href="/contact"
// 						className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
// 					>
// 						<span className="mr-2">🤝</span> Let's Work Together
// 					</a>
// 					<a
// 						href="/resume.pdf"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
// 					>
// 						<span className="mr-2">📄</span> View My Resume
// 					</a>
// 				</div>

// 				{/* Social Links */}
// 				<div className="mt-6 flex justify-center gap-4">
// 					{[
// 						{
// 							href: "https://github.com/Gyanthakur",
// 							icon: <FaGithub className="w-10 h-10" />,
// 						},
// 						{
// 							href: "https://www.linkedin.com/in/gyan-pratap-singh-275785236/",
// 							icon: <FaLinkedin className="w-10 h-10" />,
// 						},
// 						{
// 							href: "https://twitter.com/gps_96169",
// 							icon: <FaTwitter className="w-10 h-10" />,
// 						},
// 					].map(({ href, icon }, index) => (
// 						<a
// 							key={index}
// 							href={href}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className={`transition-colors ${
// 								isDark
// 									? "text-gray-200 hover:text-orange-400"
// 									: "text-gray-800 hover:text-orange-500"
// 							}`}
// 						>
// 							{icon}
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section className="relative pl-5 min-h-screen w-full overflow-hidden flex items-center justify-center py-6 sm:py-12">
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-white"}`}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl hidden lg:block"></div>
      
      {/* Main Content Container */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          
          {/* Left Content Area */}
          <div className={`w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0`}>
            {/* Badge */}
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium py-2 px-4 rounded-full shadow text-sm">
              <span className="mr-2">🎓</span> Undergrad at KNIT, Sultanpur
            </div>

            {/* Greeting */}
            <h1 className={`mt-4 text-3xl sm:text-4xl md:text-5xl leading-normal font-extrabold
              ${isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500" : 
                       "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600"}`}>
              👋 Hi, I'm Gyan Pratap Singh
            </h1>

            {/* Title */}
            <h2 className={`mt-2 text-lg sm:text-xl md:text-2xl font-medium
              ${isDark ? "text-cyan-300" : "text-cyan-600"}`}>
              💻 Full Stack Developer | ✨ Problem Solver
            </h2>

            {/* Description */}
            <p className={`mt-4 max-w-2xl text-sm sm:text-base md:text-lg
              ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              🎓 B.Tech in Computer Science | 🚀 Passionate about building powerful,
              interactive, and scalable web applications. I blend creativity with
              technical expertise to craft exceptional digital experiences that stand out.
            </p>

            <p className={`mt-2 max-w-2xl text-sm sm:text-base md:text-lg
              ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              🏆 Hacktoberfest Maintainer | 🔍 Problem Solver | 🌱 Always Learning
            </p>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                { name: "React", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                { name: "Next.js", color: "bg-gradient-to-r from-gray-800 to-black" },
                { name: "Tailwind", color: "bg-gradient-to-r from-blue-400 to-cyan-500" },
                { name: "MongoDB", color: "bg-gradient-to-r from-green-600 to-green-700" },
                { name: "Postman", color: "bg-gradient-to-r from-purple-600 to-purple-700" },
                { name: "GitKraken", color: "bg-gradient-to-r from-green-500 to-teal-600" },
                { name: "Html", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
                { name: "C++", color: "bg-gradient-to-r from-red-600 to-red-700" }
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`${tech.color} text-white text-xs px-3 py-1.5 rounded-full transform transition-transform hover:scale-105`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-pink-500/20 transition duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <span className="mr-2">🤝</span> Let's Work Together
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-800 hover:bg-gray-700"} text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-gray-800/20 transition duration-300 text-sm sm:text-base w-full sm:w-auto`}
              >
                <span className="mr-2">📄</span> View My Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center lg:justify-start gap-6">
              {[
                { href: "https://github.com/Gyanthakur", icon: <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" /> },
                { href: "https://www.linkedin.com/in/gyan-pratap-singh-275785236/", icon: <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" /> },
                { href: "https://twitter.com/gps_96169", icon: <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7" /> }
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 transform hover:scale-110 p-3 rounded-full
                    ${isDark 
                      ? "bg-gray-800 text-gray-200 hover:text-orange-400 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-800 hover:text-orange-500 hover:bg-gray-200"}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Image Area */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative">
              {/* Image background glow */}
              <div className={`absolute -inset-0.5 rounded-full ${
                isDark ? "bg-gradient-to-r from-orange-500 to-pink-600" : "bg-gradient-to-r from-orange-500 to-pink-600"
              } opacity-75 blur-md`}></div>
              
              {/* Image container */}
              <div className={`relative rounded-3xl overflow-hidden border-2 ${
                isDark ? "border-orange-500" : "border-orange-500"
              } shadow-2xl w-64 h-64 sm:w-80 sm:h-80`}>
                <img
                  src="/gyan.jpg"
                  alt="Gyan Pratap Singh"
                  className="w-full h-full object-cover"
                />
                
                {/* Glass overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black/30">
                  <p className={`text-sm font-medium text-white text-center`}>Gyan Pratap Singh</p>
                  <p className={`text-xs text-gray-200 text-center`}>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}