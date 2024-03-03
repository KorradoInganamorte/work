import React from "react";
import styles from "./select-present.module.scss";
import { CustomModal } from "../modeal_wrapper";
import classNames from "classnames";
import { CustomButton } from "../custom-btn"
import { enableScroll } from "../../utils/function";

export const SelectPresent = () => {
  return (
    <CustomModal closeClick={() => {document.getElementById('selectPresent').parentNode.parentNode.style.display = 'none'; enableScroll()}}>
      <div className={styles.wrapper_content} id="selectPresent">
        <div className={styles.title}>
          вЫБРАН ПОДАРОК <br /> ДЛЯ АННЫ иВАНОВОЙ
        </div>
        <div className={classNames(styles.title, styles.present_text)}>
          наушники
        </div>
        <div className={styles.wrapper_btn}>
          <CustomButton
            text="олтично!"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={() => {document.getElementById('selectPresent').parentNode.parentNode.style.display = 'none'; enableScroll()}}
          />
        </div>
      </div>
    </CustomModal>
  );
};
