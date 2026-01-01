import Navbar from "../components/Navbar";
import ConsultationSection from "../components/ConsultationSection";
import Projects from "../pages/Projects";
import Clients from "../components/Clients";
import Newsletter from "../components/Newsletter";
import React from 'react'

export default function Home() {
  return (
    <>

      <ConsultationSection />

      <div className="container">
        <Projects />
        <Clients />
        <Newsletter />
      </div>
    </>
  );
}
