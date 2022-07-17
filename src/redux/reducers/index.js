import {combineReducers} from 'redux';
import connectivity from './connectivity';

// Main Root Reducer Which Combine All Reducers
const rootReducer = combineReducers({
  connectivity,
});

export default rootReducer;
