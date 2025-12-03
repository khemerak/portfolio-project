// src/components/Contact.tsx
export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-foreground mb-8">Contact Me</h2>
      <p className="text-lg text-muted-foreground text-center mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-muted-foreground text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-muted-foreground text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-muted-foreground text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
