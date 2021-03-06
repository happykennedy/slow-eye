import React from 'react';
import { Query } from 'react-apollo';
import { getStandingsQuery } from './query.js';
import Header from '../../../components/Header';
import Helmet from '../../../components/Helmet';
import Footer from '../../../components/Footer';
import LoadingIndicator from '../../../components/LoadingIndicator';
import EmptyState from '../../../components/EmptyState';
import StandingsTable from '../../../components/Table/StandingsTable';
import './style.scss';

class StandingsPage extends React.Component {
  render() {
    return (
      <div>
        <Header selectedLeague="NHL" />
        <div className="standings-page">
          <div className="page-header">
            <div className="container">
              <h2>Standings</h2>
            </div>
          </div>
          <div className="container">
            <Helmet titlePrefix="NHL Standings" contentPrefix="View NHL Standings."/>
            <Query query={getStandingsQuery}>
              {({ loading, error, data }) => {
                if (loading) return (<LoadingIndicator />);
                if (error) return (<EmptyState isError />);

                const standings = data.standings;

                return (
                  <StandingsTable standings={standings} />
                );
              }}
            </Query>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StandingsPage;
