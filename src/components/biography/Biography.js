import styles from "./biography.module.css";

function Biography() {
  return (
    <div className="container">
      <h3 id="biography">BIOGRAPHY</h3>

      <div className={styles.bioContainer}>
        <div className={styles.bioImage}>
          <img
            src="https://ucarecdn.com/85698eb3-e145-4871-871f-6ffbfa6f5136/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
            alt="Katerina Rimpatsiou"
          ></img>
        </div>
        <div>
          <p className={styles.bioText}>
            Katerina Rimpatsiou was born in Litochoro Pierias and she studied in
            A.S.F.A. (Athens School of Fine Arts) at the workshop of Nikos
            Kessanlis, from 1986 to 1992. She completed a postgraduate diploma
            titled “Synaesthesia and Visual Arts – Influence of the synaesthetic
            phenomenon in creativity” in Graphic Arts and Multimedia Section at
            the H.O.U. (Hellenic Open University) She is a founding member of
            the art platform “Events Horizon” and she has participated in 3 solo
            shows in Greece and many group exhibitions in Greece, France, Italy
            and Turkey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Biography;
