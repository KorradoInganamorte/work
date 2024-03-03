import React from 'react'
import { Header } from "../header";
import { Layout } from "../layout";
import styles from "../presentation_page/presentation.module.scss";
import { ImagesPresentationPage } from "../presentation_page/images-presentation-page";
import { FemalForm } from './femal-form';

export const Femal = () => {
  return (
    <Layout>
    <Header></Header>
    <div className={styles.main_content}>
      <ImagesPresentationPage />
      <FemalForm/>
    </div>
  </Layout>
  )
}
