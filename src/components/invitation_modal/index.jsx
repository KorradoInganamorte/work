import React from "react";
import styles from "./invitation.module.scss";
import { CustomModal } from "../modeal_wrapper";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-btn";
import { enableScroll } from "../../utils/function";

export const InvitationModal = () => {

  return (
    <CustomModal closeClick={()=>{document.getElementById('invitation_modal').parentNode.parentNode.style.display = 'none'; enableScroll();}}>
      <div className={styles.content_container} id="invitation_modal">
        <h2 className={styles.title}>пригласить в намёк </h2>
        <span className={styles.sub_title}>
          Введите имя пользователя или электронную почту
        </span>
        <div className={styles.wrapper_input}>
          <CustomInput placeholder="Имя или электронная почта" />
        </div>
        <div className={styles.wrapper_btn}>
          <CustomButton
            text="Отправить"
            stylesProp={{
              background: "#A208C9",
              border: "2px solid #A208C9",
              color: "#fff",
            }}
            onClick={()=>{document.getElementById('invitation_modal').parentNode.parentNode.style.display = 'none'; document.getElementById('sent_invitation').parentNode.parentNode.style.display = 'flex'}}
          />
        </div>
      </div>
    </CustomModal>
  );
};
