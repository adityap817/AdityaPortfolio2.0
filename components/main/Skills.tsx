
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="w-full max-w-5xl mx-auto mt-4 px-5">
      <div className="flex flex-row gap-5 items-center">
      <h2 className="text-xl font-bold text-white w-1/5">Languages</h2>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-start flex-grow">
        {Skill_data.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
          <span className="mt-2 text-sm text-white">{image.skill_name}</span> 
          </div>
        ))}
        </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-4 px-5">
      <div className="flex flex-row gap-5 items-center">
      <h2 className="text-xl font-bold text-white w-1/5">Libraries & Frameworks</h2>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-start flex-grow">
        {Frontend_skill.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
          <span className="mt-2 text-sm text-white">{image.skill_name}</span> 
          </div>
        ))}
        </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-4 px-5">
      <div className="flex flex-row gap-5 items-center">
      <h2 className="text-xl font-bold text-white w-1/5">Databases</h2>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-start flex-grow">
        {Backend_skill.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
          <span className="mt-2 text-sm text-white">{image.skill_name}</span> 
          </div>
        ))}
        </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-4 px-5">
      <div className="flex flex-row gap-5 items-center">
      <h2 className="text-xl font-bold text-white w-1/5">DevOps Tools</h2>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-start flex-grow">
        {Full_stack.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
          <span className="mt-2 text-sm text-white">{image.skill_name}</span> 
          </div>
        ))}
        </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-4 px-5">
      <div className="flex flex-row gap-5 items-center">
      <h2 className="text-xl font-bold text-white w-1/5">Cloud Tech.</h2>
      <div className="flex flex-row justify-start flex-wrap gap-5 items-start flex-grow">
        {Other_skill.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
          <span className="mt-2 text-sm text-white">{image.skill_name}</span> 
          </div>
        ))}
        </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
