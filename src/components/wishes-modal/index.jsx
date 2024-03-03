import React from "react";
import styles from "./wishes.module.scss";
import { CustomModal } from "../modeal_wrapper";
import classNames from "classnames";
import icon from "../../assets/images/checkbox-round.svg";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-btn";
import { enableScroll } from "../../utils/function";

export const WishesModal = () => {
  return (
    <CustomModal
      closeClick={() => {
        document.getElementById("wishes").parentNode.parentNode.style.display =
          "none";
        enableScroll();
      }}
    >
      <div className={styles.wrapper_content} id="wishes">
        <div className={classNames(styles.title, styles.text)}>
          сменить желания
        </div>
        <div className={classNames(styles.sub_title, styles.text)}>
          Мои желания
        </div>
        <div className={styles.wrapper_list}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span>Наушники</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Книги</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Часы</span>
              <img src={icon} />
            </li>
            <li className={styles.item}>
              <span>Кроссовки</span>
              <img src={icon} />
            </li>
          </ul>
        </div>
        <div className={styles.wrapper_input}>
          <CustomInput placeholder="Добавить желания" />
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
                "wishes"
              ).parentNode.parentNode.style.display = "none";
              enableScroll();
            }}
          />
        </div>
      </div>
    </CustomModal>
  );
};
