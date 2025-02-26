import { useState } from "react";
import Button from "../button/Button";
import styles from "./header.module.css";
import whiteLogo from "../../assets/logo-white.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.headerContainer}>
          <div className={styles.logoWrap}>
            <a href="/" aria-label="logo">
              <img src={whiteLogo} alt="logo" className={styles.logo} />
            </a>
          </div>

          <div
            className={`${styles.navMenu} ${
              menuOpen ? styles.navMenuOpen : ""
            }`}
          >
            <ul className={`nav-menu ${menuOpen ? "nav-menu--open" : ""}`}>
              <li>
                <a href="/work" className={styles.navLink}>
                  Work
                </a>
              </li>

              <li>
                <a href="/bio" className={styles.navLink}>
                  Biography
                </a>
              </li>

              <li>
                <a href="#contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Button active={menuOpen} onClick={handleMenuClick} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
