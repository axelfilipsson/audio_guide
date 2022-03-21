import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import QuestionsPage from './pages/QuestionsPage/QuestionsPage'
import {createContext } from "react";

import TUSSILAGO from './pages/GuidePages/TUSSILAGO'
import SKEN from './pages/GuidePages/SKEN'

const MainContext = createContext(null);



function App() {

  return (

      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/TUSSILAGO" element={<TUSSILAGO />} />
            <Route path="/SKEN" element={<SKEN />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;



