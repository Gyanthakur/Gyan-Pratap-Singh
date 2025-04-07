"use client";

import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaGithub,
	FaGitAlt,
	FaPython,
	FaDatabase,
	FaCuttlefish,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function About({ theme }) {
	const isDark = theme === "dark";

	return (
		<div
			className={`min-h-[125vh] w-full relative transition-colors duration-500 ${
				isDark ? "bg-black text-white" : "bg-white text-black"
			}`}
		>
			<div
				className={`absolute md:left-10 flex justify-center items-center px-6 py-10 z-10 overflow-y-auto backdrop-blur-md ${
					isDark ? "bg-black/80 text-white" : "bg-white/80 text-black"
				}`}
			>
				<div className="max-w-5xl space-y-10">
					<h2
						className={`text-4xl md:text-5xl font-bold drop-shadow-lg ${
							isDark ? "text-orange-400" : "text-orange-600"
						}`}
					>
						# About me
					</h2>

					<p className="text-base sm:text-lg leading-relaxed text-justify">
						I’m a full stack web developer from Uttar Pradesh, India with a
						passion for crafting dynamic, immersive, and scalable web
						experiences. With 2+ years of hands-on experience, I specialize in
						building fast, accessible, and modern web applications.
					</p>

					{/* Technologies Section */}
					<div>
						<h3
							className={`text-2xl font-semibold mb-3 ${
								isDark ? "text-orange-400" : "text-orange-600"
							}`}
						>
							⚙️ Core Technologies
						</h3>
						<p className="text-base sm:text-lg leading-relaxed text-justify mb-4">
							My journey revolves around mastering key web technologies like:
						</p>
						<div className="flex flex-wrap gap-2 text-sm font-medium">
							<TechBadge
								icon={<FaJs className="mr-1" />}
								label="JavaScript"
								bg="bg-yellow-300"
								text="text-black"
							/>
							<TechBadge
								icon={<FaReact className="mr-1" />}
								label="React"
								bg="bg-blue-500"
								text="text-white"
							/>
							<TechBadge
								icon={<SiNextdotjs className="mr-1" />}
								label="Next.js"
								bg="bg-black"
								text="text-white"
							/>
							<TechBadge
								icon={<FaNodeJs className="mr-1" />}
								label="Node.js"
								bg="bg-gray-900"
								text="text-white"
							/>
							<TechBadge
								icon={<FaHtml5 className="mr-1" />}
								label="HTML5"
								bg="bg-orange-600"
								text="text-white"
							/>
							<TechBadge
								icon={<FaCss3Alt className="mr-1" />}
								label="CSS3"
								bg="bg-blue-600"
								text="text-white"
							/>
							<TechBadge
								icon={<SiTailwindcss className="mr-1" />}
								label="TailwindCSS"
								bg="bg-sky-500"
								text="text-white"
							/>
							<TechBadge
								icon={<FaPython className="mr-1" />}
								label="Python"
								bg="bg-green-700"
								text="text-white"
							/>
							<TechBadge
								icon={<FaGitAlt className="mr-1" />}
								label="Git"
								bg="bg-gray-800"
								text="text-white"
							/>
							<TechBadge
								icon={<FaGithub className="mr-1" />}
								label="GitHub"
								bg="bg-gray-700"
								text="text-white"
							/>
							<TechBadge
								icon={<FaDatabase className="mr-1" />}
								label="MongoDB"
								bg="bg-emerald-700"
								text="text-white"
							/>
							<TechBadge
								icon={<FaCuttlefish className="mr-1" />}
								label="C++"
								bg="bg-purple-800"
								text="text-white"
							/>
						</div>
					</div>

					{/* Exploration Section */}
					<div>
						<h3
							className={`text-2xl font-semibold mb-2 ${
								isDark ? "text-orange-400" : "text-orange-600"
							}`}
						>
							🌱 Exploring New Horizons
						</h3>
						<p className="text-base sm:text-lg text-justify">
							I'm always learning — whether it’s contributing to open-source
							(Hacktoberfest Maintainer), building design tools, or
							experimenting with 3D dev using Three.js and React Three Fiber.
							I’ve also built projects like e-learning sites, productivity
							tools, and job portals.
						</p>
					</div>

					{/* Education Section */}
					<div>
						<h3
							className={`text-2xl font-semibold mb-2 ${
								isDark ? "text-orange-400" : "text-orange-600"
							}`}
						>
							🎓 Educational Pursuits
						</h3>
						<p className="text-base sm:text-lg text-justify">
							I'm currently pursuing a{" "}
							<strong>B.Tech in Computer Science</strong> from Kamla Nehru
							Institute of Technology, Sultanpur, maintaining a CGPA of{" "}
							<strong>8.8</strong>. I love applying academic knowledge to
							real-world tech stacks.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

// Utility Badge component
function TechBadge({ icon, label, bg, text }) {
	return (
		<span
			className={`inline-flex items-center px-2 py-1 rounded-full ${bg} ${text}`}
		>
			{icon} {label}
		</span>
	);
}
