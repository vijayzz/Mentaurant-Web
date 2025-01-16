import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <Outlet />
            </div>

        </div>
    )
}