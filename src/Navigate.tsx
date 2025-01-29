import { Route, Routes } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import Home from "./components/SideMenuPage/Home";
import Setting from "./components/SideMenuPage/Settings";
import Bills from "./components/SideMenuPage/Bills";
import TableMain from "./components/Tables/TableMain";
import FoodMenu from "./components/FoodMenus";
import UserManagement from "./components/SettingComponent/ManagementComponent/UserManagement";
import FloorManagement from "./components/SettingComponent/ManagementComponent/FloorManagement";
import TableManagement from "./components/SettingComponent/ManagementComponent/TableManagement";
import MenuManagement from "./components/SettingComponent/ManagementComponent/MenuManagement";

export default function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<FoodMenu />} />
                <Route path="/settings" element={<Setting />}>
                    <Route path="floor_management" element={<FloorManagement />} />
                    <Route path="table_management" element={<TableManagement />} />
                    <Route path="menu_management" element={<MenuManagement />} />
                    <Route path="user_management" element={<UserManagement />} />
                </Route>
                <Route path="/table" element={<TableMain />} />
                <Route path="/bill" element={<Bills />} />
                <Route />
            </Route>
        </Routes>
    );
}
