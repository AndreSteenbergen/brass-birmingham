import update from 'immutability-helper';
import Guid from 'guid';

import { ActionTypes } from '../actions/boardActions';
import { Cities, Merchants, Cards, Industries, Canals, Rails, Merchants, MerchantBonus, BreweryFarms, MerchantSales } from '../constants';
import { breweryFarms } from '../constants/breweryFarms';



function getInitialState() {
    return {
        boardId : Guid.raw(),
        cities : Cities,
        merchants : Merchants,
        links: Canals,
        breweryFarms: BreweryFarms, 
    };
}

function processSetupGame(state, numberOfPlayers) {

    return state;
}

export default function consultslist(state = getInitialState(), action) {
    switch (action.type) {
        case ActionTypes.SETUP_GAME:
            return processSetupGame(state, action.numberOfPlayers);

        default:
            return state;
    }   
}