import React, { useState } from "react";
import styles from "./HeroSlider.module.scss";

import f from "./img/f.png";
import f1 from "./img/f1.jpg";
import f2 from "./img/f2.jpg";
import f21 from "./img/offrod.png";
import f33 from "./img/f3.jpg";
import f34 from "./img/f3.png";

const SLIDES = [
  {
    bg: f1,
    fg: f,
    title: "X‑TERRA CT",
    text: "Комфорт и мощь в новом исполнении!",
    link: "#",
  },
  {
    bg: f2,
    fg: f21,
    title: "Запишись на тест-драйв",
    text: "Проверь технику сам в разных условиях",
    link: "#",
  },
  {
    bg: f33,
    fg: f34,
    title: "Открой новые границы путешествий",
    text: "Наша команда обеспечит надежный сервис и гарантию",
    link: "#",
  },
];

const HeroSlider = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((p) => (p === 0 ? SLIDES.length - 1 : p - 1));
  const next = () => setIdx((p) => (p === SLIDES.length - 1 ? 0 : p + 1));

  return (
    <section className={styles.wrapper} aria-label="hero-gallery">
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div className={styles.slide} key={i}>
              {/* задний фон на всю ширину */}
              <div
                className={styles.bannerBg}
                style={{ backgroundImage: `url(${s.bg})` }}
              />
              {/* контент поверх */}
              <div className={styles.content}>
                <div className={styles.text}>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  <a className={styles.btn} href={s.link}>
                    Подробнее
                  </a>
                </div>

                <div className={styles.image}>
                  <img src={s.fg} alt={s.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={prev}
          aria-label="Назад"
        >
          ‹
        </button>
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={next}
          aria-label="Вперёд"
        >
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === idx ? styles.active : ""}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
