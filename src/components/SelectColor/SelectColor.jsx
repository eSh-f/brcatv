import React, { useState } from "react";
import styles from "./SelecColor.module.scss";
import grey from "./img/grey.jpeg";
import yellow from "./img/yellow.jpeg";
import red from "./img/red.jpeg";

const IMAGES = [
  { src: grey, label: "Серый" },
  { src: yellow, label: "Красный" },
  { src: red, label: "Жёлтый" },
];

const PAGE_SIZE = 3;

const AvailableColors = () => {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(IMAGES.length / PAGE_SIZE);

  const next = () => setPage((p) => (p + 1) % pages);
  const prev = () => setPage((p) => (p - 1 + pages) % pages);

  const start = page * PAGE_SIZE;
  const visible = IMAGES.slice(start, start + PAGE_SIZE);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>ДОСТУПНЫЕ ЦВЕТА</h2>
        <div className={styles.underline} />
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

      <div className={styles.row}>
        {visible.map((it, i) => (
          <figure key={start + i} className={styles.card}>
            <div className={styles.pic}>
              <img src={it.src} alt={it.label} />
            </div>
            <figcaption className={styles.caption}>{it.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.dots}>
        {Array.from({ length: pages }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === page ? styles.active : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableColors;
