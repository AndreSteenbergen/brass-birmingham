import update from 'immutability-helper';

import { ActionTypes } from '../actions/boardActions';
import { Eras } from '../../constants';

function processSetupGame(state, action) {
    return update(state, {
        initial : { $set : false },
        boardId : { $set : action.boardId },
        hotseat : { $set : action.hotseat },
        era : { $set : Eras.canal },
        
        coalMarket: { $set : 13 },
        ironMarket: { $set : 8 },
        numberOfPlayers : { $set : action.numberOfPlayers },
        past : { $set : [] }
    });
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  

function takeSeats(state, action) {
    //update action, to have the order of players to be random

   
    action.selectedPlayers = shuffle(action.selectedPlayers);
    return update(state, { past : { $push : [ action ]}, selectedPlayers : { $set : action.selectedPlayers } });
}

export default function game(state = { initial : true }, action) {
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return state.initial ? processSetupGame(state, action) : state;

        case ActionTypes.TAKE_SEATS:
            return takeSeats(state, action);

        default:
            return state;
    }   
}