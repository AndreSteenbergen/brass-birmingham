import { combineReducers } from 'redux';

import gameReducer from './gameReducer';

export default () => {
    return combineReducers(
    {
        game : gameReducer,
    });
}