import React from "react";
import styles from "../hero/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={styles.title}>ВСТРЕЧАЙТЕ НОВЫЙ X-TERRA CT!</div>
      </div>
    </div>
  );
};

export default Hero;
