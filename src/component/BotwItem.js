import '../css/cardStyle.css';
import { Link } from 'react-router-dom';

function BotwItem({ botw }) {
    return (
        <Link to={`./${botw.id}`}>
            <div className="card">
                <div>
                    <p> Id : {botw.id}</p>
                    <p> Name : {botw.name}</p>
                </div>
                <img src={botw.image} alt={botw.name} />
            </div>
        </Link>
    );
}

export default BotwItem;