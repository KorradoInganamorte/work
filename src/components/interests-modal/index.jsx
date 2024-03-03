import React from "react";
import styles from "./interests.module.scss";
import { CustomModal } from "../modeal_wrapper";
import classNames from "classnames";
import icon from "../../assets/images/checkbox-round.svg";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-btn";
import { enableScroll } from "../../utils/function";

export const InterestsModal = () => {
  return (
    <CustomModal
      closeClick={() => {
        document.getElementById(
          "interests"
        ).parentNode.parentNode.style.display = "none";
        enableScroll();
      }}
    >
      <div className={styles.wrapper_content} id="interests">
        <div className={classNames(styles.title, styles.text)}>
          сменить интересы
        </div>
        <div className={classNames(styles.sub_title, styles.text)}>
          Мои интересы
        </div>
        <div className={styles.wrapper_list}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span>Спорт</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Кофе</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Музыка</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Танцы</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Книги</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Сериалы</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Настолки</span>
              <img src={icon} />
            </li>
          </ul>
        </div>
        <div className={styles.wrapper_input}>
          <CustomInput placeholder="Добавить интересы" />
        </div>
        <div className={styles.wrapper_btn}>
          <CustomButton
            text="сохранить"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={() => {
              document.getElementById(
                "interests"
              ).parentNode.parentNode.style.display = "none";
              enableScroll();
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};
