"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { TbFileCv } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { company } from "@/constants";
import { school } from "@/constants";

// Add your images here
const images = ["/ap2.jpeg", "/ap.jpeg"];

const HeroContent = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-cyan-400 dark:border-[#7042f88b] opacity-[0.9] bg-white dark:bg-[#181824] transition-colors"
        >
          {school.map((school) => (
            <Image
              key={school.name}
              src={school.logo}
              alt={school.name}
              width={40}
              height={20}
              className="cursor-pointer hover:brightness-75 transition duration-300"
            />
          ))}
          <h1 className="text-[13px] font-bold !text-black dark:!text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400">
            - MS Software Engineering
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-black dark:text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span className="hidden md:block">
            Hi👋, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-cyan-400">
              {" "}
              Aditya Patil{" "}
            </span>
            Software Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 my-5 max-w-full md:max-w-[600px] hidden md:block"
        >
          {company.map((company) => (
            <Image
              key={company.name}
              src={company.logo}
              alt={company.name}
              width={96}
              height={96}
              className="cursor-pointer hover:brightness-75 transition duration-300"
            />
          ))}
          Ex- Veritas Technologies LLC. <br />
          I&apos;m a Full Stack Software Engineer dedicated to building dynamic websites and software solutions. Explore my projects and skills!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/Resume_Aditya Patil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-black dark:text-white cursor-pointer rounded-full max-w-[200px] items-center justify-center gap-2 hidden md:flex"
        >
          <TbFileCv className="text-2xl" />
          Download CV
        </motion.a>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#contact"
          className="py-2 button-primary text-center text-black dark:text-white cursor-pointer rounded-full max-w-[200px] items-center justify-center gap-2 hidden md:flex"
        >
          <SiMinutemailer className="text-2xl" />
          Contact Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0 mb-16"
      >
        <div className="relative flex items-center justify-center p-6 md:p-10">
          {/* Custom frame: visible from bottom, left, right, but not from very top */}
          <div
            className="
              absolute
              right-0
              bottom-0
              w-[270px] h-[340px] md:w-[340px] md:h-[420px]
              rounded-b-3xl rounded-t-xl
              border-r-[6px] border-b-[6px]
              border-cyan-400 dark:border-purple-800
              z-10 pointer-events-none
            "
            style={{
              top: "32px",
              height: "calc(100% - 32px)",
            }}
          />
          {/* Slideshow image container */}
          <div className="relative w-[270px] h-[360px] md:w-[340px] md:h-[440px] flex items-center justify-center z-20 overflow-visible">
            <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-[270px] h-[360px] md:w-[340px] md:h-[440px] z-20 overflow-visible transition-all duration-700">
              <Image
                src={images[current]}
                alt="work icons"
                fill
                className="object-cover rounded-3xl scale-110 shadow-xl transition-all duration-700"
                priority
              />
            </div>
            {/* Dots for navigation */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? "bg-cyan-400" : "bg-gray-300 dark:bg-gray-600"} transition`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile version */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col items-center justify-center gap-6 mt-6 text-4xl md:text-6xl font-bold text-black dark:text-white max-w-full md:max-w-[600px] w-auto h-auto md:hidden"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[4px] md:py-[8px] px-[4px] md:px-[7px] border border-cyan-400 dark:border-[#7042f88b] opacity-[0.9] bg-white dark:bg-[#181824] transition-colors text-center"
        >
          {school.map((school) => (
            <Image
              key={school.name}
              src={school.logo}
              alt={school.name}
              width={40}
              height={20}
              className="cursor-pointer hover:brightness-75 transition duration-300"
            />
          ))}
          <h1 className="text-[10px] md:text-[13px] font-bold !text-black dark:!text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400">
            - MS Software Engineering
          </h1>
        </motion.div>

        <span className="text-center text-black dark:text-white">
          Hi👋, I&apos;m
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-cyan-400">
            {" "}
            Aditya Patil{" "}
          </span>
          Software Developer
        </span>

        <div className="flex flex-row gap-2 justify-center">
          <motion.a
            variants={slideInFromLeft(1)}
            href="/Resume_Aditya Patil.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 button-primary text-center text-black dark:text-white cursor-pointer rounded-full max-w-[150px] flex items-center justify-center text-sm gap-2 md:hidden"
          >
            <TbFileCv className="text-xl" />
            CV
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            href="#contact"
            className="py-1 button-primary text-center text-black dark:text-white cursor-pointer rounded-full max-w-[150px] flex items-center justify-center text-sm gap-2 md:hidden"
          >
            <SiMinutemailer className="text-xl" />
            Contact
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;