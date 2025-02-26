import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div>
        <p className={styles.footerText}>Made by Konstantina Baka</p>
      </div>
    </footer>
  );
}

export default Footer;