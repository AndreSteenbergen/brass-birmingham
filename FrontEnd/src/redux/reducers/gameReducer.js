import update from 'immutability-helper';

import { ActionTypes } from '../actions/boardActions';
import { Eras } from '../../constants';

function processSetupGame(state, action) {
    return update(state, {
        initial : { $set : false },
        boardId : { $set : action.boardId },
        hotseat : { $set : action.hotseat },
        era : { $set : Eras.canal },
        
        numberOfPlayers : { $set : action.numberOfPlayers },
        past : { $set : [] }
    });
}

export default function game(state = { initial : true }, action) {
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return state.initial ? processSetupGame(state, action) : state;

        default:
            return state;
    }   
}