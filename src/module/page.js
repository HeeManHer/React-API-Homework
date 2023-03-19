import { createActions, handleActions } from "redux-actions";

export const NEXT_PAGE = 'page/NEXT_PAGE';
export const PREV_PAGE = 'page/PREV_PAGE';
export const SET_PAGE = 'page/SET_PAGE';

const page = 0;

const action = createActions({
    [NEXT_PAGE]: () => { },
    [PREV_PAGE]: () => { },
    [SET_PAGE]: () => { }
});

const pageReducer = handleActions(
    {
        [NEXT_PAGE]: (state, { payload }) => state + payload,
        [PREV_PAGE]: (state, { payload }) => state - payload,
        [SET_PAGE]: (state, { payload }) => payload
    },
    page
);

export default pageReducer;
