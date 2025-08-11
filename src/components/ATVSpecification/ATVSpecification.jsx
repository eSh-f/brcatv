import React from "react";
import styles from "./ATVSpecification.module.scss";
import atvImage from "../../assets/atv-.png";
import logo from "../../assets/logoBlack.svg";

const ATVSpecification = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.subtitle}>СПЕЦИФИКАЦИЯ</h3>
        <div className={styles.line} />
      </div>

      <div className={styles.row}>
        <div className={styles.image}>
          <img src={atvImage} alt="ATV" />
        </div>

        <div className={styles.info}>
          <img className={styles.logo} src={logo} alt="logo" />

          <h2 className={styles.title}>
            Квадроцикл X‑TERRA CT от компании BRC
          </h2>

          <div className={styles.year}>2025</div>

          <div className={styles.divider} />

          <p className={styles.description}>
            Ощутите настоящую мощь с новым квадроциклом X‑TERRA CT! Надёжный
            двигатель и регулируемая подвеска позволяют вам на 100% использовать
            весь его потенциал. Активные райдеры по‑настоящему оценят спортивный
            характер этого квадроцикла!
          </p>

          <ul className={styles.specList}>
            <li>Двигатель 4‑тактный V‑Twin, 2‑х цилиндровый</li>
            <li>
              Подключаемый привод 2WD / 4WD / блокировка 4WD с передним
              дифференциалом Visco‑4Lok
            </li>
            <li>Вариатор CVT</li>
            <li>Срок доставки: от 7 до 30 дней</li>
          </ul>

          <span className={styles.link}>ПОКАЗАТЬ ВСЕ ХАРАКТЕРИСТИКИ</span>
        </div>
      </div>
    </div>
  );
};

export default ATVSpecification;
