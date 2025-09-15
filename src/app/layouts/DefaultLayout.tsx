import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

const DefaultLayout = () => {
    return (
        <div className="default-layout">
            <Header/>
            <main className="main-content">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
