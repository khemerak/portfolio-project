// src/components/Contact.tsx
"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    if (form.current) {
      emailjs
        .sendForm(
          'service_c1cyrhs',    // Service ID
          'template_taoyo7w',   // Template ID
          form.current,
          'mTItcmctze20hIgNV'     // Public ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus('Message sent! Thanks for reaching out, Prinze will get back to you soon.');
            e.currentTarget.reset(); // Clears the form after sending
          },
          (error) => {
            console.log(error.text);
            setStatus('Oops, something went wrong. Please try again.');
          }
        );
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:py-20 md:px-8 max-w-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">Contact Me</h2>
      <p className="text-md md:text-lg text-muted-foreground text-center mb-8">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-muted-foreground text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name" // Added name attribute
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-muted-foreground text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email" // Added name attribute
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-muted-foreground text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Added name attribute
            rows={5}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-4 text-muted-foreground">{status}</p>}
      </form>
    </section>
  );
}
