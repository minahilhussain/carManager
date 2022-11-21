import React from 'react'
import styles from "./CarItem.module.css"

const CarItem = ({car}) => {
  return (
    <div key = {car.id} className={styles.wrapper}>
      <h4>{car.name}</h4>
      <p>{car.model}</p>
      <p>{car.color}</p>
    </div>
  )
}

export default CarItem
