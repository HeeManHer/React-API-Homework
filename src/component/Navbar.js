import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Main Page</NavLink></li>
                <li><NavLink to="/amiibo">Amiibo</NavLink></li>
                <li><NavLink to="/botw">The Legend Of Zelda : Breath Of The Wild</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;