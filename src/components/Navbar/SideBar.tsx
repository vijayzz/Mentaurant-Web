import './SideBar.css'
import homeimg from '../../assets/images/homeImg.png'
import dineimg from "../../assets/images/dineImg.png";
import tableimg from "../../assets/images/tableImg.png";
import billimg from "../../assets/images/billImg.png";
import settingImg from "../../assets/images/settingImg.png"
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate=useNavigate()
    const handlePage = (path: any) => {
        console.log(path);
        navigate(path);
    }
    return (
        <div className="Side-Menu-container">
            <div className='side-menus' onClick={() => handlePage("/home")}>
                <img src={homeimg} alt="Home" className='side-menu-imgs' />
                <p className='side-menu-text'>Home</p>
            </div>
            <div className='side-menus' onClick={()=>handlePage("/menu")}>
                <img src={dineimg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Menu</p>
            </div>
            <div className='side-menus' onClick={()=>handlePage("/table")}>
                <img src={tableimg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Table</p>
            </div>
            <div className='side-menus' onClick={()=>handlePage("/bill")}>
                <img src={billimg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Bill</p>
            </div>
            <div className='side-menus' onClick={()=>handlePage("/settings")} >
                <img src={settingImg} alt="" className='side-menu-imgs' />
                <p className='side-menu-text'>Setting</p>
            </div>
        </div>
    )
}