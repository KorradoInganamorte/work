import React, { useState } from "react";
import styles from "./wishes.module.scss";
import { WidgetLayout } from "../layout_widgets_account/index";
import { RadioCheckBox } from "../custom-radio-checkbox";
import { CustomButton } from "../custom-btn";
import { SelectPresent } from "../select-present";
import { disableScroll } from "../../utils/function";



export const WishesList = () => {

  const handelClick = ()=>{
    document.getElementById('selectPresent').parentNode.parentNode.style.display = 'flex';
    disableScroll();
  }

  return <WidgetLayout>
    <div className={styles.wrapper_content}>
        <div className={styles.title}>Список желаний</div>
        <div className={styles.wrapper_list}>
            <div className={styles.list_item}>
                <RadioCheckBox label_text='Наушники'/>
                <RadioCheckBox label_text='Книга'/>
                <RadioCheckBox label_text='Часы'/>
                <RadioCheckBox label_text='Кроссовки'/>
            </div>
        </div>
        <div className={styles.wrapper_btn}>
        <CustomButton
            text="Выбрать подарок"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={handelClick}
          />
        </div>
    </div>
  </WidgetLayout>;
};
