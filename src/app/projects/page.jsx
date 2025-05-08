// 'use client'
// import React from 'react';

// const ProjectsPage = ({ theme }) => {

//   const projects = [
//     {
//       title: 'Cure Connect',
//       description: 'Cure Connect is a healthcare appointment booking platform that connects patients with doctors. It allows users to view doctor profiles, check their availability, and book appointments online. The platform is designed to streamline the process of finding and scheduling appointments with healthcare professionals, making it easier for patients to access medical care. It also includes features for managing appointments and patient records, ensuring a comprehensive solution for both patients and doctors.',
//       tech: ['React', 'Tailwind', 'rest api', 'Cloudinary', 'ExpressJS', 'Mongoose' , 'NodeJS', 'MongoDB', 'JWT', 'Cloudinary', 'Razor Pay', 'Axios', 'React Router', 'React Toastify'],
//       github: 'https://github.com/Gyanthakur/CureConnect',
//       demo: 'https://cureconnect-6t81.onrender.com/',
//     },
//     {
//       title: 'Agri Connect',
//       description: 'Agriconnect is a modern, full-stack web application designed to streamline agricultural services for farmers and merchants. It provides dedicated Farmer Login and Merchant Login pages with features tailored for their needs. The application allows farmers to easily access services, while merchants can manage their offerings efficiently. Built with Next.js, Express.js, MongoDB, and Tailwind CSS, Agriconnect ensures a seamless user experience and robust performance.',
//       tech: ['React', 'Tailwind', 'Clerk', 'Cloudinary', 'ExpressJS', 'Mongoose', 'NodeJS', 'MongoDB', 'JWT', 'Cloudinary', 'Nodemailer', 'Axios', 'React Router', 'React Toastify'],
//       github: 'https://github.com/Gyanthakur/AgriConnect',
//       demo: 'https://agri-connect-nu.vercel.app/',
//     },
//     {
//       title: 'Edemy LMS',
//       description: 'Edemy LMS is a full-stack learning management system (LMS) that provides educators and students with a seamless e-learning experience. Built using modern web technologies, it includes user authentication, course management, video streaming, and progress tracking. The platform is designed to be user-friendly and responsive, ensuring accessibility across devices. With features like course creation, quizzes, and a community forum, Edemy LMS aims to enhance the online learning experience for both instructors and learners.',

//       tech: ['React', 'Tailwind CSS', 'Javascript', 'Clerk', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Stripe', 'Quill Editor', 'Multer', 'Cloudinary',  'Vite', 'React YouTube', 'React Toastify'],
//       github: 'https://github.com/Gyanthakur/Edemy-LMS',
//       demo: 'https://edemy-lms-gps.vercel.app/',
//     },
//     {
//       title: 'Clear Background',
//       description: 'I am developing a React-based tool that uses the ClipDrop API to remove backgrounds from images seamlessly. The tool allows users to upload an image, and download the result with a transparent background, offering a user-friendly and efficient image-editing experience.',
//       tech: ['React', 'Tailwind', 'Clerk', 'ClipDrop'],
//       github: 'https://github.com/Gyanthakur/ClearBg',
//       demo: 'https://clear-bg.vercel.app/',
//     },
//     {
//       title: 'ImageGenesis',
//       description: 'Image Generator A tool that creates images from text prompts or custom inputs 🎨. Features include customizable styles 🎭, high-resolution outputs 🖌️, and creative flexibility 🌈. Ideal for designers, marketers, and anyone needing unique visuals for projects! ',
//       tech: ['React', 'Tailwind', 'Clerk', 'ClipDrop'],
//       github: 'https://github.com/Gyanthakur/ImageGenesis',
//       demo: 'https://image-genesis.onrender.com/',
//     },

