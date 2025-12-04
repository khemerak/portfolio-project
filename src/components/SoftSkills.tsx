
"use client";

import MagicBento, { MagicBentoItem } from "./ui/magic-bento";

const softSkills = [
  "Bilingual in Khmer and English",
  "Adaptable and open to new ideas",
  "Works effectively independently and in a team",
  "Collaborates and communicates effectively",
  "Brainstorming and critical thinking",
  "Calm and effective under stress",
  "Quick learner",
];

export default function SoftSkills() {
  return (
    <section className="py-16 px-4 md:py-20 md:px-8" id="soft-skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Soft Skills
      </h2>
      <div className="flex justify-center px-4">
        <MagicBento
          textAutoHide={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          glowColor="132, 0, 255"
          className="w-full max-w-4xl"
        >
          <MagicBentoItem className="col-span-3 sm:col-span-2">
            <h3 className="text-xl font-semibold">{softSkills[0]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3 sm:col-span-1">
            <h3 className="text-xl font-semibold">{softSkills[1]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3 sm:col-span-1">
            <h3 className="text-xl font-semibold">{softSkills[2]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3 sm:col-span-2">
            <h3 className="text-xl font-semibold">{softSkills[3]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3 sm:col-span-2">
            <h3 className="text-xl font-semibold">{softSkills[4]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3 sm:col-span-1">
            <h3 className="text-xl font-semibold">{softSkills[5]}</h3>
          </MagicBentoItem>
          <MagicBentoItem className="col-span-3">
            <h3 className="text-xl font-semibold">{softSkills[6]}</h3>
          </MagicBentoItem>
        </MagicBento>
      </div>
    </section>
  );
}
