import React from "react";
import styles from "./ModelATV.module.scss";
import logo from "../../assets/logoBlack.svg";

const ModelAtv = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />{" "}
        </div>

        <div className={styles.title}>
          <h2>X-TERRA CT</h2>
        </div>

        <div className={styles.years}>
          <h4>2025</h4>
        </div>

        <div className={styles.description}>
          Приготовьтесь новым приключениям с новым X-TERRA CT! Разработанный для
          эксплуатации в самых тяжелых условия, он предлагает оптимальное
          соотношение мощности и комфорта. Созданный для максимальной
          производительности на любой местности и в любое время года, он готов
          справиться с любой задачей или внедорожным приключением, которое вы
          ему предложите.
        </div>
      </div>
    </div>
  );
};

export default ModelAtv;
