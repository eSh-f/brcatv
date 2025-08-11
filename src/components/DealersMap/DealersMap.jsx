import React from "react";
import styles from "./DealersMap.module.scss";
import map from "./map.png";

const Dealers = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>ДИЛЕРЫ</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.mapFull}>
        <img src={map} alt="Карта дилеров" />
      </div>
    </section>
  );
};

export default Dealers;
