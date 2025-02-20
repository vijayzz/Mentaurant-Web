import './SideBar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { appImages } from '../../globals/appImages';

export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handlePage = (path: string) => {
        navigate(path);
    };
    const sideMenu = {
        admin: [
            {
                id: 1,
                img: appImages.homeImg,
                name: "Home",
                path: "/home"

            }, ,
            {
                id: 2,
                img: appImages.dineimg,
                name: "Menu",
                path: "/menu"

            },
            {
                id: 3,
                img: appImages.tableimg,
                name: "Table",
                path: "/table"

            },
            {
                id: 4,
                img: appImages.billimg,
                name: "Bill",
                path: "/bill"

            },
            {
                id: 5,
                img: appImages.settingImg,
                name: "Setting",
                path: "/settings"

            },
        ],
        manager: [
            {
                id: 1,
                img: appImages.homeImg,
                name: "Home",
                path: "/home"

            }, ,
            {
                id: 2,
                img: appImages.dineimg,
                name: "Menu",
                path: "/menu"

            },
            {
                id: 3,
                img: appImages.tableimg,
                name: "Table",
                path: "/table"

            },
        ],
        cashier: [
            {
                id: 1,
                img: appImages.homeImg,
                name: "Home",
                path: "/home"

            }, ,
            {
                id: 2,
                img: appImages.billimg,
                name: "Bill",
                path: "/bill"

            },
        ],
        chef: [
            {
                id: 1,
                img: appImages.homeImg,
                name: "Home",
                path: "/home"

            }, ,
            {
                id: 2,
                img: appImages.dineimg,
                name: "Menu",
                path: "/menu"

            },
        ]
    }


    return (
        <div className="Side-Menu-container">
            <div>
                {sideMenu["admin"].map((items: any) => (
                    <div className={`side-menus ${location.pathname === items.path ? "active" : ""}`} onClick={() => handlePage(items.path)}>
                        <img src={items?.img} alt="" className="side-menu-imgs" />
                        <p className="side-menu-text">{items.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