//     {
//       title: 'Notes-Store',
//       description:
//         'Enhanced Document Management and Sharing: Developed features for creating, updating, deleting, hosting, and sharing documents on Notes-Store. Implemented a user-friendly interface for seamless document management.',
//       tech: ['Next.js', 'Tailwind', 'TypeScript', 'Convex', 'Clerk'],
//       github: 'https://github.com/Gyanthakur/notes_store',
//       demo: 'https://notes-store-app.vercel.app/',
//     },
//     {
//       title: 'Git-Practice',
//       description: 'Git Learning CLI is an interactive command-line interface designed to help users learn and practice Git commands efficiently. It provides instant feedback, command explanations, and a built-in guide for beginners and advanced users. ',
//       tech: ['React', 'Tailwind', 'JavaScript', 'local-storage', 'phosphorjs'],
//       github: 'https://github.com/Gyanthakur/Git-Practice',
//       demo: 'https://git-practice-umber.vercel.app/',
//     },
//     {
//       title: 'User stats',
//       description: 'GitHub Achievements Finder is a web application that allows users to search for a GitHub username and view their profile details, repositories, and achievements. Its an engaging tool to explore a developer journey on GitHub!',

//       tech: ['React', 'Tailwind', 'JavaScript', 'githubapi', 'vite', 'githubapiwrapper', 'phosphor-react'],
//       github: 'https://github.com/Gyanthakur/User-Stats',
//       demo: 'https://user-stats-zeta.vercel.app/',
//     },
//     {
//       title: 'My-Certificates',
//       description:
//         'My Certificates" is a platform where users can view and manage their certificates. Admins can securely log in, post new certificates, and ensure smooth user interactions with a responsive and user-friendly design.',
//       tech: ['Next.js', 'Tailwind', 'JavaScript', 'MongoDB', 'Express' , 'JWT', 'Cloudinary'],
//       github: 'https://github.com/Gyanthakur/My-Certificates',
//       demo: 'https://my-certificates-mu.vercel.app/',
//     },

//     {
//       title: 'Your-Cafe',
//       description:
//         'Your Cafe is a modern food ordering web application that provides users with a seamless experience for browsing, selecting, and ordering food online.',
//       tech: ['React', 'Tailwind', 'JavaScript', 'MongoDB', 'Express'],
//       github: 'https://github.com/Gyanthakur/your-cafe',
//       demo: 'https://your-cafe.onrender.com/',
//     },
//     {
//       title: 'Text Utils',
//       description:
//         'Text-Utils is a web application that allows users to perform various operations on text like removing extra spaces, converting to uppercase, etc.. It is built using React and provides a user-friendly interface for text manipulation.',
//       tech: ['React', 'JavaScript', 'CSS'],
//       github: 'https://github.com/Gyanthakur/TextUtils',
//       demo: 'https://gyanthakur.github.io/TextUtils/',
//     },

//     {
//       title: 'Dev Profiles',
//       description:
//         'DevProfiles: A place to list and shocase your developer skills and profile. It is built using htmel, css and javascript. It allows users to create and manage their profiles, showcasing their skills and projects.',
//       tech: ['HTML', 'CSS', 'JavaScript'],

//       github: 'https://github.com/Gyanthakur/Dev_Profiles',
//       demo: 'https://dev-profile-smoky.vercel.app/',
//     }

//   ]

//   return (
//     <div className={`min-h-screen py-12 px-4 sm:px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
//   <div className="max-w-7xl mx-auto">
//     <div className="flex justify-center items-center mb-12">
//       <h1 className="text-3xl  sm:text-4xl font-bold  text-orange-500">
//         Projects I've Built
//       </h1>
//     </div>

//     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className={`rounded-xl p-6 h-full flex flex-col justify-between transform transition duration-300 hover:-translate-y-2
//                      ${theme === 'dark' ?
//                        'bg-black border border-gray-800 shadow-lg shadow-purple-500/10' :
//                        'bg-white/60 border border-gray-200 shadow-xl shadow-blue-500/10'}`}
//           style={{
//             boxShadow: theme === 'dark'
//               ? '0 10px 30px -10px rgba(255, 255, 255, 0.05), 0 4px 6px -2px rgba(255, 255, 255, 0.02)'
//               : '0 10px 30px -10px rgba(60, 120, 250, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
//           }}
//         >
//           <div>
//             <div className="mb-4">
//               <div className="flex space-x-1 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>

