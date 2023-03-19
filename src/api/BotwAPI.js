import { SET_BOTW, REMOVE_BOTW } from '../module/botw';

export function getBotw(category) {

    const url = category === 'all' ?
        `https://botw-compendium.herokuapp.com/api/v2` :
        `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;

    return async function getBotw(dispatch, getState) {
        const result = await fetch(url)
            .then(res => res.json());

        dispatch({ type: SET_BOTW, payload: result });
    }
}

export function removeBotw() {

    return async function getBotw(dispatch, getState) {
        dispatch({ type: REMOVE_BOTW });
    }
}

export function getBotwDetail( id) {
    const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`;

    return async function getBotw(dispatch, getState) {
        const result = await fetch(url)
            .then(res => res.json());

        dispatch({ type: SET_BOTW, payload: result });
    }

}
