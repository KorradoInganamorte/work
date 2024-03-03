import React from 'react'
import { Header } from "../header";
import { Layout } from "../layout";
import styles from "../presentation_page/presentation.module.scss";
import { ImagesPresentationPage } from "../presentation_page/images-presentation-page";
import { MenForm } from './men-form';

export const Men = () => {
  return (
    <Layout>
    <Header></Header>
    <div className={styles.main_content}>
      <ImagesPresentationPage />
      <MenForm/>
    </div>
  </Layout>
  )
}
