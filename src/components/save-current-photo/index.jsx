import React from "react";
import styles from "./save-current-photo.module.scss";
import { CustomModal } from "../modeal_wrapper/index";
import { CustomButton } from "../custom-btn";
import photo from "../../assets/images/photo.png";
import { enableScroll } from "../../utils/function";

export const SaveCurrentPhoto = () => {
  return (
    <CustomModal closeClick={() => {document.getElementById('save_current_photo').parentNode.parentNode.style.display = 'none'; enableScroll();}}>
      <div className={styles.wrapper_content} id="save_current_photo">
        <div className={styles.title}>cменить фото</div>
        <div className={styles.wrapper_photo}>
          <div>
          <div className={styles.back}>
            <img src={photo} />
          </div>
          <div className={styles.edit}>
              <svg
                width="34.000000"
                height="34.000000"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip136_3540">
                    <rect
                      id="Bold Duotone / Messages, Conversation / Pen 2"
                      width="34.000000"
                      height="34.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip136_3540)">
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M4.60425 31.167C4.60425 30.5801 5.07983 30.1045 5.66675 30.1045L28.3335 30.1045C28.9202 30.1045 29.396 30.5801 29.396 31.167C29.396 31.7539 28.9202 32.2295 28.3335 32.2295L5.66675 32.2295C5.07983 32.2295 4.60425 31.7539 4.60425 31.167Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M27.031 4.13867C28.7717 5.87988 28.7717 8.70215 27.031 10.4424L26.0251 11.4482C25.9839 11.4346 25.9419 11.4209 25.8994 11.4062C24.8369 11.0371 23.4443 10.3418 22.1362 9.03418C20.8281 7.72559 20.1326 6.33301 19.7642 5.27051C19.7493 5.22754 19.7349 5.18555 19.7212 5.14453L20.7268 4.13867C22.4675 2.39746 25.29 2.39746 27.031 4.13867Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M19.7639 5.09961L19.7207 5.14258C19.7344 5.18457 19.7488 5.22656 19.7634 5.26953C20.1321 6.33203 20.8274 7.72461 22.1357 9.03223C23.4438 10.3408 24.8364 11.0361 25.8987 11.4043C25.9409 11.4189 25.9824 11.4336 26.0237 11.4473L16.3196 21.1514C15.6653 21.8047 15.3381 22.1318 14.9775 22.4141C14.552 22.7451 14.0916 23.0303 13.6045 23.2617C13.1917 23.459 12.7527 23.6055 11.875 23.8975L7.24609 25.4404C6.81421 25.585 6.33789 25.4727 6.01587 25.1504C5.69409 24.8281 5.58154 24.3525 5.72559 23.9199L7.26855 19.291C7.56104 18.4141 7.70728 17.9746 7.90405 17.5615C8.13623 17.0742 8.4209 16.6143 8.75269 16.1885C9.03394 15.8281 9.36108 15.501 10.0154 14.8467L19.7639 5.09961Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_btn}>
      <CustomButton
          text="сохранить"
          stylesProp={{
            background: "#A208C9",
            border: "2px solid #A208C9",
            color: "#fff",
          }}
          onClick={() => {document.getElementById('save_current_photo').parentNode.parentNode.style.display = 'none'; enableScroll();}}
        />
      </div>
      </div>
    </CustomModal>
  );
};
