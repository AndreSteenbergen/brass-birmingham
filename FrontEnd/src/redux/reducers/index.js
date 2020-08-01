import { createStore, combineReducers } from 'redux';

import { ActionTypes } from '../actions/boardActions';

import gameReducer from './gameReducer';
import profileReducer from './profileReducer';

//https://redux.js.org/recipes/code-splitting/#using-a-reducer-manager
export function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state, action) => {
        //when the action is to setup a board, create a new gameReducer and add that one to the keys
        if (action.type === ActionTypes.SETUP_GAME) {
            reducers[action.boardId] = gameReducer;
            combineReducers(reducers);
        }
      
        // Delegate to the combined reducer
        return combinedReducer(state, action)
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