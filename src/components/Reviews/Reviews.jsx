import React from "react";
import styles from "./Reviews.module.scss";

import al from "./img/al.jpg";
import mar from "./img/mar.jpg";
import ig from "./img/ig.jpg";

const Reviews = () => {
  const reviews = [
    {
      text: "Все понравилось! Ответили на все вопросы, подробно рассказали о каждой модели и подсказали, какую лучше выбрать под мои задачи. Очень довольна обслуживанием!",
      img: al, // заменишь на свои фото
      name: "Алексей",
    },
    {
      text: "Купили сыну — он в полном восторге! Менеджер помог подобрать оптимальную комплектацию, всё объяснил и даже дал советы по эксплуатации. Отличный сервис!",
      img: mar,
      name: "Марина",
    },
    {
      text: "Для меня оказались лучшие условия с гарантией и обслуживанием. Быстро оформили покупку, сделали скидку и оформили все документы. Рекомендую друзьям!",
      img: ig,
      name: "Игорь",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>ОТЗЫВЫ</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cards}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.photo}>
              <img src={review.img} alt={review.name} />
            </div>
            <p className={styles.text}>"{review.text}"</p>
            <div className={styles.name}>{review.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
