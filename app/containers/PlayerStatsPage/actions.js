/* global fetch */
import { FETCH_PLAYERS } from './constants';
import graphqlApi from '../../utils/api';

const makeQuery = season => `
{
  allHistoryPlayersReport (season: "${season}") {
    id
    name
    nationality
    positionCode
    gamesPlayed
    goals
    assists
    points
    plusMinus
    penaltyMinutes
    ppGoals
    shGoals
    teams
    hits
    blockedShots
    shots
    shootingPctg
    timeOnIcePerGame
  }
}`;

export const fetchAllPlayers = season => async (dispatch) => {
  try {
    const data = await graphqlApi(makeQuery(season || '20182019'));
    return dispatch({
      type: FETCH_PLAYERS,
      payload: data.allHistoryPlayersReport,
    });
  } catch (e) {
    // TODO: dispatch error to reducer
    return console.error(e.toString());
  }
};

export default null;
