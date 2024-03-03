import styles from "./checkbox.module.scss";

export const CustomCheckBox = ({ label_text }) => {
  return (
    <label className={styles.custom_checkbox}>
      <input
        type="checkbox"
      />
      <span className={styles.checkmark} />
      <span className={styles.checkbox_label}>{label_text}</span>
    </label>
  );
};
