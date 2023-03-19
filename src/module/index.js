import { combineReducers } from 'redux';
import amiiboReducer from './amiibo';
import searchReducer from './search';
import botwReducer from './botw';
import pageReducer from './page';

const rootReducer = combineReducers({
    amiiboReducer,
    searchReducer,
    botwReducer,
    pageReducer
});

export default rootReducer;