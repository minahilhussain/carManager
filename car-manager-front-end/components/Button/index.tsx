import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick: Function;
  param?: string;
}
const Button = ({ label, onClick, param }: ButtonProps) => {
  return (
    <span onClick={() => onClick(param)} className={styles.button}>
      {label}
    </span>
  );
};

export default Button;
