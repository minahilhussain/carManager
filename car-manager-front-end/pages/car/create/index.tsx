import Footer from '../../../components/Footer';
import NavBar from '../../../components/NavBar';
import { useState } from 'react';
import { saveCar } from '../../../utils/saveCar';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import {
  innerwrapper,
  innerwrapperDiv,
  innerwrapperLabel,
  wrapper,
} from './style';
import { button } from '../../../components/Button/styles';

const Car = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

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
            onClick={saveCar}
            label="Save"
            param={{ name, model, description, color }}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Car;
