"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Socials array inside the component to access theme
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adityap817/",
      icon: <FaLinkedin size={24} color="#0A66C2" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/adityap817/",
      icon: (
        <FaGithub
          size={24}
          color={theme === "dark" ? "#fff" : "#181717"}
        />
      ),
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/adityaa_24",
      icon: <SiLeetcode size={24} color="#FFA116" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/adityapaatil_/",
      icon: <FaInstagram size={24} color="#E4405F" />,
    },
  ];

  return (
    <div
      className={`
        w-full h-[65px] fixed top-0
        shadow-lg
        shadow-[#06b6d4]/50
        dark:shadow-[#2A0E61]/50
        bg-background/10
        backdrop-blur-md
        z-50 px-10
      `}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-foreground font-mono">
            Aditya Patil 
          </span>
        </a>

        {/* Centered menu with toggle button to the right */}
        <div className="hidden md:flex flex-row items-center justify-center flex-1">
          <div className="flex items-center justify-center h-auto border border-border bg-background/60 px-[20px] py-[10px] rounded-full text-foreground">
            <a
              href="#about"
              className="cursor-pointer px-4 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer px-4 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer px-4 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer px-4 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            >
              Contact
            </a>
          </div>
          {/* Theme Toggle Button with left margin */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2 rounded-full border border-border bg-background/60 text-foreground hover:bg-primary/20 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="flex md:hidden items-center justify-center w-full">
          <button onClick={toggleMenu} className="text-foreground">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Social icons */}
        <div className="flex flex-row gap-5 justify-center md:justify-end w-full md:w-auto">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-background/80 text-foreground py-5">
          <a
            href="#about"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-cyan-500 focus:text-cyan-500"
            onClick={toggleMenu}
          >
            Contact
          </a>
          {/* Theme Toggle Button for mobile */}
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full border border-border bg-background/60 text-foreground hover:bg-primary/20 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;