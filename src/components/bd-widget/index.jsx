import React from "react";
import styles from "./bd-widget.module.scss";
import { WidgetLayout } from "../layout_widgets_account";
import cake from "../../assets/images/cake.png";

export const DBWidget = () => {
  return (
      <WidgetLayout>
        <div className={styles.wrapper_content}>
          <div className={styles.title}>
            Анна празднует день рождения
            <div>31 мая</div>
          </div>
          <div className={styles.picture_cake}>
            <img src={cake} alt="picture" />
          </div>
        </div>
      </WidgetLayout>
  );
};
