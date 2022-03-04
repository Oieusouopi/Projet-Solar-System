import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetImage, planetName }) {
  return (
    <div data-testid="planet-card" className="planets">
      <p
        data-testid="planet-name"
      >
        { planetName }
      </p>
      <figure>
        <img
          className="Imageplanets"
          alt={ `Planeta ${planetName}` }
          src={ planetImage }
        />
      </figure>
    </div>
  );
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
