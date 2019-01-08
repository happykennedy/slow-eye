/* global fetch */
import { FETCH_WILDCARD_STANDINGS } from './constants';
import graphqlApi from '../../utils/api';

const wildCardStandingsQuery = `
{
  standings {
    type,
    conference {
      name
    },
    division {
      name
    },
    teamRecords {
      records {
        overallRecords {
          wins,
          losses,
          ot,
          type
        }
      },
      gamesPlayed,
      goalsScored,
      goalsAgainst,
      divisionRank,
      wildCardRank,
      leagueRecord {
        wins, losses, ot
      },
      streak {
        code
      },
      points,
      team {
        id,
        name,
        abbreviation
      }
    }
  }
}
`;

export const fetchWildCardStandings = () => async (dispatch) => {
  try {
    const data = await graphqlApi(wildCardStandingsQuery);
    console.log('data', data);
    return dispatch({
      type: FETCH_WILDCARD_STANDINGS,
      payload: data,
    });
  } catch (e) {
    // TODO: dispatch error to reducer
    return console.error(e.toString());
  }
};

export default null;