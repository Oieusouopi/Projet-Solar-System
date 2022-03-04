import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Menu() {
  const { formValue } = useContext(MyContext);
  const { username } = formValue;
  const history = useHistory();

  const directMission = () => {
    history.push('/Missions');
  };

  const directSolarSystem = () => {
    history.push('/SolarSystem');
  };

  return (
    <div>
      <h1>Menu Solar System</h1>
      <div>{`Username: ${username}`}</div>
      <button
        type="button"
        onClick={ directSolarSystem }
      >
        Solar System
      </button>
      <button
        type="button"
        onClick={ directMission }
      >
        Missões
      </button>
    </div>
  );
}

export default Menu;
