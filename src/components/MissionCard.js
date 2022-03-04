import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({ name, year, country, destination }) {
//   const { name, year, country, destination } = props;
  return (
    <div data-testid="mission-card" className="missions">
      <div data-testid="mission-name">{ name }</div>
      <div data-testid="mission-year">{ year }</div>
      <div data-testid="mission-country">{ country }</div>
      <div data-testid="mission-destination">{ destination }</div>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
