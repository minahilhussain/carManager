import Link from 'next/link'
import React from 'react'

const CarDetail = ({car}) => {
  return (
    <>
      <h4>{car.name}</h4>
      <p>{car.model}</p>
      <p>{car.color}</p>
      <p>{car.description}</p>
    </>
  )
}

export default CarDetail
