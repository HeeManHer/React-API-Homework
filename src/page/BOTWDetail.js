import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBotwDetail } from "../api/BotwAPI";
import '../css/botwDetailStyle.css';


function BOTWDetail() {

    const { id } = useParams();

    const { botwReducer } = useSelector(state => state);

    const botw = botwReducer.data;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getBotwDetail(id));
        },
        [id]
    );

    try {
        return (
            <div>
                <h1 className='title'>Name : {botw.name}</h1>

                <div className="detail">
                    <img src={botw.image} alt={botw.name} className="detail-img" />

                    <h2 className='title'>No.{botw.id}</h2>
                    <h3>Category : {botw.category}</h3>
                    <h3>Description : {botw.description}</h3>

                    {botw.attack && <h3>attack : {botw.attack}</h3>}
                    {botw.defense && <h3>defense : {botw.defense}</h3>}

                    {botw.cooking_effect && <h3>cooking_effect : {botw.cooking_effect}</h3>}
                    {botw.hearts_recovered && <h3>hearts_recovered : {botw.hearts_recovered} </h3>}

                    {botw.common_locations && <h2 className='title'>Common Location</h2>}
                    <ul>
                        {botw.common_locations && botw.common_locations.map(item => <li key={item}>{item}</li>)}
                    </ul>

                    {botw.drops && <h2 className='title'>Drop</h2>}
                    <ul>
                        {botw.drops && botw.drops.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    } catch (error) {
        return <h1>Loading...</h1>
    }
}

export default BOTWDetail;