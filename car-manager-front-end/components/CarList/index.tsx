import React from 'react'
import CarItem from '../CarItem'

const CarsList = ({cars}) => {
  return (
    <div>
      {cars.map((car) => (
        <CarItem car={car} key={car.uuid}></CarItem>
      ))}
    </div>
  )
}

export default CarsList
