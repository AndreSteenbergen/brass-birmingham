import update from 'immutability-helper';

import { ActionTypes as boardActionTypes } from '../actions/boardActions';
import { ActionTypes as userActionTypes } from '../actions/userActions';

function processSetupGame(state, action) {
    return update(state, {        
        currentGame : { $set : action.boardId },
        activeGames : { $push : [ {
            boardId : action.boardId
        } ] }
    });
}

function selectGame(state, action) {
    return update(state, {        
        currentGame : { $set : action.gameId }
    });
}

export default function profile(state = { activeGames : [] }, action) {
    switch (action.type) {
        case boardActionTypes.SETUP_GAME:
            return processSetupGame(state, action);

        case userActionTypes.SELECT_GAME:
            return selectGame(state, action);

        default:
            return state;
    }   
}