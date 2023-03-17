import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">메인화면</NavLink></li>
                <li><NavLink to="/amiibo">아미보</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;