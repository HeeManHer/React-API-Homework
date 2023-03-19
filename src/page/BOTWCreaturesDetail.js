import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBotwDetail, removeBotw } from "../api/BotwAPI";
import '../css/botwDetailStyle.css';


function BOTWCreaturesDetail({ id }) {

    const { botwReducer } = useSelector(state => state);

    const botw = botwReducer.data;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(removeBotw());
            dispatch(getBotwDetail(id));
        },
        [id]
    );

    console.log(botw);
    try {
        return (
            <div>
                <h1 className='title'>Name : {botw.name}</h1>

                <div className="detail">
                    <img src={botw.image} alt={botw.name} className="detail-img" />

                    <h2 className='title'>No.{botw.id}</h2>
                    <h3>Category : {botw.category}</h3>
                    <h3>Description : {botw.description}</h3>

                    <h2 className='title'>Common Location</h2>
                    <ul>
                        {botw.common_locations.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    } catch (error) {
        <h1>Loading...</h1>
    }
}

export default BOTWCreaturesDetail;