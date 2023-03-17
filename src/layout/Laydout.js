import Footer from "../component/Footer";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function Layout() {

    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;