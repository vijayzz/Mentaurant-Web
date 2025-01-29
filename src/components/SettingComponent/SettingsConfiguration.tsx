import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { appImages } from "../../globals/appImages";
import "../SettingComponent/SettingsConfiguration.css";

const managementOptions = [
    { path: "floor_management", img: appImages.floorImg, name: "Floor Management" },
    { path: "table_management", img: appImages.tableimg, name: "Table Management" },
    { path: "menu_management", img: appImages.menuImg, name: "Menu Management" },
    { path: "user_management", img: appImages.userImg, name: "User Management" }
];

export default function SettingsConfiguration() {
    const navigate = useNavigate();
    const [activeManagement, setActiveManagement] = useState(null);

    const handleManagement = (path: any) => {
        setActiveManagement(path);
        navigate(path);
    };

    return (
        <div style={{ display: 'flex',width:'100%',height:'100%' }}>
            <div className="settings-configuration">
                <p className="config-text">Settings & Configuration</p>

                {managementOptions.map(({ path, img, name }) => (
                    <div
                        key={path}
                        className={`configuration-container ${activeManagement === path ? 'active' : ''}`}
                        onClick={() => handleManagement(path)}
                    >
                        <img src={img} alt={name} className="img-management" />
                        <p className="management-text">{name}</p>
                    </div>
                ))}

            </div>
            <Outlet />
        </div>
    );
}
