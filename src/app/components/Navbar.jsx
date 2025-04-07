"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("/");

	useEffect(() => {
		setMounted(true);
		// Set active link based on current path
		setActiveLink(window.location.pathname);
	}, []);

	useEffect(() => {
		// Close mobile menu when resizing to desktop
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="w-full px-6 py-3 flex justify-between items-center light:bg-white/90 dark:bg-gray-900/90 backdrop-blur-md fixed top-0 z-50 shadow-sm">
			<Link
				href="/"
				className="relative group flex items-center"
				onClick={() => setActiveLink("/")}
			>
				<h1 className="text-2xl font-bold light:text-gray-800 dark:text-white transition-colors duration-300">
					Gyan's{" "}
					<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
				</h1>
				<div className="absolute bottom-0 left-0 w-0 h-0.5 light:bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></div>
			</Link>

			{/* Desktop Links */}
			<div className="hidden md:flex items-center space-x-1">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						onClick={() => setActiveLink(link.href)}
						className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
							activeLink === link.href
								? "light:text-blue-600 dark:text-blue-400"
								: "light:text-gray-700 dark:text-gray-300 light:hover:text-blue-600 dark:hover:text-blue-400"
						}`}
					>
						{link.label}
						{activeLink === link.href && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 light:bg-blue-600 dark:bg-blue-400 rounded-full"></span>
						)}
					</Link>
				))}

				<button
					onClick={toggleTheme}
					className="ml-4 p-2 rounded-full light:bg-gray-100 dark:bg-gray-800 light:hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
					aria-label="Toggle Theme"
				>
					{theme === "dark" ? (
						<Sun className="w-5 h-5 text-yellow-500" />
					) : (
						<Moon className="w-5 h-5 text-blue-600" />
					)}
				</button>
			</div>

			{/* Mobile Hamburger */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden p-2 rounded-md light:bg-gray-100 dark:bg-gray-800 light:text-gray-800 dark:text-white"
				aria-label="Toggle Menu"
			>
				{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
			</button>

			{/* Mobile Menu */}
			{isOpen && (
				// <div className="absolute  top-full left-0 w-full light:bg-white/95 bg-gray-700/95 backdrop-blur-md flex flex-col py-4 md:hidden z-40 shadow-lg transition-all duration-300 ease-in-out">
				<div className="absolute top-full left-0 w-full light:bg-white/95 dark:bg-gray-700/95 backdrop-blur-md flex flex-col py-4 md:hidden z-40 shadow-lg transition-all duration-300 ease-in-out">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => {
								setActiveLink(link.href);
								setIsOpen(false);
							}}
							className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
								activeLink === link.href
									? "text-blue-600 dark:text-blue-400 underline light:bg-gray-100 dark:bg-gray-800"
									: "light:text-gray-700 dark:text-gray-300 light:hover:bg-gray-900 dark:hover:bg-gray-800"
							}`}
						>
							{link.label}
						</Link>
					))}

					<div className="mx-6 my-3 border-t border-gray-200 dark:border-gray-700"></div>

					<button
						onClick={() => {
							toggleTheme();
							setIsOpen(false);
						}}
						className="flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
					>
						{theme === "dark" ? (
							<>
								<Sun className="w-5 h-5 mr-3 text-yellow-500" />
								<span>Light Mode</span>
							</>
						) : (
							<>
								<Moon className="w-5 h-5 mr-3 text-blue-600" />
								<span>Dark Mode</span>
							</>
						)}
					</button>
				</div>
			)}
		</nav>
	);
}
