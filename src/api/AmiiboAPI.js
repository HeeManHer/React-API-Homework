import { SET_AMIIBO } from '../module/amiibo';

export function getAmiibo(params) {

    const url = params ? `https://www.amiiboapi.com/api/amiibo/?character=${params}` : `https://www.amiiboapi.com/api/amiibo/`;

    return async function getAmiibo(dispatch, getState) {
        const result = await fetch(url)
            .then(res => res.json());

        dispatch({ type: SET_AMIIBO, payload: result });
    }
}