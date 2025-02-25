import { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./header.module.css";
import whiteLogo from '../../assets/logo-white.png'


function Header() {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [hideHeader, setHideHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });

      if (!menuOpen && window.scrollY > 250) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (scrollData.y > 250 && scrollData.y - scrollData.lastY > 0) {
      // scrollData.y - scrollData last > 0  this means we are scrolling UP
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [scrollData]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${hideHeader ? styles.slideUp : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.headerContainer}>
          <div>
            <a href="/" className={styles.navLogo} aria-label="logo">
            <img src={whiteLogo} alt=" logo" className={styles.logo}/>
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
                <a href="/contact" className={styles.navLink}>
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
