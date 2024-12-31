import Image from "next/image";
import Navbar from "./dev/Navbar/Navbar";
import Hero from "./dev/Hero/Hero";
import About from "./dev/About/About";
import Projects from "./dev/Projects/Projects";
import Contact from "./dev/Contact/Contact";
import Footer from "./dev/Footer/Footer";
import Background from "./dev/Background/Background";
import RotateOnHover from "./dev/Hero/RotateOnHover/RotateOnHover";
import MiniNav from "./dev/Navbar/MiniNav";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <main className='mainContainer'>
        <MiniNav />
        <Navbar />
        <section id='hero'>
          <RotateOnHover>
            <Hero />
          </RotateOnHover>
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section className="lastSection">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
