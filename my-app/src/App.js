import React from "react";
import Hero from "./Components/Hero";
import "./assets/styles.css";
import AboutMe from "./Components/AboutMe";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}
