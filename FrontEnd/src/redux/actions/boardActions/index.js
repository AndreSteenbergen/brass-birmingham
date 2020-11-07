import { actionTypes as ActionTypes } from './actionTypes';
import Guid from 'guid';

export { ActionTypes }

export const setupGame = (numberOfPlayers) => ({
    type: ActionTypes.SETUP_GAME,
    domain : ActionTypes.DOMAIN,

    boardId : Guid.raw(),
    numberOfPlayers : numberOfPlayers,
    hotseat : true //at this moment no server is made, so only hotseat ....
});

export const takeSeat = (boardId, selectedPlayers) => ({
    type: ActionTypes.TAKE_SEATS,
    domain : ActionTypes.DOMAIN,
    boardId : boardId,
    selectedPlayers : selectedPlayers
});