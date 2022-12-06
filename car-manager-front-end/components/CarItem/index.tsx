import Link from 'next/link'
import React from 'react'
import CarDetail from '../CarDetail'
import styles from "./CarItem.module.css"

const CarItem = ({car}) => {
  return (
    <div key = {car.uuid} className={styles.wrapper}>
     <Link href='/car/[id]' as={`/car/${car.uuid}`}>
        <CarDetail car={car}/>
      </Link>
    </div>
  )
}

export default CarItem
