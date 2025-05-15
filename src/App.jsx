import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;