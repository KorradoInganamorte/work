import React from "react";
import { CustomModal } from "../modeal_wrapper";

import styles from "./sent-invitation.module.scss";
import { enableScroll } from "../../utils/function";

export const SentInvitation = () => {
  return (
    <CustomModal closeClick={() => {document.getElementById('sent_invitation').parentNode.parentNode.style.display = 'none'; enableScroll()}}>
      <div className={styles.content_container} id="sent_invitation">
        <h2 className={styles.title}>
          приглашение
          <br />
          отправлено!
        </h2>
      </div>
    </CustomModal>
  );
};
