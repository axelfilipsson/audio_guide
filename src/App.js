import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import { createContext } from "react";

import ConsentPopup from './GlobalComponents/ConsentPopup'
import React, { useState, useEffect } from 'react';

import OMKONSTEN from './pages/GuidePages/OMKONSTEN'
import DROTTNINGHOLM from './pages/GuidePages/DROTTNINGHOLM'
import TRAGEDIN from './pages/GuidePages/TRAGEDIN'
import DRAMATSSKAPELSE from './pages/GuidePages/DRAMATSSKAPELSE'
import GUSTAVIII from './pages/GuidePages/GUSTAVIII'
import KOMEDIN from './pages/GuidePages/SKULPTUR'




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
          <Route path="/OMKONSTEN" element={<OMKONSTEN questionConsent={questionConsent}  popup={popup} />} />
          <Route path="/TRAGEDIN" element={<TRAGEDIN questionConsent={questionConsent} popup={popup} />} />
          <Route path="/DROTTNINGHOLM" element={<DROTTNINGHOLM questionConsent={questionConsent} popup={popup} />} />
          <Route path="/GUSTAVIII" element={<GUSTAVIII questionConsent={questionConsent}  popup={popup} />} />
          <Route path="/KOMEDIN" element={<KOMEDIN questionConsent={questionConsent}  popup={popup} />} />
        
        </Routes>
      </Router>
    </div>

  );
}

export default App;



