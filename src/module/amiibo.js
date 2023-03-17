import { createActions, handleActions } from 'redux-actions';

export const SET_AMIIBO = 'amiibo/SET_AMIBO';

const amiibo = [];

const action = createActions({
    [SET_AMIIBO]: () => { }
})

const amiiboReducer = handleActions(
    {
        [SET_AMIIBO]: (state, { payload }) => payload
    },
    amiibo
);

export default amiiboReducer;