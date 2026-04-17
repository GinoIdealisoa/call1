import React from "react";

import Navbar from "./layouts/Navbar";

import HeroSection from "./pages/HeroSection";
import Services from "./pages/Services";
import WhyChooseSection from "./pages/WhyChooseSection";
import CTASection from "./pages/CTASection";
import Contact from "./pages/Contact";
import DemoSection from "./pages/DemoSection";
import Footer from "./layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="font-inter overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <Services />
        <WhyChooseSection />
        <DemoSection/>
        <CTASection />
        {/* <Contact /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;