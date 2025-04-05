import React, { useState } from "react"; // ✅ Only import once
import ContactModal from "./components/ContactModal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import USPSection from "./components/USPSection";

import Footer from "./components/Footer";
import ServicesCarousel from "./components/ServicesCarousel";

const App = () => {
  const [showModal, setShowModal] = useState(false); // ✅ State to control modal

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ServicesCarousel />
      <USPSection />
      <Footer />
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
