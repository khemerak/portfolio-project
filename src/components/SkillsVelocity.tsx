
"use client";

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPython,
  SiC,
  SiCplusplus,
  SiAmazon,
  SiLinux,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiDotnet,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";
import useMedia from "use-media";

const skills = [
  { name: "JavaScript ", icon: <SiJavascript className="w-12 h-12" /> },
  { name: "ReactJS ", icon: <SiReact className="w-12 h-12" /> },
  { name: "HTML5 ", icon: <SiHtml5 className="w-12 h-12" /> },
  { name: "CSS3 ", icon: <SiCss3 className="w-12 h-12" /> },
  { name: "PHP ", icon: <SiPhp className="w-12 h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12" /> },
  { name: "SQL", icon: <DiDatabase className="w-12 h-12" /> },
  { name: "MySQL", icon: <SiMysql className="w-12 h-12" /> },
  { name: "Python ", icon: <SiPython className="w-12 h-12" /> },
  { name: "Java", icon: <FaJava className="w-12 h-12" /> },
  { name: "C", icon: <SiC className="w-12 h-12" /> },
  { name: "C++", icon: <SiCplusplus className="w-12 h-12" /> },
  { name: "C#", icon: <SiDotnet className="w-12 h-12" /> },
  { name: "AWS", icon: <SiAmazon className="w-12 h-12" /> },
  { name: "Linux", icon: <SiLinux className="w-12 h-12" /> },
  { name: "Git", icon: <SiGit className="w-12 h-12" /> },
  { name: "GitHub", icon: <SiGithub className="w-12 h-12" /> },
  { name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
  { name: "Postman", icon: <SiPostman className="w-12 h-12" /> },
];

export default function SkillsVelocity() {
  const isMobile = useMedia({ maxWidth: 768 });

  return (
    <section className="py-16 md:py-20" id="skills-velocity">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        My Tech Stack
      </h2>
      {isMobile ? (
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-8 h-8">{skill.icon}</div>
              <span className="text-muted-foreground text-center text-xs">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={-5}>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {skills.slice(0, 10).map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                >
                  {skill.icon}
                  <span className="text-muted-foreground ">{skill.name}</span>
                </div>
              ))}
            </div>
          </ScrollVelocityRow>
          <br />
          <ScrollVelocityRow baseVelocity={5}>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {skills.slice(10).map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                >
                  {skill.icon}
                  <span className="text-muted-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      )}
    </section>
  );
}
