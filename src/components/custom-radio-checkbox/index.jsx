import React from "react";
import styles from "./radio-checkbox.module.scss";
import { useSelector, useDispatch } from "react-redux";

export const RadioCheckBox = ({ label_text }) => {
  const value = useSelector((state) => state.checkbox.value);
  const dispatch = useDispatch();

  const swapState = () => {
    dispatch({type:'SET_CHECK', payload:label_text});
  };

  return (
    <label className={styles.custom_checkbox}>
      <input
        type="radio"
        name="gender"
        value={label_text}
        onChange={swapState}
      />
      <span className={styles.checkmark} />
      <span className={styles.checkbox_label}>{label_text}</span>
    </label>
  );
};
