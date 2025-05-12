import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogosSlider from "./components/LogosSlider";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Pupose from "./components/Pupose";
import Schedual from "./components/Schedual";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -left-28 -top-28 size-[500px] bg-gradient-to-r from-indigo-400/20  to-pink-500/20 blur-2xl -z-10 rounded-full" />
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <LogosSlider />
        <Pupose />
        <Features />
        <Schedual />
        <Pricing />
        <Services />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

export default App;
