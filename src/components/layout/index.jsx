import React from 'react'
import styles from './layout.module.scss'

export const Layout = ({children}) => {
    return (
      <div className={styles.layout_container}>
        {children}
      </div>
    )
  }