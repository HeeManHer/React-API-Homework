import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBotw } from '../api/BotwAPI';
import BotwItem from '../component/BotwItem';

function BOTW({ category }) {

    const { botwReducer } = useSelector(state => state);

    const botws = botwReducer.data;

    const dispatch = useDispatch();


    useEffect(
        () => {
            dispatch(getBotw(category));
        },
        [category]
    );

    if (category === 'all') {
        try {
            return (
                botws ? (
                    <div>
                        <h1>creatures</h1>
                        {botws.creatures.non_food.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        {botws.creatures.food.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        <h1>monsters</h1>
                        {botws.monsters.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        <h1>materials</h1>
                        {botws.materials.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        <h1>equipment</h1>
                        {botws.equipment.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        <h1>treasure</h1>
                        {botws.treasure.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                    </div >
                ) : (
                    <h1>Loading...</h1>
                )
            );
        } catch (error) {
            return <h1>Loading...</h1>;
        }
    }

    if (category === 'creatures') {
        try {
            return (
                botws ? (
                    <div>
                        <h1>{category}</h1>
                        {botws.non_food.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                        {botws.food.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                    </div >
                ) : (
                    <h1>Loading...</h1>
                )
            );
        } catch (error) {
            return <h1>Loading...</h1>;
        }
    }

    try {
        return (
            botws ? (
                <div>
                    <h1>{category}</h1>
                    {botws.sort(arrSort).map(botw => (<BotwItem key={botw.id} botw={botw} />))}
                </div >
            ) : (
                <h1>Loading...</h1>
            )
        );
    } catch (error) {
        return <h1>Loading...</h1>;
    }

}

function arrSort(a, b) {

    return a.id - b.id;
}

export default BOTW;