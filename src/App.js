import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Connexion from "./Connexion";
/* import Series from "./Series";
import Contact from "./Contact";
import Connexion from "./Connexion"; */
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/series" element={<Series />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
