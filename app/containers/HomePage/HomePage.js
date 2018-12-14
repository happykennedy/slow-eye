import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

const playerComponent = player => (
  <div key={player.jerseyNumber}>{player.person.fullName}</div>
);

class HomePage extends React.PureComponent {
  componentDidMount() {
    const { fetchPlayers } = this.props;
    fetchPlayers();
  }

  render() {
    const { players } = this.props;
    console.log('props', this.props);

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Slow Eye" />
        </Helmet>
        <div className="home-page">
          <h1>Player Stats</h1>
        </div>
        {players ? players.map(playerComponent) : null}
      </article>
    );
  }
}
HomePage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPlayers: PropTypes.func.isRequired,
};

export default HomePage;
