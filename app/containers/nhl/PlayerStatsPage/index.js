import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PlayersTable from '../../../components/Table/PlayersTable';
import './style.scss';

class PlayerStatsPage extends React.PureComponent {
  render() {
    const {
      players, fetchPlayers, fetchTeams, teams, setLoading, loading,
    } = this.props;
    return (
      <div className="playerStats-page">
        <Helmet>
          <title>Player Stats - SealStats.com</title>
          <meta name="description" content="View NHL Players Stats. Leaderboards. Historical Stats. It's all here. Seal Stats is the best place to view NHL stats. User-friendly and fast." />
        </Helmet>
        <div className="page-header wFilters">
          <div className="container">
            <h2>Player Stats</h2>
          </div>
        </div>
        <PlayersTable
          players={players}
          fetchPlayers={fetchPlayers}
          fetchTeams={fetchTeams}
          teams={teams}
          setLoading={setLoading}
          loading={loading}
        />

      </div>
    );
  }
}

PlayerStatsPage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPlayers: PropTypes.func.isRequired,
  fetchTeams: PropTypes.func.isRequired,
};

export default PlayerStatsPage;