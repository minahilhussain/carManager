import React from 'react'
import styles from "./AllCars.module.css"
import CarsList from "../CarList"
const AllCars = ({cars}) => {
  return (
    <div className ={styles.allCars}>
      <div>
        <CarsList cars={cars} />
      </div>
      <div>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>
        <p>hgesgfhjegfhdsvcgh vshcsghdcghd</p>

      </div>

    </div>
  )
}

export default AllCars
