import Link from 'next/link'
import React from 'react'
import styles from "./Button.module.css"

interface ButtonProps {
  label: string;
  link: string;
  uuid: string;
}
const Button = ({label, link, uuid }: ButtonProps) => {
  return (
    <Link href={`${link}[id]`} as={`${link}${uuid}`}>
      <span className={styles.button}>{label}</span>
    </Link> 
  )
}


export default Button
