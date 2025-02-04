import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";


export default function Layout() {
    const obj:any = {
      admin: "/admin/home",
      chef: '/chef/home'
        
    }
    function role(userRole:any) {
        if (obj[userRole]) {
          window.location.href = obj[userRole]; 
        } else {
          console.error('not found');
        }
     }
    return (
        <div>
            <Header/>
            <div style={{ display: 'flex'}}>
                <SideBar />
                <Outlet />
            </div>

        </div>
    )
}