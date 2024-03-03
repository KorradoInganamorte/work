import React from 'react'
import styles from './widget.module.scss'

export const WidgetLayout = ({children}) => {
  return (
    <div className={styles.wrapper_widget}>{children}</div>
  )
}
