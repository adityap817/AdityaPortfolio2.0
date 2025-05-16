import React from "react";
import Image from "next/image";

const specializations = [
  {
    title: "Frontend Development",
    desc: "Creating responsive, accessible, and performant user interfaces",
  },
  {
    title: "Backend Development",
    desc: "Building robust APIs and server-side applications",
  },
  {
    title: "Database Design",
    desc: "Creating efficient data models and query optimization",
  },
  {
    title: "Clean Architecture",
    desc: "Writing maintainable, scalable, and testable code",
  },
  {
    title: "Cloud & DevOps + Agile",
    desc: "AWS, Vercel, CI/CD",
  },
];

function About() {
  return (
    <section className="w-full flex flex-col justify-center py-10 px-2 sm:px-6 md:px-12 lg:px-24 xl:px-40 bg-background dark:bg-background text-foreground dark:text-foreground">
      <h1
        id="about"
        className="scroll-mt-[72px] text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 text-center"
      >
        About Me - Education - Work Experience
      </h1>
      <div className="w-full bg-card dark:bg-card rounded-2xl shadow-lg border border-border dark:border-border px-2 sm:px-4 md:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-12">
        {/* Left: About Paragraph + Specializations */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <p className="text-base md:text-lg leading-relaxed text-foreground dark:text-foreground">
            Hi! I&apos;m{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Aditya Patil
            </span>
            , a passionate software developer focused on building scalable web applications and delightful user experiences. I thrive on solving complex problems and love learning new technologies to stay ahead in the fast-evolving tech world.
          </p>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Specializations
            </h3>
            <div className="flex flex-col gap-2">
              {specializations.map((spec) => (
                <div
                  key={spec.title}
                  className="py-2 px-3 md:px-4 button-primary text-foreground dark:text-foreground rounded-xl shadow flex flex-col transition hover:opacity-90"
                >
                  <div className="text-sm md:text-base font-semibold">{spec.title}</div>
                  {spec.desc && (
                    <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">{spec.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Education & Experience Timeline */}
        <div className="flex-1 flex flex-col gap-8 min-w-0 md:pl-16 lg:pl-24">
          {/* Education Timeline */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Education
            </h3>
            <div className="relative pl-6 flex flex-col gap-8">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full opacity-40" />
              {/* Timeline items */}
              <div className="flex items-center gap-3 relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full absolute -left-4 top-1.5 border-2 border-background dark:border-background" />
                <div className="w-12 h-8 md:w-16 md:h-10 rounded-lg flex items-center justify-center z-10 bg-transparent">
                  <Image
                    src="/asu.png"
                    alt="ASU"
                    width={56}
                    height={32}
                    className="w-10 h-6 md:w-14 md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground text-sm md:text-base">MS Software Engineering</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground">Arizona State University</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">2024 - 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-3 relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full absolute -left-4 top-1.5 border-2 border-background dark:border-background" />
                <div className="w-12 h-8 md:w-16 md:h-10 rounded-lg flex items-center justify-center z-10 bg-transparent">
                  <Image
                    src="/sppu.png"
                    alt="Pune University"
                    width={56}
                    height={32}
                    className="w-10 h-6 md:w-14 md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground text-sm md:text-base">B.E Computer Engineering</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground">Pune University</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">2019 - 2023</div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Timeline */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experience
            </h3>
            <div className="relative pl-6 flex flex-col gap-8">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full opacity-40" />
              {/* Timeline items */}
              <div className="flex items-center gap-3 relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full absolute -left-4 top-1.5 border-2 border-background dark:border-background" />
                <div className="w-12 h-8 md:w-16 md:h-10 rounded-lg flex items-center justify-center z-10 bg-transparent">
                  <Image
                    src="/cohesity.webp"
                    alt="Company 1"
                    width={56}
                    height={32}
                    className="w-10 h-6 md:w-14 md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground text-sm md:text-base">Cohesity Inc.</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground">Summer Intern</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">2025 - Present</div>
                </div>
              </div>
              <div className="flex items-center gap-3 relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full absolute -left-4 top-1.5 border-2 border-background dark:border-background" />
                <div className="w-12 h-8 md:w-16 md:h-10 rounded-lg flex items-center justify-center z-10 bg-transparent">
                  <Image
                    src="/asu.png"
                    alt="ASU"
                    width={56}
                    height={32}
                    className="w-10 h-6 md:w-14 md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground text-sm md:text-base">Arizona State University</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground">Program Aide - Chandler Endeavor</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">2024 - Present</div>
                </div>
              </div>
              <div className="flex items-center gap-3 relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full absolute -left-4 top-1.5 border-2 border-background dark:border-background" />
                <div className="w-12 h-8 md:w-16 md:h-10 rounded-lg flex items-center justify-center z-10 bg-transparent">
                  <Image
                    src="/veritas.png"
                    alt="Veritas"
                    width={56}
                    height={32}
                    className="w-10 h-6 md:w-14 md:h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground text-sm md:text-base">Veritas Technologies LLC</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground"> - Assoc. IT Apps Specialist</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">July 2023 - Aug 2024</div>
                  <div className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground"> - Intern</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">Jan 2023 - June 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;