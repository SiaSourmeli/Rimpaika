import { useState } from 'react';
import Button from './button/Button';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen)

      return(
        <header>
                <nav className="navbar">

                <div><a href="#home" className="nav-logo">KR</a></div>
                
                <ul className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}>
                    <li className="nav-item">
                        <a href="#selected-work" className="nav-link">Selected Work</a>
                    </li>

                    <li className="nav-item"> 
                        <a href="#exhibitions" className="nav-link">Exhibitions</a>
                    </li>

                    <li className="nav-item">
                        <a href="#biography" className="nav-link">Biography</a>
                    </li>

                    <li className="nav-item">          
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>

               <Button active={menuOpen} onClick={() => {setMenuOpen(!menuOpen) }} />
            </nav>

        </header>
      )
}

export default Header;
