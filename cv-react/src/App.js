import React from 'react'

import { Routes, Route } from "react-router-dom";

//styles
// main.css импортирует внутри reset.css
import "./styles/main.css"

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ChosenProject from './pages/ChosenProject';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      {/* ReactRouter v5, для ScrollRestoration нужно переписывать на RouterProveder */}
      <ScrollToTop />
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ChosenProject />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
