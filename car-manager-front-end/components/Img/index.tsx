import React from 'react'
import Image from 'next/image'
import styles from "./Img.module.css"

const Img = ({imgUrl}) => {
  return (
    <div className={styles.image}>
      <Image
      src={imgUrl}
      alt="Picture of the author"
    />
    </div>
  )
}

export default Img
