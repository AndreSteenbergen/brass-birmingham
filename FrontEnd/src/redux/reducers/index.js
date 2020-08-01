import { createStore, combineReducers } from 'redux';

import { ActionTypes } from '../actions/boardActions';

import gameReducer from './gameReducer';
import profileReducer from './profileReducer';

export function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers }
  
  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
        if (action.type === ActionTypes.SETUP_GAME) {
            reducers[action.boardId] = gameReducer;            
        }

        return combineReducers(reducers)(state, action);
    }
  }
}

const staticReducers = {
    profile : profileReducer
}

export default (initialState) => {
    const reducerManager = createReducerManager(staticReducers);  
    const store = createStore(reducerManager.reduce, initialState);
    store.reducerManager = reducerManager;

    return store;
}