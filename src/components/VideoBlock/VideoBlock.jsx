import React from "react";
import styles from "./VideoBlock.module.scss";
import one from "./img/one.png";
import two from "./img/two.png";
import three from "./img/three.png";

const videos = [
  {
    src: one,
    title: "Обзор нового квадроцикла | Экспертное мнение и детали в сервисе",
  },
  { src: two, title: "Замер максимальной скорости на асфальте" },
  {
    src: three,
    title: "Новый китайский литровый квадрик на тестах",
  },
];

const VideoBlock = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>ВИДЕО</h2>
      </div>
      <div className={styles.underline}></div>

      {/* стрелки */}
      <div className={`${styles.nav} ${styles.prev}`}>&lt;</div>
      <div className={`${styles.nav} ${styles.next}`}>&gt;</div>

      {/* ряд карточек */}
      <div className={styles.row}>
        {videos.map((video, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.pic}>
              <img src={video.src} alt={video.title} />
            </div>
            <p className={styles.caption}>{video.title}</p>
          </div>
        ))}
      </div>

      {/* точки */}
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </section>
  );
};

export default VideoBlock;
