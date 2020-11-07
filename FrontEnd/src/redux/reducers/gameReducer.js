import update from 'immutability-helper';

import { ActionTypes } from '../actions/boardActions';
import { Eras,Cards,MerchantSales } from '../../constants';

function processSetupGame(state, action) {
    let numberOfPlayers = action.numberOfPlayers;

    //get cards and shuffle
    //get all cards
    let cards = Cards[numberOfPlayers];
    //transform the numbers to specific cards
    let deck = [];
    Object.keys(cards).forEach(k => {
        for (let i = 0; i < cards[k]; i++) deck.push(k);
    });
    
    let merchantTiles = [];
    Object.keys(MerchantSales).forEach(playerCntForMerchantTiles => {
        if (playerCntForMerchantTiles <= numberOfPlayers) {
            merchantTiles = merchantTiles.concat(MerchantSales[playerCntForMerchantTiles]);
        }
    });
    
    return update(state, {
        initial : { $set : false },
        boardId : { $set : action.boardId },
        hotseat : { $set : action.hotseat },
        era : { $set : Eras.canal },
        
        coalMarket: { $set : 13 },
        ironMarket: { $set : 8 },
        numberOfPlayers : { $set : numberOfPlayers },
        cardCount : { $set : deck.length },
        cardDeck : { $set : shuffle(deck) },
        past : { $set : [] },
        merchantTiles : { $set : shuffle(merchantTiles) }
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
    if (state.boardId && action.boardId && action.boardId !== state.boardId) {
        return state;
    }
    
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return state.initial ? processSetupGame(state, action) : state;

        case ActionTypes.TAKE_SEATS:
            return takeSeats(state, action);

        default:
            return state;
    }   
}