import styles from "./contact.module.css";
import facebookLogo from "../../assets/facebook-logo.svg";
// import instagramLogo from "../../assets/instagram-logo.svg";

function Contact() {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h3>CONTACT</h3>

      <div className={styles.textWrap}>
        <div className={styles.contactInfo}>
          <a href="mailto:rimpaika@gmail.com" className="underlineHoverEffect">
            rimpaika@gmail.com
          </a>
        </div>
        <div  className={styles.contactInfo}>
          <a href="tel:697-787-6313">+30 697 787 6313</a>
        </div>
      </div>
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

            {/* instagram */}
            {/* <a
              href="https://www.facebook.com/rimpaika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="instagram logo" />
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
