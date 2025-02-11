import './SideBar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { appImages } from '../../globals/appImages';

export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation(); 

    const handlePage = (path: string) => {
        navigate(path);
    };

    return (
        <div className="Side-Menu-container">
            <div
                className={`side-menus ${location.pathname === "/home" ? 'active' : ''}`}
                onClick={() => handlePage("/home")}
            >
                <img src={appImages.homeImg} alt="" className="side-menu-imgs" />
                <p className="side-menu-text">Home</p>
            </div>
            <div
                className={`side-menus ${location.pathname === "/menu" ? 'active' : ''}`}
                onClick={() => handlePage("/menu")}
            >
                <img src={appImages.dineimg} alt="" className="side-menu-imgs" />
                <p className="side-menu-text">Menu</p>
            </div>
            <div
                className={`side-menus ${location.pathname === "/table" ? 'active' : ''}`}
                onClick={() => handlePage("/table")}
            >
                <img src={appImages.tableimg} alt="" className="side-menu-imgs" />
                <p className="side-menu-text">Table</p>
            </div>
            <div
                className={`side-menus ${location.pathname === "/bill" ? 'active' : ''}`}
                onClick={() => handlePage("/bill")}
            >
                <img src={appImages.billimg} alt="" className="side-menu-imgs" />
                <p className="side-menu-text">Bill</p>
            </div>
            <div
                className={`side-menus ${location.pathname.startsWith  ("/settings") ? 'active' : ''}`}
                onClick={() => handlePage("/settings")}
            >
                <img src={appImages.settingImg} alt="" className="side-menu-imgs" />
                <p className="side-menu-text">Setting</p>
            </div>
        </div>
    );
}
