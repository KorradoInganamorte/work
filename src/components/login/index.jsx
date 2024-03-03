import React from "react";
import { LoginForm } from "./login-form";
import { Header } from "../header";
import { Layout } from "../layout";
import styles from "../presentation_page/presentation.module.scss";
import { ImagesPresentationPage } from "../presentation_page/images-presentation-page";


export const Login = () => {
  return (
    <Layout>
      <Header></Header>
      <div className={styles.main_content}>
        <ImagesPresentationPage />
        <LoginForm/>
      </div>
    </Layout>
  );
};
