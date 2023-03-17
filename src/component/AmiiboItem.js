import '../css/amiiboStyle.css';
import Error from '../page/Error';

function AmiiboItem({ amiibo }) {


    
    if (amiibo == null) {
        return <Error />
    }

    return (
        <div className="card" id={amiibo.name}>
            <img src={amiibo.image} alt={amiibo.name} />
            <div>
                <p> name : {amiibo.character}</p>
                <p> gameSeries : {amiibo.gameSeries}</p>
                <p> amiiboSeries : {amiibo.amiiboSeries}</p>
            </div>
        </div>
    );
}

export default AmiiboItem;