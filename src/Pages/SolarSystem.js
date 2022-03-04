import React from 'react';
import { useHistory } from 'react-router';
import PlanetCard from '../components/PlanetCard';
import Title from '../components/Title';

import Planets from '../data/planets';

function SolarSystem() {
  const history = useHistory();
  const redirectMenu = () => {
    history.push('/menu');
  };
  return (
    <div>
      <Title headline="Planetas" />
      <button
        type="button"
        onClick={ redirectMenu }
      >
        Menu
      </button>
      <div data-testid="solar-system">
        {
          Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SolarSystem;
