import React from 'react'

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage} = this.props;
    return (
      <div data-testid="planet-card">
          <span data-testid="planet-name">{ planetName }</span>
          <img src={planetImage} alt={`Planeta ` + planetName}/>
      </div>
        );
    }
}

export default PlanetCard;
