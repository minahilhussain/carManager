import React from 'react'
import styles from "./Header.module.css"
import headerImage from '../../images/carHeader.jpeg'
import Img from '../Img'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Welcome to Car Manager</h1>
    <Img imgUrl={headerImage}/>
    </div>
  )
}

export default Header