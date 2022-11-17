import React from 'react'

const CarItem = ({car}) => {
  return (
    <div key = {car.id}>
      <h4>{car.name}</h4>
      <p>{car.model}</p>
      <p>{car.color}</p>
    </div>
  )
}

export default CarItem
