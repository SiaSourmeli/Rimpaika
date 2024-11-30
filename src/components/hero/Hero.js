import styles from './hero.module.css'

function Hero() {
  return (
    <div id="hero" className={styles.heroContainer}>
      <img
        src="https://ucarecdn.com/995f41c5-7568-4230-94c7-7fad05b251cc/-/preview/1500x1152/-/quality/smart_retina/-/format/auto/"
        alt="painting"
        className={styles.heroImage}
      />
    <div className={styles.darkenOverlay}></div>

      {/* <div className={styles.homeImageText}>
        <h1 className={styles.homeTitleH1}>Art by</h1>
        <span className={styles.homeTitleH2}>KATERINA RIMPATSIOU</span>
      </div> */}
    </div>
  );
}

export default Hero;
