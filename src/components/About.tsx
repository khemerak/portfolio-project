// src/components/About.tsx
import { LineShadowText } from "@/components/ui/line-shadow-text";

export default function About() {
  return (
    <section className="py-16 px-4 md:py-20 md:px-8 max-w-4xl mx-auto" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
        Hi, I&apos;m Khemerak Pav, AKA <LineShadowText>Prinze</LineShadowText>.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        I am a Computer Science graduate and IT professional with a knack for
        solving problems. With a strong command of ReactJS, PHP, and TypeScript,
        I combine software development skills with practical IT operations
        knowledge, including Linux administration and AWS cloud hosting. When
        I&apos;m not coding or managing systems, you can find me staying active on
        the football field or keeping up with the latest tech trends.
      </p>
    </section>
  );
}
