import { Outlet } from "react-router-dom";
import BotwCategory from "../component/BotwMenu";

function BotwLayout() {

    return (
        <>
            <BotwCategory />
            <Outlet />
        </>
    );
}

export default BotwLayout;