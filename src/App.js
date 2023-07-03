import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import {Contact} from './components/contact'; // Updated import statement
import Service from './components/service';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} /> {/* Updated component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
