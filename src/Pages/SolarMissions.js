import React from 'react';
import { useHistory } from 'react-router';

import Title from '../components/Title';
import MissionCard from '../components/MissionCard';

import Missions from '../data/missions';

function SolarMissions() {
  const history = useHistory();
  const redirectMenu = () => {
    history.push('/menu');
  };
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <button
        type="button"
        onClick={ redirectMenu }
      >
        Menu
      </button>
      <div>
        {
          Missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SolarMissions;
