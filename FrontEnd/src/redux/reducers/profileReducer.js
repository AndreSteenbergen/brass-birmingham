import update from 'immutability-helper';

import { ActionTypes } from '../actions/boardActions';

function processSetupGame(state, action) {
    return update(state, {        
        activeGames : { $push : [ action.boardId ] }
    });
}

export default function profile(state = { activeGames : [] }, action) {
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return processSetupGame(state, action);

        default:
            return state;
    }   
}