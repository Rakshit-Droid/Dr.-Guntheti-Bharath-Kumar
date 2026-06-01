import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Teaching } from "@/components/Teaching";
import { Research } from "@/components/Research";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Teaching />
        <Research />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
