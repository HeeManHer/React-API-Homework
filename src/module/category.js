import { createActions, handleActions } from 'redux-actions';

export const SET_CATEGORY = 'category/SET_CATEGORY';

const category = 'category';

const action = createActions({
    [SET_CATEGORY]: () => { }
});

const categoryReducer = handleActions(
    {
        [SET_CATEGORY]: (state, { payload }) => payload
    },
    category
);

export default categoryReducer;