import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Missions from './Missions';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((item) => {
            const { name, image } = item;
            return (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            );
          })
        }
        <Missions />
      </div>
    );
  }
}

export default SolarSystem;
