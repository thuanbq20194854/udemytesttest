import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Header />

            <Outlet />

            <div></div>
        </>
    );
}

export default MainLayout;
