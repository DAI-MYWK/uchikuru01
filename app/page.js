import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Works from "./sections/Works";
import Plans from "./sections/Plans";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Plans />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
