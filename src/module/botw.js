import { createActions, handleActions } from 'redux-actions';

export const SET_BOTW = 'zleda/SET_BOTW';
export const REMOVE_BOTW = 'zleda/REMOVE_BOTW';

const zelda = [];

const action = createActions({
    [SET_BOTW]: () => { },
    [REMOVE_BOTW]: () => { }
})

const botwReducer = handleActions(
    {
        [SET_BOTW]: (state, { payload }) => payload,
        [REMOVE_BOTW]: (state, action) => []
    },
    zelda
);

export default botwReducer;