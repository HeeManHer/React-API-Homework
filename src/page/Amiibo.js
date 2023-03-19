import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAmiibo } from '../api/AmiiboAPI';
import AmiiboItem from '../component/AmiiboItem';
import { SET_SEARCH } from '../module/search';
import { SET_PAGE } from '../module/page';
import PageBar from "../component/PageingBar";
import '../css/cardStyle.css';

function Amiibo() {

    const { amiiboReducer, searchReducer: searchVlaue, pageReducer } = useSelector(state => state);

    const amiibo = amiiboReducer.amiibo;

    const cardCount = 30;
    const start = cardCount * pageReducer;
    const end = start + cardCount;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch({ type: SET_SEARCH, payload: '' });
            dispatch(getAmiibo());
            dispatch({ type: SET_PAGE, payload: 0 });
        },
        []
    );

    const onClickHandler = () => {
        navigate(`/amiibo/search?character=${searchVlaue}`);
    }

    const onSearchChange = (search) => {
        dispatch({ type: SET_SEARCH, payload: search });
    }

    return (
        amiibo && (
            <>
                <PageBar />
                <label>검색 </label>
                <label>캐릭터 : </label>
                <input
                    type="search"
                    name="searchVlaue"
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
        )
    );

}

export default Amiibo;