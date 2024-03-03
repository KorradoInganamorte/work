import React from 'react'
import styles from './points.module.scss'

export const SlaiderPoints = ({background}) => {
  return (
      <div className={styles.points} style={{background:background}}></div>
  )
}