//               </div>
//               <h2 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-cyan-300' : 'text-blue-600'}`}>
//                 {project.title}
//                 <svg
//                     className="absolute left-0 bottom-0 w-full h-5"
//                     viewBox="0 -10 100 20"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M0 15 L10 5 L20 15 L30 5 L40 15 L50 5 L60 15 L70 5 L80 15 L90 5 L100 15"
//                       stroke={theme === 'dark' ? '#22d3ee' : '#2563eb'}
//                       strokeWidth="3"
//                       fill="transparent"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="animate-zigzag"
//                     />
//                   </svg>
//               </h2>
//             </div>
//             <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
//               {project.description}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className={`px-2 py-1 text-xs rounded-full ${
//                     theme === 'dark'
//                       ? 'bg-gray-900 text-cyan-400'
//                       : 'bg-blue-100 text-blue-800'
//                   }`}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-4 pt-2 mt-auto">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-1 text-sm px-3 py-1 rounded-md transition
//                           ${theme === 'dark'
//                             ? 'bg-gray-900 hover:bg-gray-800 text-white'
//                             : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//             >
//               <span className="mr-1">👨‍💻</span> Code
//             </a>
//             <a
//               href={project.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-1 text-sm px-3 py-1 rounded-md transition
//                           ${theme === 'dark'
//                             ? 'bg-purple-700 hover:bg-purple-600 text-white'
//                             : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
//             >
//               <span className="mr-1">🚀</span> Live Demo
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//   );
// };

// export default ProjectsPage;

