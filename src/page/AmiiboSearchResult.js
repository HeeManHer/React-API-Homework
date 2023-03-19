import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAmiibo } from '../api/AmiiboAPI';
import AmiiboItem from '../component/AmiiboItem';
import { SET_SEARCH } from '../module/search';
import { SET_PAGE } from '../module/page';
import PageBar from "../component/PageingBar";
import Error from '../page/Error';

function Amiibo() {

    const [searchParams] = useSearchParams();

    const { amiiboReducer, searchReducer: searchVlaue, pageReducer } = useSelector(state => state);

    const amiibo = amiiboReducer.amiibo;

    const cardCount = 30;
    const start = cardCount * pageReducer;
    const end = start + cardCount;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const character = searchParams.get('character');

    useEffect(
        () => {
            dispatch({ type: SET_SEARCH, payload: '' });
            dispatch(getAmiibo(character));
            dispatch({ type: SET_PAGE, payload: 0 });
        },
        [character]
    );

    const onClickHandler = () => {
        navigate(`/amiibo/search?character=${searchVlaue}`);
    }

    const onSearchChange = (search) => {
        dispatch({ type: SET_SEARCH, payload: search });
    }

    return (
        amiibo ? (
            <>
                <PageBar />
                <label>검색 </label>
                <label>캐릭터 : </label>
                <input
                    type="search"
                    name="character"
                    value={searchVlaue}
                    onChange={e => onSearchChange(e.target.value)}
                />
                <button onClick={onClickHandler}>이동</button>
                <br />
                <div>
                    {amiibo.slice(start, end).map(amiibo => <AmiiboItem amiibo={amiibo} key={amiibo.tail} />)}
                </div>
                <PageBar />
            </>
        ) : (<Error />)
    );

}

export default Amiibo;