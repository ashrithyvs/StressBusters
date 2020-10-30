import React from "react";
import Navbar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";
import Contact from "./contact";
import Footer from "./footer";
import Pricing from "./pricing";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
