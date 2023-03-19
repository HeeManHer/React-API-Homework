import { useDispatch, useSelector } from 'react-redux';
import { NEXT_PAGE, PREV_PAGE } from '../module/page';
import '../css/page.css';

function PageBar() {

    const { pageReducer: page } = useSelector(state => state);

    const dispatch = useDispatch();

    const prevBtn = () => {
        dispatch({ type: PREV_PAGE, payload: 1 });
    }

    const nextBtn = () => {
        dispatch({ type: NEXT_PAGE, payload: 1 });
    }

    return (
        <>
            <button onClick={prevBtn}>이전</button>
            <button onClick={nextBtn}>다음</button>
            <br />
        </>
    )


}

export default PageBar;