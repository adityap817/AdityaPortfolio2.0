"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // Removed FaPhone

const Footer = () => {
  // Simple form state (no validation for brevity)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Replace with your own email service or use a service like Formspree/Resend for production
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: open mail client
    window.location.href = `mailto:adityaapaatil8@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    setSubmitted(true);
  };

  return (
    <footer
      id="contact"
      className="w-full bg-background py-12 px-2 sm:px-4 text-foreground dark:text-foreground"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left: Contact Form */}
        <div className="flex-1 py-8 px-6 md:px-10 button-primary text-foreground dark:text-foreground rounded-xl shadow flex flex-col transition hover:opacity-90">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Get in Touch
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="rounded-lg px-4 py-3 bg-background border border-border text-foreground dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="rounded-lg px-4 py-3 bg-background border border-border text-foreground dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              required
              placeholder="Your Message"
              className="rounded-lg px-4 py-3 bg-background border border-border text-foreground dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
            {submitted && (
              <span className="text-green-400 text-sm mt-2">
                Thank you! Your message has been prepared for sending.
              </span>
            )}
          </form>
        </div>
        {/* Right: Contact Info */}
        <div className="flex-1 py-8 px-6 md:px-10 button-primary text-foreground dark:text-foreground rounded-xl shadow flex flex-col justify-between transition hover:opacity-90">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
              Contact Information
            </h2>
            <div className="mb-4 flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              <div>
                <div className="text-muted-foreground text-sm">Email</div>
                <div className="text-foreground dark:text-foreground font-medium">adityaapaatil8@gmail.com</div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              {/* <FaPhone className="text-purple-400" /> */}
              <FaEnvelope className="text-purple-400" />
              <div>
                <div className="text-muted-foreground text-sm">Email 2</div>
                <div className="text-foreground dark:text-foreground font-medium">alpatil1@asu.edu</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-muted-foreground text-sm mb-1">Follow Me</div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/adityap817/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground dark:text-foreground hover:text-cyan-400 transition text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/adityap817/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground dark:text-foreground hover:text-cyan-400 transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/adityapaatil_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground dark:text-foreground hover:text-cyan-400 transition text-2xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">Let&apos;s collaborate</h4>
            <p className="text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-muted-foreground text-sm">
        &copy; Aditya Patil 2025 Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;