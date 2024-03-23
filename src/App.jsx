import { Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LegalPage } from './pages/LegalPage';
import {ErrorPage} from "./pages/ErrorPage";
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      <Navbar />
      <div className='main-page-container'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;