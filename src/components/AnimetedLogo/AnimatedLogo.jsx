import React from "react";
import styles from "./AnimetedLogo.module.scss";
import logo from "../../assets/logoBlack.svg";

const AnimatedLogo = () => {
  const items = Array.from({ length: 30 }, () => logo);

  return (
    <div className={styles.wrapper}>
      <div className={styles.reel}>
        <div className={styles.group}>
          {items.map((src, i) => (
            <img className={styles.item} src={src} alt="logo" key={`g1-${i}`} />
          ))}
        </div>

        <div className={styles.group} aria-hidden="true">
          {items.map((src, i) => (
            <img className={styles.item} src={src} alt="" key={`g2-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
