import { NavLink } from "react-router-dom";

function Error() {

    return (
        <div>
            <h1>404 Not Found</h1>
            <button><NavLink to='/amiibo'>뒤로가기</NavLink></button>
        </div>
    )
}

export default Error;