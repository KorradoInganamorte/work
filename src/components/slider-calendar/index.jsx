import React, { useState } from "react";
import { WidgetLayout } from "../layout_widgets_account";
import styles from "./slider-calendar.module.scss";
import classNames from "classnames";

const Calendar = () => {
  Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    var week1 = new Date(date.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((date - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7
      )
    );
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  const getNextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
  };

  const getPreviousWeek = () => {
    const previousWeekDate = new Date(currentDate);
    previousWeekDate.setDate(previousWeekDate.getDate() - 7);
    setCurrentDate(previousWeekDate);
  };

  const activeWeek = new Date().getWeek()

  const renderDaysOfWeek = (activeWeek) => {
    const daysOfWeek = [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const today = new Date().getDay() -1;

    return (
      <div className={styles.days_of_week}>
        {daysOfWeek.map((day, index) => {
          const isToday = index === today;
          const isCurrentWeek = activeWeek === currentDate.getWeek();
        
          return (
            <div
              key={day}
              className={isToday && isCurrentWeek ? styles.today : ""}
            >
              {day}
            </div>
          );
        })}
      </div>
    );
  };
  const renderCalendar = () => {
    const startDate = new Date(currentDate);
    const currentDayOfWeek = startDate.getDay();
  
    // Calculate the number of days to subtract to get to the previous Monday
    const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    startDate.setDate(startDate.getDate() - daysToSubtract);
  
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
  
    const days = [];
    const today = new Date();
  
    let date = new Date(startDate);
  
    while (date <= endDate) {
      const isToday = date.toDateString() === today.toDateString();
  
      days.push(
        <div
          key={date}
          className={`calendar_day ${isToday ? styles.todayS : ""}`}
        >
          <span>{date.getDate()}</span>
        </div>
      );
  
      date.setDate(date.getDate() + 1);
    }
  
    return days;
  };

  return (
    <WidgetLayout>
      <div className={styles.wrapper_calendar}>
        <div className={styles.calendar}>
          <div className={styles.calendar_controls}>
            <button onClick={getPreviousWeek} className={styles.button}>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip134_2372">
                    <rect
                      id="Bold Duotone / Arrows / Round Alt Arrow Right"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip134_2372)">
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M22 12C22 17.5225 17.5225 22 12 22C6.47754 22 2 17.5225 2 12C2 6.47754 6.47754 2 12 2C17.5225 2 22 6.47754 22 12Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M11.0303 8.46973C10.7373 8.17676 10.2627 8.17676 9.96973 8.46973C9.67676 8.7627 9.67676 9.2373 9.96973 9.53027L12.4395 12L9.96973 14.4697C9.67676 14.7627 9.67676 15.2373 9.96973 15.5303C10.2627 15.8232 10.7373 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2373 14.3232 11.7627 14.0303 11.4697L11.0303 8.46973Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </button>
            <div className={styles.title_calendar}>
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button onClick={getNextWeek} className={styles.button}>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip134_2372">
                    <rect
                      id="Bold Duotone / Arrows / Round Alt Arrow Right"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip134_2372)">
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M22 12C22 17.5225 17.5225 22 12 22C6.47754 22 2 17.5225 2 12C2 6.47754 6.47754 2 12 2C17.5225 2 22 6.47754 22 12Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M11.0303 8.46973C10.7373 8.17676 10.2627 8.17676 9.96973 8.46973C9.67676 8.7627 9.67676 9.2373 9.96973 9.53027L12.4395 12L9.96973 14.4697C9.67676 14.7627 9.67676 15.2373 9.96973 15.5303C10.2627 15.8232 10.7373 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2373 14.3232 11.7627 14.0303 11.4697L11.0303 8.46973Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className={styles.wrapper_days}>
            {renderDaysOfWeek(activeWeek)}
            <div className={classNames(styles.days)}>
              {renderCalendar()}
            </div>
          </div>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default Calendar;
