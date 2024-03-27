import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../pages/homePage.css"

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <button className="hamburger-menu" onClick={toggleMenu}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
    </button>
    <nav className={`sidebar ${isOpen ? 'open' : 'hidden'}`}>
      <div className="sidebar-container">
        <Link to="/" className='sidebar-link home' onClick={toggleMenu}>Home</Link>
        <Link to="/about" className='sidebar-link about' onClick={toggleMenu}>About</Link>
        <Link to="/contact" className='sidebar-link contact' onClick={toggleMenu}>Contact</Link>
        <Link to="/portfolio" className='sidebar-link portfolio' onClick={toggleMenu}>Portfolio</Link>
        <Link to="/legal" className='sidebar-link legal' onClick={toggleMenu}>Legal</Link>
      </div>
    </nav>
    </ div>
  );
}

export {Sidebar}