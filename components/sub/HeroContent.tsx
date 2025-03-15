"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TbFileCv } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { company } from "@/constants";
import { school } from "@/constants";



const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
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
          <h1 className="Welcome-text text-[13px]">
            - MS Software Engineering
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span className="hidden md:block" >
            Hi👋, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Aditya Patil{" "}
            </span>
            Software Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px] hidden md:block"
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
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] items-center justify-center gap-2 hidden md:flex"
        >
          <TbFileCv className="text-2xl" />
          Download CV
        </motion.a>


        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] items-center justify-center gap-2 hidden md:flex"
        >
          <SiMinutemailer className="text-2xl" />
          Contact Me
        </motion.a>
      </div>


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >

        <Image
          src="/ap.png"
          alt="work icons"
          height={650}
          width={650}
          className="relative z-10 fade-bottom"
        />

      </motion.div>

{/* NEW components */}

<motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col items-center justify-center gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto md:hidden"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[4px] md:py-[8px] px-[4px] md:px-[7px] border border-[#7042f88b] opacity-[0.9] text-center"
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
          <h1 className="Welcome-text text-[10px] md:text-[13px]">
            - MS Software Engineering
          </h1>
        </motion.div>

        <span className="text-center">
          Hi👋, I&apos;m
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
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
            className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] flex items-center justify-center text-sm gap-2 md:hidden"
          >
            <TbFileCv className="text-xl" />
            CV
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-1 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] flex items-center justify-center text-sm gap-2 md:hidden"
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