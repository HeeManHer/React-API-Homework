import { combineReducers } from 'redux';
import amiiboReducer from './amiibo';
import searchReducer from './search';
import categoryReducer from './category';

const rootReducer = combineReducers({
    amiiboReducer,
    searchReducer,
    categoryReducer
});

export default rootReducer;