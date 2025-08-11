import React from "react";
import styles from "./Gallery.module.scss";
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import three from "./img/three.jpg";

const IMAGES = [
  { src: one, alt: "Галерея 1" },
  { src: two, alt: "Галерея 2" },
  { src: three, alt: "Галерея 3" },
];

const Gallery = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>ГАЛЕРЕЯ</h2>
      </div>
      <div className={styles.underline}></div>

      <div className={`${styles.nav} ${styles.prev}`}>&lt;</div>
      <div className={`${styles.nav} ${styles.next}`}>&gt;</div>

      <div className={styles.row}>
        {IMAGES.map((it, i) => (
          <figure className={styles.card} key={i}>
            <div className={styles.pic}>
              <img src={it.src} alt={it.alt} />
            </div>
          </figure>
        ))}
      </div>

      <div className={styles.dots}>
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === 0 ? styles.active : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
