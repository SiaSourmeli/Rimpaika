import styles from "./contact.module.css";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";

function Contact() {
  return (
    <div id="contact" className="container">
      <h3>CONTACT</h3>

      <div className={styles.textWrap}>
        <a
          href="mailto:rimpaika@gmail.com"
          className={styles.underlineHoverEffect}
        >
          rimpaika@gmail.com
        </a>
        <p>+30 697 787 6313</p>

        <div className={styles.mediaWrap}>
          <ul>
            <li className={styles.media}>
              <a
                href="https://www.facebook.com/rimpaika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookLogo} alt="facebook logo" />
              </a>

              <a
                href="https://www.facebook.com/rimpaika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramLogo} alt="instagram logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
