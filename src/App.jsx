import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import ConnectStore from "./components/ConnectStore";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <ProductShowcase />
      <ConnectStore />
      <Testimonials />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
