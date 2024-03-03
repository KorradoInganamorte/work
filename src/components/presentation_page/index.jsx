import React from "react";
import { Header } from "../header";
import { Layout } from "../layout";
import styles from "./presentation.module.scss";
import { ImagesPresentationPage } from "./images-presentation-page";
import { CustomText } from "./text";
import { useLocation } from "react-router-dom";

export const PresentationPage = () => {
   
  const location = useLocation();
  return (
    <Layout>
      <Header></Header>
      <div className={styles.main_content}>
        <ImagesPresentationPage />
          <CustomText />
      </div>
    </Layout>
  );
};
