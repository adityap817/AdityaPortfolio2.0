"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 font-mono" >
            Aditya Patil
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#" className="cursor-pointer">
              About 
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center w-full">
          <button onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="flex flex-row gap-5 justify-center w-full">
          {Socials.map((social) => (
            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" > 
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:brightness-75 transition duration-300"
            //   onClick={() => window.open(social.url, "_blank")}
            />
            </a>
          ))}
        </div>
        </div>


      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0300145e] text-gray-200 py-5">
          <a href="#" className="cursor-pointer py-2" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="cursor-pointer py-2" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="cursor-pointer py-2" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="cursor-pointer py-2" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}

    </div>
  );
};

export default Navbar;