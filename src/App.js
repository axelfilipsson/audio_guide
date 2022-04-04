import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import { createContext } from "react";

import ConsentPopup from './GlobalComponents/ConsentPopup'
import React, { useState, useEffect } from 'react';

import OMDRAMATEN from './pages/GuidePages/OMDRAMAT'
import KOMEDINOCHTRAGEDIN from './pages/GuidePages/KOMEDINOCHTRAGEDIN'
import DRAMATSSKAPELSE from './pages/GuidePages/DRAMATSSKAPELSE'
import GUSTAVIIIKOMPLIMENTERANDEFRUOLIN from './pages/GuidePages/GUSTAVIIIKOMPLIMENTERANDEFRUOLIN'



const MainContext = createContext(null);

function App() {
  const [popup, setPopup] = useState(true);
  const [questionConsent, giveQuestionConsent] = useState(false)

  useEffect(() => {
    console.log(localStorage.getItem('consent'))
    if (localStorage.getItem('consent') != null) {
      setPopup(JSON.parse(localStorage.getItem('consent')))
      giveQuestionConsent(JSON.parse(localStorage.getItem('questionConsent')))
    }
  }, []);

  return (

    <div className="App">
      {popup ? <ConsentPopup setPopup={setPopup} /> : null}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/questions" element={<QuestionsPage popup={popup} questionConsent={questionConsent}giveQuestionConsent={giveQuestionConsent}/>} />
          <Route path="/DRAMATSSKAPELSE" element={<DRAMATSSKAPELSE questionConsent={questionConsent} popup={popup} />} />
          <Route path="/OMKONSTEN" element={<OMDRAMATEN questionConsent={questionConsent}  popup={popup} />} />
          <Route path="/KOMEDINOCHTRAGEDIN" element={<KOMEDINOCHTRAGEDIN questionConsent={questionConsent} popup={popup} />} />
          <Route path="/GUSTAVIIIKOMPLIMENTERANDEFRUOLIN" element={<GUSTAVIIIKOMPLIMENTERANDEFRUOLIN questionConsent={questionConsent}  popup={popup} />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;



