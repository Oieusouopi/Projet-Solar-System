import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-name">
        <div data-testid="mission-name">{ name }</div>
        <div data-testid="mission-year">{ year }</div>
        <div data-testid="mission-country">{ country }</div>
        <div data-testid="mission-destination">{ destination }</div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
