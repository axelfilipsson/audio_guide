import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import { createContext } from "react";

import ConsentPopup from './GlobalComponents/ConsentPopup'
import React, { useState, useEffect } from 'react';

import TUSSILAGO from './pages/GuidePages/TUSSILAGO'


const MainContext = createContext(null);




function App() {
  const [popup, setPopup] = useState(true);
  const [underAged, setUnderAged] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem('consent'))
    if (localStorage.getItem('consent') != null) {
      setPopup(JSON.parse(localStorage.getItem('consent')))
      setUnderAged(JSON.parse(localStorage.getItem('underAged')))
    }


  }, []);

  return (

    <div className="App">
      {popup ? <ConsentPopup setUnderAged={setUnderAged} setPopup={setPopup} /> : null}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage underAged={underAged} />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/TUSSILAGO" element={<TUSSILAGO underAged={underAged} popup={popup} />} />
        
        </Routes>
      </Router>
    </div>

  );
}

export default App;



