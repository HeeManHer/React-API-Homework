import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAmiibo } from '../api/AmiiboAPI';
import AmiiboItem from '../component/AmiiboItem';
import { SET_CATEGORY } from '../module/category';
import { SET_SEARCH } from '../module/search';

function Amiibo() {

    const [searchParams] = useSearchParams();

    const { amiiboReducer, searchReducer: searchVlaue, categoryReducer: category } = useSelector(state => state);

    const amiibo = amiiboReducer.amiibo;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const character = searchParams.get('character');

    console.log('character : ', character);

    useEffect(
        () => {
            dispatch(getAmiibo(character));
        },
        [character]
    );

    const onClickHandler = () => {
        navigate(`/amiibo/search?character=${searchVlaue}`);
    }

    const onCategoryChange = (category) => {
        dispatch({ type: SET_CATEGORY, payload: category });
    }

    const onSearchChange = (search) => {
        dispatch({ type: SET_SEARCH, payload: search });
    }

    return (
        amiibo && (
            <>
                <label>검색 </label>
                <label>캐릭터 : </label>
                <input
                    type="search"
                    name='character'
                    value={searchVlaue}
                    onChange={e => onSearchChange(e.target.value)}
                />
                <button onClick={onClickHandler}>이동</button>
                <br />
                <div>
                    {amiibo.map(amiibo => <AmiiboItem amiibo={amiibo} key={amiibo.tail} />)}
                </div>
            </>
        )
    );

}

export default Amiibo;