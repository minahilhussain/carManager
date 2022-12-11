import React from 'react';
import styles from './AllCars.module.css';
import CarsList from '../CarList';
import { carProps } from '../../types/Car';

const AllCars = ({ car }: carProps) => {
  return (
    <div className={styles.allCars}>
      <h1>Available Cars</h1>
      <div className={styles.container}>
        <CarsList car={car} />
      </div>
    </div>
  );
};

export default AllCars;
