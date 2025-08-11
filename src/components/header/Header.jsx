import React from "react";
import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  const leftColumnArr = [
    <img key="logo" src={logo} alt="BRC ATV" className={styles.logo} />,
    "8 (800) 250-33-40",
    "ZAKAZ@BRCATV.RU",
    "СТАТЬ ДИЛЕРОМ",
  ];

  const rightColumnArr = [
    "ПРЕИМУЩЕСТВА",
    "СПЕЦИФИКАЦИИ",
    "ВИДЕО",
    "ГАЛЕРЕЯ",
    "ДИЛЕРЫ",
  ];

  return (
    <div className={styles.theme}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          {leftColumnArr.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </div>
        <div className={styles.rightColumn}>
          {rightColumnArr.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
