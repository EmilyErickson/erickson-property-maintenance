import { Link } from 'react-router-dom';
import "../pages/homePage.css"

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className='nav-link image'><img className="image"  src="./Logo2.png" alt="logo" /></Link>
        <Link to="/" className='nav-link home'>ERICKSON PROPERTY MAINTENANCE</Link>
      </div>
    </nav>
  );
}

export {Navbar}