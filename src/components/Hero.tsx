// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      {/* Profile Picture Placeholder */}
      <div className="mx-auto rounded-full bg-muted w-32 h-32 flex items-center justify-center mb-6">
        <span className="text-5xl text-muted-foreground">👤</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Khemerak Pav</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8">IT Support Intern & Computer Science Graduate</p>
      <a
        href="mailto:pavkhemerak.official@gmail.com"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
}
