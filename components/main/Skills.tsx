import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";

const allSkills = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill,
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-[96px] flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
    >
      <h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 mt-0"
      >
        Skills
      </h1>
      <div className="w-full max-w-5xl mx-auto flex flex-wrap gap-x-5 gap-y-6 px-5">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-gradient-to-r from-purple-500 to-cyan-500/80 rounded-full px-8 py-4 shadow button-primary transition hover:opacity-90"
            style={{ height: "60px" }}
          >
            <SkillDataProvider
              src={skill.Image}
              width={40}
              height={40}
              index={index}
            />
            <span className="ml-4 text-lg text-black dark:text-white font-semibold whitespace-nowrap">
              {skill.skill_name}
            </span>
          </div>
        ))}
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
            // src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;