import CarDetail from '../../../components/CarDetail';
import Footer from '../../../components/Footer';
import NavBar from '../../../components/NavBar';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { Car, carProps } from '../../../types/Car';
import Button from '../../../components/Button';
import { deleteCar } from '../../../utils/deleteCar';
import { navigate } from '../../../utils/navigate';
import { buttonsContainer, innerwrapper, wrapper } from './style';

const car = ({ car }: carProps) => {
  return (
    <>
      <NavBar />
      <div style={wrapper as React.CSSProperties}>
        <div style={innerwrapper}>
          <CarDetail car={car} />
        </div>
        <br />
        <div style={buttonsContainer as React.CSSProperties}>
          <Button onClick={navigate} label="Go Back" param={{ link: '/' }} />
          <Button
            onClick={navigate}
            label="Update"
            param={{ link: `/car/update/${car.uuid}` }}
          />
          <Button onClick={deleteCar} label="Delete" param={car} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/car/${context?.params?.id}`,
  );
  const car = await res.json();
  return {
    props: {
      car,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/car`);
  const cars: Car[] = await res.json();
  const ids = cars.map((car) => car.uuid);
  const paths = ids.map((uuid) => ({
    params: {
      id: uuid.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default car;
