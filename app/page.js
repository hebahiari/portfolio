import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import RotateOnHover from "./components/Hero/RotateOnHover/RotateOnHover";
import MiniNav from "./components/Navbar/MiniNav";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <main className='mainContainer'>
        <MiniNav />
        <Navbar />
        <section>
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
