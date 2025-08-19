// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        // replace with your own image or a /public path
        backgroundImage:
          "url('https://images.unsplash.com/photo-1570211776080-0bc7c5a3b31c')",
      }}
      aria-label="Landing hero"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content (hero copy / CTA) */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <Hero />
      </div>
    </section>
  );
}
