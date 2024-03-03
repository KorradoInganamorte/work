// chart_bd/index.jsx

import React from "react";
import styles from "./chart.module.scss";
import { WidgetLayout } from "../layout_widgets_account/index";

// Массив с названиями месяцев
const months = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

// Функция для генерации элементов эллипса
const generateEllipsItems = (count, color) => {
  const ellipsItems = [];
  for (let i = 0; i < count; i++) {
    ellipsItems.push(<div key={i} className={styles.elips_item} style={{ background: color }}></div>);
  }
  return ellipsItems;
};

// Функция для генерации элементов списка на основе массива месяцев
const generateMonthItems = () => {
  // Получаем текущий месяц
  const currentMonth = new Date().getMonth();

  return months.map((month, index) => {
    const isCurrent = index === currentMonth;
    let ellipsCount = 0;
    let purpleEllips = 0;
    let yellowEllips = 0;

    // Задаем количество эллипсов в соответствии с условиями
    if (index === 0) {
      ellipsCount = 10;
      purpleEllips = 5;
      yellowEllips = 5;
    } else if (index === 1) {
      ellipsCount = 1;
      purpleEllips = 1;
    } else if (index === 2) {
      ellipsCount = 5;
      purpleEllips = 5;
    }

    return (
      <li key={index} className={styles.item}>
        <span className={ `${isCurrent? styles.current:styles.title_month}`} >{month}</span>
        <div className={styles.statistic}>
          <div className={styles.elips}>
            {/* Генерация фиолетовых эллипсов */}
            {generateEllipsItems(purpleEllips, 'purple')}
            {/* Генерация желтых эллипсов */}
            {generateEllipsItems(yellowEllips, 'yellow')}
          </div>
          <div className={styles.numbers}>{purpleEllips}/{ellipsCount}</div>
        </div>
      </li>
    );
  });
};

// Основной компонент
const ChartWidget = () => {
  return (
    <WidgetLayout>
      <div className={styles.wrapper_content}>
        <ul className={styles.list}>
          {/* Генерация элементов списка для каждого месяца */}
          {generateMonthItems()}
        </ul>
      </div>
    </WidgetLayout>
  );
};

export {ChartWidget};
