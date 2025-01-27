import { Route, Routes } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import Home from "./components/SideMenuPage/Home";
import Menu from "./components/SideMenuPage/Menu";
import Setting from "./components/SideMenuPage/Settings";
import Bills from "./components/SideMenuPage/Bills";
import TableMain from "./components/Tables/TableMain";
import FoodMenu from "./components/FoodMenus";

export default function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<FoodMenu />} />
                <Route path="/settings" element={<Setting/>} />
                <Route path="/table" element={<TableMain/>}/>
                <Route path="/bill" element={<Bills/>} />
                <Route/>
            </Route>
        </Routes>
    );
}
