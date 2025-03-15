"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          {school.map((school) => (
                      <Image
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
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi👋, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Aditya Patil{" "}
            </span>
            Software Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
                    {company.map((company) => (
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={96}
                        height={96}
                        className="cursor-pointer hover:brightness-75 transition duration-300"
                      />
                    ))}
          Ex- Veritas Technologies LLC.  <br />
          I&apos;m a Full Stack Software Engineer dedicated to building dynamic websites and software solutions. Explore my projects and skills!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/Resume_AdityaPatil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-2"
        >
          <TbFileCv className="text-2xl"/>
          Download CV
        </motion.a>


        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-2"
        >
          <SiMinutemailer className="text-2xl" />
          Contact Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >

        <Image
          src="/ap.png"
          alt="work icons"
          height={650}
          width={650}
          className="relative z-10 fade-bottom"
          />
      
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;