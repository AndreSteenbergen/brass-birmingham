import update from 'immutability-helper';
import Guid from 'guid';

import { ActionTypes } from '../actions/boardActions';
import { Eras } from '../constants';

function getInitialState() {
    return {
        boardId : Guid.raw(),        
        era : Eras.canal,
        past : []
    };
}

function processSetupGame(state, action) {
    return update(state, {
        numberOfPlayers : { $set : action.numberOfPlayers },
        past : {$push: [ action ]}
    });
}

export default function game(state = getInitialState(), action) {
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return processSetupGame(state, action);

        default:
            return state;
    }   
}