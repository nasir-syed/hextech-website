import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TopNav from "./sections/TopNav";
import {Lenis}  from "lenis/react";
import Beams from "./components/Beams"
import LoadingAnimation from "./components/LoadingAnimation";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";



function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${loading ? "overflow-hidden h-screen" : ""}`}>
      {/* background */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={12}
          lightColor="#007fc2"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <TopNav />

      <Lenis root>
        <div className="w-screen min-h-screen relative">
          <section id="home" className="scroll-mt-12"><Hero /></section>
          <section id="about" className="scroll-mt-12"><About /></section>
          <section id="services" className="scroll-mt-12"><Services /></section>
          <section id="contact" className="scroll-mt-12"><Contact /></section>
          <Footer />
        </div>
      </Lenis>

      {loading && <LoadingAnimation onLoadingComplete={() => setLoading(false)} />}
    </div>
  );
}


export default App;
