import { actionTypes as ActionTypes } from './actionTypes';

export { ActionTypes }

export const selectGame = (gameId) => ({
    type: ActionTypes.SELECT_GAME,
    domain : ActionTypes.DOMAIN,

    gameId : gameId   
});
