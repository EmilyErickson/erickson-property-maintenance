import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import {HomePage} from './pages/HomePage';
import { Navbar } from './components/Navbar';
import {ErrorPage} from "./pages/ErrorPage";
import { Footer } from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;