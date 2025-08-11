import React, { useState } from "react";
import styles from "./Advantages.module.scss";
import engineImg from "../../assets/engine.jpeg";
import engineIcon from "../../assets/logoBlack.svg";

const tabs = [
  {
    id: "engine",
    title: "Двигатель",
    icon: engineIcon,
    heading: "Надёжный двигатель мощностью 92 л.с.",
    subheading: "Максимальный крутящий момент – 95 Н·м при 5500 об/мин",
    description: `Почувствуйте впечатляющее ускорение и мощный крутящий момент! 
    4-тактный V-Twin объёмом 976 кубиков с жидкостным охлаждением 
    позволяет уверенно себя чувствовать даже на самых сложных маршрутах.`,
    image: engineImg,
  },
];

export default function Advantages() {
  const [active, setActive] = useState(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === active);

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Преимущества</h2>

        <nav className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </nav>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            {currentTab.icon && (
              <img src={currentTab.icon} alt="" className={styles.icon} />
            )}
            <h3 className={styles.heading}>{currentTab.heading}</h3>
            <h4 className={styles.subheading}>{currentTab.subheading}</h4>
            <div className={styles.divider} />
            <p className={styles.description}>{currentTab.description}</p>
            <p className={styles.note}>
              * Заводская комплектация может отличаться в зависимости от
              поставки. Рекомендуется уточнять этот вопрос у менеджера при
              покупке квадроцикла.
            </p>
          </div>

          <div className={styles.imageBlock}>
            <img src={currentTab.image} alt={currentTab.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
