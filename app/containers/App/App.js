import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import PlayerStatsPage from '../PlayerStatsPage/Loadable';
import StandingsPage from '../StandingsPage/Loadable';
import PlayerPage from '../PlayerPage/Loadable';
import TeamPage from '../TeamPage/Loadable';
import TeamStatsPage from '../TeamStatsPage/Loadable';
import ScorePage from '../ScorePage/Loadable';
import GamePage from '../GamePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Quick Stats"
      defaultTitle="Quick Stats"
    >
      <meta name="description" content="Quick Stats - Hockey Stats" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={PlayerStatsPage} />
      <Route path="/standings" component={StandingsPage} />
      <Route path="/player" component={PlayerPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/teamstats" component={TeamStatsPage} />
      <Route path="/scores" component={ScorePage} />
      <Route path="/game" component={GamePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
