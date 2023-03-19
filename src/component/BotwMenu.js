import { NavLink } from "react-router-dom";

function BotwCategory() {

    return (
        <div>
            <ul>
                <li><NavLink to="creatures">creatures</NavLink></li>
                <li><NavLink to="monsters">monsters</NavLink></li>
                <li><NavLink to="materials">materials</NavLink></li>
                <li><NavLink to="equipment">equipment</NavLink></li>
                <li><NavLink to="treasure">treasure</NavLink></li>
            </ul>
        </div>

    )
}

export default BotwCategory;