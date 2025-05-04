import "./style.scss";
import "./section/navbar/navbar";
import Navbar from "./section/navbar/navbar";
import Hero from "./section/hero/hero";
import Features from "./section/features/features";
import React from "./components/cards/card";
import Footer from "./section/footer/footer";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App