"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectsPage = ({ theme }) => {
	const projects = [
		{
			title: "Cure Connect",
			description:
				"Cure Connect is a healthcare appointment booking platform that connects patients with doctors. It allows users to view doctor profiles, check their availability, and book appointments online. The platform is designed to streamline the process of finding and scheduling appointments with healthcare professionals, making it easier for patients to access medical care. It also includes features for managing appointments and patient records, ensuring a comprehensive solution for both patients and doctors.",
			tech: [
				"React",
				"Tailwind",
				"rest api",
				"Cloudinary",
				"ExpressJS",
				"Mongoose",
				"NodeJS",
				"MongoDB",
				"JWT",
				"Cloudinary",
				"Razor Pay",
				"Axios",
				"React Router",
				"React Toastify",
			],
			github: "https://github.com/Gyanthakur/CureConnect",
			demo: "https://cureconnect-6t81.onrender.com/",
		},
		{
			title: "Agri Connect",
			description:
				"Agriconnect is a modern, full-stack web application designed to streamline agricultural services for farmers and merchants. It provides dedicated Farmer Login and Merchant Login pages with features tailored for their needs. The application allows farmers to easily access services, while merchants can manage their offerings efficiently. Built with Next.js, Express.js, MongoDB, and Tailwind CSS, Agriconnect ensures a seamless user experience and robust performance.",
			tech: [
				"React",
				"Tailwind",
				"Clerk",
				"Cloudinary",
				"ExpressJS",
				"Mongoose",
				"NodeJS",
				"MongoDB",
				"JWT",
				"Cloudinary",
				"Nodemailer",
				"Axios",
				"React Router",
				"React Toastify",
			],
			github: "https://github.com/Gyanthakur/AgriConnect",
			demo: "https://agri-connect-nu.vercel.app/",
		},
		{
			title: "Edemy LMS",
			description:
				"Edemy LMS is a full-stack learning management system (LMS) that provides educators and students with a seamless e-learning experience. Built using modern web technologies, it includes user authentication, course management, video streaming, and progress tracking. The platform is designed to be user-friendly and responsive, ensuring accessibility across devices. With features like course creation, quizzes, and a community forum, Edemy LMS aims to enhance the online learning experience for both instructors and learners.",

			tech: [
				"React",
				"Tailwind CSS",
				"Javascript",
				"Clerk",
				"Node.js",
				"Express",
				"MongoDB",
				"Axios",
				"Stripe",
				"Quill Editor",
				"Multer",
				"Cloudinary",
				"Vite",
				"React YouTube",
				"React Toastify",
			],
			github: "https://github.com/Gyanthakur/Edemy-LMS",
			demo: "https://edemy-lms-gps.vercel.app/",
		},
		{
			title: "Clear Background",
			description:
				"I am developing a React-based tool that uses the ClipDrop API to remove backgrounds from images seamlessly. The tool allows users to upload an image, and download the result with a transparent background, offering a user-friendly and efficient image-editing experience.",
			tech: ["React", "Tailwind", "Clerk", "ClipDrop"],
			github: "https://github.com/Gyanthakur/ClearBg",
			demo: "https://clear-bg.vercel.app/",
		},
		{
			title: "ImageGenesis",
			description:
				"Image Generator A tool that creates images from text prompts or custom inputs 🎨. Features include customizable styles 🎭, high-resolution outputs 🖌️, and creative flexibility 🌈. Ideal for designers, marketers, and anyone needing unique visuals for projects! ",
			tech: ["React", "Tailwind", "Clerk", "ClipDrop"],
			github: "https://github.com/Gyanthakur/ImageGenesis",
			demo: "https://image-genesis.onrender.com/",
		},

		{
			title: "Notes-Store",
			description:
				"Enhanced Document Management and Sharing: Developed features for creating, updating, deleting, hosting, and sharing documents on Notes-Store. Implemented a user-friendly interface for seamless document management.",
			tech: ["Next.js", "Tailwind", "TypeScript", "Convex", "Clerk"],
			github: "https://github.com/Gyanthakur/notes_store",
			demo: "https://notes-store-app.vercel.app/",
		},
		{
			title: "Git-Practice",
			description:
				"Git Learning CLI is an interactive command-line interface designed to help users learn and practice Git commands efficiently. It provides instant feedback, command explanations, and a built-in guide for beginners and advanced users. ",
			tech: ["React", "Tailwind", "JavaScript", "local-storage", "phosphorjs"],
			github: "https://github.com/Gyanthakur/Git-Practice",
			demo: "https://git-practice-umber.vercel.app/",
		},
		{
			title: "User stats",
			description:
				"GitHub Achievements Finder is a web application that allows users to search for a GitHub username and view their profile details, repositories, and achievements. Its an engaging tool to explore a developer journey on GitHub!",

			tech: [
				"React",
				"Tailwind",
				"JavaScript",
				"githubapi",
				"vite",
				"githubapiwrapper",
				"phosphor-react",
			],
			github: "https://github.com/Gyanthakur/User-Stats",
			demo: "https://user-stats-zeta.vercel.app/",
		},
		{
			title: "My-Certificates",
			description:
				'My Certificates" is a platform where users can view and manage their certificates. Admins can securely log in, post new certificates, and ensure smooth user interactions with a responsive and user-friendly design.',
			tech: [
				"Next.js",
				"Tailwind",
				"JavaScript",
				"MongoDB",
				"Express",
				"JWT",
				"Cloudinary",
			],
			github: "https://github.com/Gyanthakur/My-Certificates",
			demo: "https://my-certificates-mu.vercel.app/",
		},

		{
			title: "Your-Cafe",
			description:
				"Your Cafe is a modern food ordering web application that provides users with a seamless experience for browsing, selecting, and ordering food online.",
			tech: ["React", "Tailwind", "JavaScript", "MongoDB", "Express"],
			github: "https://github.com/Gyanthakur/your-cafe",
			demo: "https://your-cafe.onrender.com/",
		},
		{
			title: "Text Utils",
			description:
				"Text-Utils is a web application that allows users to perform various operations on text like removing extra spaces, converting to uppercase, etc.. It is built using React and provides a user-friendly interface for text manipulation.",
			tech: ["React", "JavaScript", "CSS"],
			github: "https://github.com/Gyanthakur/TextUtils",
			demo: "https://gyanthakur.github.io/TextUtils/",
		},

		{
			title: "Dev Profiles",
			description:
				"DevProfiles: A place to list and shocase your developer skills and profile. It is built using htmel, css and javascript. It allows users to create and manage their profiles, showcasing their skills and projects.",
			tech: ["HTML", "CSS", "JavaScript"],

			github: "https://github.com/Gyanthakur/Dev_Profiles",
			demo: "https://dev-profile-smoky.vercel.app/",
		},
	];

	const cardVariants = {
		offscreen: { y: 50, opacity: 0 },
		onscreen: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", bounce: 0.3, duration: 0.8 },
		},
	};

	return (
		<div
			className={`min-h-screen py-12 px-6 sm:px-12 transition-colors duration-500 ${
				theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
			}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-center items-center mb-14">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 tracking-wide">
						Projects I've Built
					</h1>
				</div>

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className={`rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl ${
								theme === "dark"
									? "bg border border-gray-700 text-white"
									: "bg-white border border-gray-200"
							}`}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.3 }}
							variants={cardVariants}
						>
							<div>
								{/* Window control dots */}
								<div className="flex space-x-2 mb-5">
									<span className="w-4 h-4 rounded-full bg-red-500 shadow-md"></span>
									<span className="w-4 h-4 rounded-full bg-yellow-400 shadow-md"></span>
									<span className="w-4 h-4 rounded-full bg-green-500 shadow-md"></span>
								</div>

								{/* Project Title with handwritten underline */}
								<h2
									className={`text-2xl font-bold mb-4 relative inline-block ${
										theme === "dark" ? "text-cyan-400" : "text-blue-700"
									}`}
								>
									{project.title}
									<svg
										className="absolute left-0 bottom-[-8] w-full h-5"
										viewBox="0 -10 100 30"
										preserveAspectRatio="none"
									>
										<path
											d="M0 15 L10 5 L20 15 L30 5 L40 15 L50 5 L60 15 L70 5 L80 15 L90 5 L100 15"
											stroke={theme === "dark" ? "#7371ec" : "#256eeb"}
											strokeWidth="3"
											fill="transparent"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="animate-zigzag"
										/>
									</svg>
								</h2>

								{/* Description */}
								<p
									className={`text-sm leading-relaxed mb-6 ${
										theme === "dark" ? "text-gray-400" : "text-gray-700"
									}`}
								>
									{project.description}
								</p>

								{/* Tech tags */}
								{/* Tech tags */}
								<div className="flex flex-wrap gap-3">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className={`relative inline-block px-4 py-1 rounded-full text-xs font-semibold cursor-pointer transition-transform duration-300 ${
												theme === "dark"
													? "bg-cyan-900 text-cyan-300 hover:text-orange-400"
													: "bg-blue-100 text-blue-800 hover:text-teal-600"
											} hover:scale-105`}
										>
											{tech}

											{/* Zigzag underline SVG */}
											{/* <svg
												className="absolute  bottom-0 h-2 overflow-visible"
												viewBox="0 0 100 20"
												preserveAspectRatio="none"
											>
												<path
													d="M0 15 L10 5 L20 15 L30 5 L40 15 L50 5 L60 15 L70 5 L80 15 L90 5 L100 15"
													stroke={theme === "dark" ? "#e40e0e" : "#2f25eb"}
													strokeWidth="2.5"
													fill="transparent"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="stroke-zigzag"
												/>
											</svg> */}

                      <svg
										className="absolute left-1 bottom-[0] w-[90%] h-2"
										viewBox="0 0 100 20"
										preserveAspectRatio="none"
									>
										<path
											d="M0 15 L10 5 L20 15 L30 5 L40 15 L50 5 L60 15 L70 5 L80 15 L90 5 L100 15"
                      stroke={theme === "dark" ? "#e40e0e" : "#2f25eb"}
											strokeWidth="2.5"
											fill="transparent"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="stroke-zigzag"
										/>
									</svg>

											<style jsx>{`
												.stroke-zigzag {
													stroke-dasharray: 180;
													stroke-dashoffset: 180;
													transition: stroke-dashoffset 0.5s ease;
												}
												span:hover .stroke-zigzag {
													stroke-dashoffset: 0;
													transition: stroke-dashoffset 0.6s ease;
												}
											`}</style>
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="mt-8 flex gap-4">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
										theme === "dark"
											? "bg-gray-800 hover:bg-gray-700 text-white"
											: "bg-gray-100 hover:bg-gray-200 text-gray-900"
									}`}
								>
									<span>👨‍💻</span> Code
								</a>
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
										theme === "dark"
											? "bg-purple-700 hover:bg-purple-600 text-white"
											: "bg-blue-100 hover:bg-blue-200 text-blue-900"
									}`}
								>
									<span>🚀</span> Live Demo
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Handwritten underline animation CSS */}
			{/* <style jsx>{`
        .animate-handwritten {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: dash 1.5s ease forwards;
          animation-delay: 0.3s;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style> */}
		</div>
	);
};

export default ProjectsPage;
