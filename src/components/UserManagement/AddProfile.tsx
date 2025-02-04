import { appImages } from '../../globals/appImages';
import './AddProfile.css'
import { CloseOutlined } from "@ant-design/icons";


export default function AddProfile() {
    return (
        <div className="add-profile-container">
            <div className='text-profile'>
                <p>Add New</p>
                <p style={{color:'#E04040'}}><CloseOutlined /></p>
            </div>
            <div>
                <img src={appImages.profileImg} className='profile-imgs' alt="" />
                <p className='staff-id'>StaffID: <span className='id-number'>2345432</span> </p>
            </div>
        </div>
    )
}