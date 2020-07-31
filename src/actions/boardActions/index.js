import { actionTypes as ActionTypes } from './actionTypes';

export { ActionTypes }

export const setupGame = (numberOfPlayers) => ({
    type: ActionTypes.SETUP_GAME,
    domain : ActionTypes.DOMAIN,
    numberOfPlayers : numberOfPlayers
});