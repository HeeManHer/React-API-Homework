import { createActions, handleActions } from 'redux-actions';

export const SET_SEARCH = 'search/SET_SEARCH';

const search = '';

const setSearchValue = createActions({
    [SET_SEARCH]: () => { }
})


const searchReducer = handleActions(
    {
        [SET_SEARCH]: (state, { payload }) => payload
    },
    search
);

export default searchReducer;