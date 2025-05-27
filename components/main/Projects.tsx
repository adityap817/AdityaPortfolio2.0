import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="scroll-mt-24 flex flex-col items-center justify-center py-20 bg-background text-black dark:text-white transition-colors"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        My Projects
      </h1>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <ProjectCard
          src="/project-1.png"
          title="Scrum Simulator"
          description={
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
              <li>
                Built a Java-based Agile Scrum simulator
              </li>
              <li>
                Led sprint planning and retrospectives, improving team efficiency by 20%
              </li>
            </ul>
          }
          imgClassName="w-full h-[300px] object-cover rounded-xl"
          cardClassName="w-full h-[480px] rounded-xl flex flex-col justify-between bg-white dark:bg-[#181824] shadow transition-colors"
          titleClassName="text-xl font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          projectLink="https://github.com/SER515asu/ser515-crystal"
        />
        <ProjectCard
          src="/project-2.png"
          title="Travel Path: ItineraryPlanner"
          description={
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
              <li>
                Delivered personalized itineraries using GNIS-LD, SPARQL, and knowledge graphs
              </li>
              <li>
                Built with ReactJS, FastAPI for real-time, semantic trip planning
              </li>
            </ul>
          }
          imgClassName="w-full h-[300px] object-cover rounded-xl"
          cardClassName="w-full h-[480px] rounded-xl flex flex-col justify-between bg-white dark:bg-[#181824] shadow transition-colors"
          titleClassName="text-xl font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          projectLink="https://travel-path-chi.vercel.app/"
        />
        <ProjectCard
          src="/project-3.png"
          title="Go Text - Messenger"
          description={
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
              <li>
                Built with React and Firebase for real-time messaging and Google Auth
              </li>
              <li>
                Stored messages with timestamps and unique IDs using Firestore
              </li>
            </ul>
          }
          imgClassName="w-full h-[300px] object-cover rounded-xl"
          cardClassName="w-full h-[480px] rounded-xl flex flex-col justify-between bg-white dark:bg-[#181824] shadow transition-colors"
          titleClassName="text-xl font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          projectLink="https://github.com/adityap817/WhatsApp-CLone-ReactJS-"
        />
        <ProjectCard
          src="/project-4.png"
          title="Google Flights"
          description={
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
              <li>
                Recreated flight search UI using ReactJS, Material UI, and Google Places API
              </li>
              <li>
                Followed design specs to ensure accurate layout and location autocomplete
              </li>
            </ul>
          }
          imgClassName="w-full h-[300px] object-cover rounded-xl"
          cardClassName="w-full h-[480px] rounded-xl flex flex-col justify-between bg-white dark:bg-[#181824] shadow transition-colors"
          titleClassName="text-xl font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          projectLink="https://google-flights-prod.vercel.app/"
        />
        <ProjectCard
          src="/newproject.png"
          title="Adding Soon - Work in Progress"
          description={
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300">
 
            </ul>
          }
          imgClassName="w-full h-[300px] object-cover rounded-xl"
          cardClassName="w-full h-[480px] rounded-xl flex flex-col justify-between bg-white dark:bg-[#181824] shadow transition-colors"
          titleClassName="text-xl font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          projectLink="https://adityapaatil.tech/"
        />
        {/* Add more ProjectCards as needed */}
      </div>
    </div>
  );
};

export default Projects;