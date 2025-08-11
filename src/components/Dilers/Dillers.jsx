import React from "react";
import styles from "../hero/Hero.module.scss";
import logo from "../../assets/logo.svg";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />{" "}
      </div>
      <div className={styles.title}>
        <h1>СТАНЬ ДИЛЛЕРОМ X-TERRA CT!</h1>
      </div>
      <div className={styles.description}>
        <p>Сделайте это прямо сейчас на специальных условиях!</p>
      </div>
      <div className={styles.form}>
        <form className={styles.leadForm}>
          <div className={styles.field}>
            <label htmlFor="">ВВЕДИТЕ ВАШЕ ИМЯ*</label>
            <input type="text" placeholder="Имя" />
          </div>

          <div className={styles.field}>
            <label htmlFor="">ВВЕДИТЕ НОМЕР ТЕЛЕФОНА*</label>
            <input type="text" placeholder="+7(___) ___‑__‑__" />
          </div>

          <div className={styles.field}>
            <label htmlFor="">ВВЕДИТЕ ВАШУ ПОЧТУ*</label>
            <input type="text" placeholder="example@gmail.com" />
          </div>

          <button type="sublimt" className={styles.cta}>
            ЗАКАЗАТЬ
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerRadio}>
          <p>
            <input type="checkbox" />
            Принимаю условия политики конфиденциальности и даю согласие на
            обработку персональных данных*
          </p>

          <p>
            <input type="checkbox" />
            Принимаю условия пользовательского соглашения *
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
