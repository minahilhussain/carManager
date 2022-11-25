import React from 'react'
import styles from "./AllCars.module.css"
import CarsList from "../CarList"
const AllCars = ({cars}) => {
  return (
    <div className ={styles.allCars}>
      <h1>Available Cars</h1>
      <div className={styles.container}>
        <CarsList cars={cars} />
      </div>
    </div>
  )
}

export default AllCars
