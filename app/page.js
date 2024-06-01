import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import RotateOnHover from "./components/Hero/RotateOnHover/RotateOnHover";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <main className={styles.main}>
        <Navbar />
        <RotateOnHover>
          <Hero />
        </RotateOnHover>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
