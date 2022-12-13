import Head from 'next/head';
import Header from '../components/Header';
import AllCars from '../components/AllCars';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { navigate } from '../utils/navigate';
import styles from './styles.module.css';

export default function Home({ cars }) {
  return (
    <div>
      <Head>
        <title>Car Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>
        hola {process.env.NEXT_PUBLIC_ABC} {process.env.NEXT_PUBLIC_HOST}{' '}
        {process.env.NEXT_PUBLIC_PORT} hehe
      </h1>
      <div className={styles.centerButton}>
        <Button onClick={navigate} label="Add car" param="/car/create" />
      </div>
      <AllCars car={cars} />
      <Footer />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/car`);
  const cars = await res.json();
  return {
    props: {
      cars,
    },
  };
};
