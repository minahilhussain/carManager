import Head from 'next/head';
import { GetStaticPaths } from 'next/types';
import { useState } from 'react';
import NavBar from '../../../../components/NavBar';
import TextField from '../../../../components/TextField';
import Footer from '../../../../components/Footer';
import { Car } from '../../../../types/Car';
import { updateCar } from '../../../../utils/updateCar';
import {
  innerwrapper,
  innerwrapperDiv,
  innerwrapperLabel,
  wrapper,
} from '../../create/style';
import { button } from '../../../../components/Button/styles';
import Button from '../../../../components/Button';

export default function Update({ car }: any) {
  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [description, setDescription] = useState(car.description);
  const [color, setColor] = useState(car.color);
  return (
    <>
      <NavBar />
      <div style={wrapper}>
        <form style={innerwrapper} method="post">
          <div style={innerwrapperDiv}>
            <label style={innerwrapperLabel} htmlFor="name">
              Name:
            </label>
            <TextField id={'name'} name={name} onChange={setName} />
          </div>
          <div style={innerwrapperDiv}>
            <label style={innerwrapperLabel} htmlFor="model">
              Model:
            </label>
            <TextField id={'model'} name={model} onChange={setModel} />
          </div>
          <div style={innerwrapperDiv}>
            <label style={innerwrapperLabel} htmlFor="description">
              Description:
            </label>
            <TextField
              id={'description'}
              name={description}
              onChange={setDescription}
            />
          </div>
          <div style={innerwrapperDiv}>
            <label style={innerwrapperLabel} htmlFor="color">
              Color:{' '}
            </label>
            <TextField id={'color'} name={color} onChange={setColor} />
          </div>
          <Button
            onClick={updateCar}
            label="Save"
            param={{ uuid: car.uuid, name, model, description, color }}
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
export const getStaticProps = async (context: any) => {
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
