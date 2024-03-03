import React from "react";
import styles from "./new-photo.module.scss";
import { CustomModal } from "../modeal_wrapper/index";
import { CustomButton } from "../custom-btn";

export const UploadingNewPhotoModal = () => {
  return (
    <CustomModal closeClick={() => {}}>
      <div className={styles.wrapper_content}>
        <div className={styles.title}>загрузка новой фотографии</div>
        <div className={styles.texts}>
            <p className={styles.paragraph}>Друзьям будет проще узнать вас, если вы загрузите <br/>свою настоящую фотографию.</p>
            <p className={styles.paragraph}>Вы можете загрузить изображение в формате <br/>JPG, GIF или PNG.</p>
        </div>
        <div className={styles.wrapper_btn}>
             <CustomButton
          text='выбрать файл'
          stylesProp={{
            background: "#A208C9",
            border: "2px solid #A208C9",
            color: "#fff",
          }}
          onClick={()=>{}}
        />
        </div>
      </div>
    </CustomModal>
  );
};
