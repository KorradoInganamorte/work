import React from "react";
import styles from "./correction.module.scss";
import { CustomModal } from "../modeal_wrapper/index";
import photo from "../../assets/images/photo.png";
import { CustomButton } from "../custom-btn";

export const CorrectionPhoto = () => {
  return (
    <CustomModal closeClick={() => null}>
      <div className={styles.wrapper_content}>
        <div className={styles.title}>Фотография на вашей странице</div>
        <div className={styles.sub_text}>
          Выбранная область будет показываться на вашей странице.
          <br /> Если изображение ориентировано неправильно, фотографию можно
          повернуть.
        </div>
        <div className={styles.wrapper_photo_area}>
          <div className={styles.photo}>
            <img src={photo} />
          </div>
          <div className={styles.rotate_btns}>
            <div className={styles.rotate_btn}>
              <svg
                width="32.000000"
                height="35.000000"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip136_4512">
                    <rect
                      id="Bold Duotone / Arrows Action / Square Top Down"
                      rx="5.000000"
                      width="32.000000"
                      height="35.000000"
                      transform="matrix(-1 0 0 1 32 0)"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip136_4512)">
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M24 23C24 18.2861 24 15.9287 22.5356 14.4648C21.071 13 18.7141 13 14 13C9.28589 13 6.92896 13 5.46436 14.4648C4 15.9287 4 18.2861 4 23C4 27.7139 4 30.0713 5.46436 31.5352C6.92896 33 9.28589 33 14 33C18.7141 33 21.071 33 22.5356 31.5352C24 30.0713 24 27.7139 24 23Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M19.8311 3.17188C19.6057 2.94238 19.2405 2.94238 19.0151 3.17188L15.1689 7.08496C14.9436 7.31445 14.9436 7.68555 15.1689 7.91504L19.0151 11.8281C19.2405 12.0576 19.6057 12.0576 19.8311 11.8281C20.0564 11.5986 20.0564 11.2275 19.8311 10.998L16.3928 7.5L19.8311 4.00195C20.0564 3.77246 20.0564 3.40137 19.8311 3.17188Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M22.8181 7L16.8623 7L16.3169 7.57715L16.8623 8.1543L22.8181 8.1543C23.3369 8.1543 24.1272 8.32324 24.7722 8.81445C25.3894 9.28418 25.9092 10.0723 25.9092 11.4229C25.9092 11.7422 26.1533 12 26.4546 12C26.7559 12 27 11.7422 27 11.4229C27 9.69629 26.3076 8.56152 25.4097 7.87793C24.5393 7.21484 23.5115 7 22.8181 7ZM15 7.57715C15 7.49902 15.0146 7.42383 15.0415 7.35645C15.0139 7.42676 15 7.50195 15 7.57715Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.rotate_btn}>
              <svg
                width="32.000000"
                height="35.000000"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip136_4512">
                    <rect
                      id="Bold Duotone / Arrows Action / Square Top Down"
                      rx="5.000000"
                      width="32.000000"
                      height="35.000000"
                      transform="matrix(-1 0 0 1 32 0)"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip136_4512)">
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M24 23C24 18.2861 24 15.9287 22.5356 14.4648C21.071 13 18.7141 13 14 13C9.28589 13 6.92896 13 5.46436 14.4648C4 15.9287 4 18.2861 4 23C4 27.7139 4 30.0713 5.46436 31.5352C6.92896 33 9.28589 33 14 33C18.7141 33 21.071 33 22.5356 31.5352C24 30.0713 24 27.7139 24 23Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M19.8311 3.17188C19.6057 2.94238 19.2405 2.94238 19.0151 3.17188L15.1689 7.08496C14.9436 7.31445 14.9436 7.68555 15.1689 7.91504L19.0151 11.8281C19.2405 12.0576 19.6057 12.0576 19.8311 11.8281C20.0564 11.5986 20.0564 11.2275 19.8311 10.998L16.3928 7.5L19.8311 4.00195C20.0564 3.77246 20.0564 3.40137 19.8311 3.17188Z"
                    fill="#A208C9"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                  <g opacity="0.500000">
                    <path
                      id="Vector"
                      d="M22.8181 7L16.8623 7L16.3169 7.57715L16.8623 8.1543L22.8181 8.1543C23.3369 8.1543 24.1272 8.32324 24.7722 8.81445C25.3894 9.28418 25.9092 10.0723 25.9092 11.4229C25.9092 11.7422 26.1533 12 26.4546 12C26.7559 12 27 11.7422 27 11.4229C27 9.69629 26.3076 8.56152 25.4097 7.87793C24.5393 7.21484 23.5115 7 22.8181 7ZM15 7.57715C15 7.49902 15.0146 7.42383 15.0415 7.35645C15.0139 7.42676 15 7.50195 15 7.57715Z"
                      fill="#A208C9"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.wrapper_btns}>
          <div className={styles.container}>
            <CustomButton
              text="сохранить"
              stylesProp={{
                background: "#A208C9",
                border: "2px solid #A208C9",
                color: "#fff",
              }}
              onClick={() => null}
            />
            <CustomButton
              text="вернуться"
              stylesProp={{
                background: "transparent",
                border: "2px solid #A208C9",
                color: "#000",
              }}
              onClick={() => null}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
