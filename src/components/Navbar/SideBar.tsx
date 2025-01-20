import './SideBar.css'
import homeimg from '../../assets/images/homeImg.png'
import dineimg from "../../assets/images/dineImg.png";
import tableimg from "../../assets/images/tableImg.png";
import billimg from "../../assets/images/billImg.png";
import settingImg from "../../assets/images/settingImg.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar() {
    const [activeMenu,setActiveMenu]=useState("/home")
    const navigate=useNavigate()
    const handlePage = (path: any) => {
        setActiveMenu(path)
        console.log(path);
        navigate(path);
    }
    return (
        <div className="Side-Menu-container">
            <div className={`side-menus ${activeMenu === "/home" ? 'active' : ''}`}  onClick={() => handlePage("/home")}>
                <img src={homeimg} alt="Home" className='side-menu-imgs' />
                <p className={`side-menu-text ${activeMenu === "/home" ? 'active-text' : ''}`}>Home</p>
            </div>
            <div className={`side-menus ${activeMenu === "/menu" ? 'active' : ''}`}  onClick={()=>handlePage("/menu")}>
                <img src={dineimg} alt="" className='side-menu-imgs' />
                <p className={`side-menu-text ${activeMenu === "/menu" ? 'active-text' : ''}`}>Menu</p>
            </div>
            <div className={`side-menus ${activeMenu === "/table" ? 'active' : ''}`}  onClick={()=>handlePage("/table")}>
                <img src={tableimg} alt="" className='side-menu-imgs' />
                <p className={`side-menu-text ${activeMenu === "/table" ? 'active-text' : ''}`}>Table</p>
            </div>
            <div className={`side-menus ${activeMenu === "/bill" ? 'active' : ''}`}  onClick={()=>handlePage("/bill")}>
                <img src={billimg} alt="" className='side-menu-imgs' />
                <p className={`side-menu-text ${activeMenu === "/bill" ? 'active-text' : ''}`}>Bill</p>
            </div>
            <div className={`side-menus ${activeMenu === "/settings" ? 'active' : ''}`}  onClick={()=>handlePage("/settings")} >
                <img src={settingImg} alt="" className='side-menu-imgs' />
                <p className={`side-menu-text ${activeMenu === "/settings" ? 'active-text' : ''}`}>Setting</p>
            </div>
        </div>
    )
}