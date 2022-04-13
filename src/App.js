import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'

import React, { useState, useEffect } from 'react';

import OMKONSTEN from './pages/GuidePages/OMKONSTEN'
import DROTTNINGHOLM from './pages/GuidePages/DROTTNINGHOLM'
import TRAGEDIN from './pages/GuidePages/TRAGEDIN'
import DRAMATSSKAPELSE from './pages/GuidePages/DRAMATSSKAPELSE'
import GUSTAVIII from './pages/GuidePages/GUSTAVIII'
import KOMEDIN from './pages/GuidePages/SKULPTUR'
import OMBOKEN from './pages/GuidePages/OMBOKEN'


function App() {
  const [popup, setPopup] = useState(true);
  const [questionConsent, giveQuestionConsent] = useState(false)

  useEffect(() => {
    giveQuestionConsent(JSON.parse(localStorage.getItem('questionConsent')))
   setPopup(JSON.parse(localStorage.getItem('popup')))
  }, []);

  return (

    <div className="App">
      {/* {popup ? <ConsentPopup setPopup={setPopup} /> : null} */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/questions" element={<QuestionsPage setPopup={setPopup} popup={popup} questionConsent={questionConsent} giveQuestionConsent={giveQuestionConsent} />} />
          <Route path="/DRAMATSSKAPELSE" element={<DRAMATSSKAPELSE   setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/OMKONSTEN" element={<OMKONSTEN  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/TRAGEDIEN" element={<TRAGEDIN  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/DROTTNINGHOLM" element={<DROTTNINGHOLM  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/GUSTAVIII" element={<GUSTAVIII  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/KOMEDIEN" element={<KOMEDIN  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />
          <Route path="/OMBOKEN" element={<OMBOKEN  setPopup={setPopup} questionConsent={questionConsent} popup={popup} />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;



