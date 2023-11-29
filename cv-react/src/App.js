import React from 'react'

//styles
// main.css импортирует внутри reset.css
import "./styles/main.css"

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">

      <Navbar />

      {/* <Homepage /> */}
      <Projects />
      {/* <Contacts /> */}

      <Footer />

    </div>
  );
}

export default App;
