import React, { useState } from "react";
import { WidgetLayout } from "../layout_widgets_account";
import styles from "./calendar.module.scss";


const BigCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.toLocaleString("ru-RU", { month: "long" });
  const year = currentDate.getFullYear();

  const weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  let startDayOfWeek = (startDate.getDay() + 6) % 7;
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const numOfDays = endDate.getDate();

  const days = [];
  let date = 1;

  while (date <= numOfDays) {
    const row = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      row.push(
        <td
          key={`empty${i}`}
          className="empty"
          style={{ borderLeft: "none", borderRight: "none" }}
        ></td>
      );
    }

    for (let i = startDayOfWeek; i < 7; i++) {
      if (date > numOfDays) break;

      let cellClass = "";
      if (i === startDayOfWeek) {
        cellClass = `${styles.first}`;
      } else if (i === 6) {
        cellClass = `${styles.last}`;
      }

      if (date === new Date().getDate()) {
        cellClass += `${styles.current_day}`; 
      }
        row.push(
          <td key={date} style={{ borderRight: "none" }} className={cellClass}>
            {date}
          </td>
        );
      date++;
    }
    days.push(
      <React.Fragment key={date}>
        <tr>{row}</tr>
        <hr className={styles.border} />
      </React.Fragment>
    );

    startDayOfWeek = 0;
  };

  return (
    <WidgetLayout>
      <div className={styles.wrapper_calendar}>
        <h2 className={styles.title_calendar}>
          {month} {year}
        </h2>
        <table className={styles.calendar_table}>
          <thead className={styles.wrapper_header}>
            <tr className={styles.header_calendar}>
              {weekdays.map((day) => (
                <th key={day} className={styles.day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.calendar_body}>{days}</tbody>
        </table>
      </div>
    </WidgetLayout>
  );
};

export default BigCalendar;
