import { Link } from 'react-router-dom';
import './header.css'; 

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/theme">Theme</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
