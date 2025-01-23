import './SideBar.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { appImages } from '../../globals/appImages';

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
               <img src={ appImages.homeImg } alt="" className='side-menu-imgs'    /> 
                <p className='side-menu-text'>Home</p>
            </div>
            <div className={`side-menus ${activeMenu === "/menu" ? 'active' : ''}`}  onClick={()=>handlePage("/menu")}>
                 <img src={appImages.dineimg} alt="" className='side-menu-imgs' /> 
                <p className='side-menu-text'>Menu</p>
            </div>
            <div className={`side-menus ${activeMenu === "/table" ? 'active' : ''}`}  onClick={()=>handlePage("/table")}>
                <img src={appImages.tableimg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Table</p>
            </div>
            <div className={`side-menus ${activeMenu === "/bill" ? 'active' : ''}`}  onClick={()=>handlePage("/bill")}>
                <img src={appImages.billimg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Bill</p>
            </div>
            <div className={`side-menus ${activeMenu === "/settings" ? 'active' : ''}`}  onClick={()=>handlePage("/settings")} >
                <img src={appImages.settingImg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Setting</p>
            </div>
        </div>
    )
}