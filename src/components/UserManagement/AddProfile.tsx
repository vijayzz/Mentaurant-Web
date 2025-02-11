import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { appImages } from '../../globals/appImages';
import './AddProfile.css';
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/userAction';

export default function AddProfile({ show, setShow }: any) {
    const dispatch = useDispatch();

    const closeProfile = () => {
        setShow(false);
    };

    
    const [formData, setFormData] = useState({
        name: "",
        staffId:"",
        joiningDate: "",
        workingHours: "",
        workShift: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        const newUserProfile = {
            id: Date.now(),
            name: formData.name,
            staffId: formData.staffId,
            joiningDate: formData.joiningDate,
            workingHours: formData.workingHours,
            workShift: formData.workShift,
        };
        dispatch(addUser(newUserProfile));
        setShow(false);
    };

    const profileDetail = [
        { id: 1, labels: 'Name', inputs: 'name', type: 'text' },
        { id: 2, labels: 'Staff ID', inputs: 'staffId', type: 'text' },
        { id: 2, labels: 'Joining Date', inputs: 'joiningDate', type: 'date' },
        { id: 3, labels: 'Working Hours', inputs: 'workingHours', type: 'number' },
        { id: 4, labels: 'Working Shift', inputs: 'workShift', type: 'text' }
    ];

    return (
        <Drawer
            style={{
                width: '340px',
                marginLeft: '10%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
            }}
            title={
                <div className='title-container'>
                    <p className='add-new-text'>Add New</p>
                    <p className='closed-buttons'><CloseOutlined onClick={closeProfile} /></p>
                </div>
            }
            placement='right'
            closable={false}
            open={show}
            className='add-new-text'
        >
            <div>
                <img src={appImages.profileImg} className='profile-imgs' alt="" />
                <p className='staff-id'>Staff ID: <span className='id-number'>{formData.staffId}</span> </p>
            </div>
            <div style={{ cursor: 'pointer' }}>
                {profileDetail.map(({ id, labels, inputs, type }) => (
                    <div key={id}>
                        <label htmlFor={inputs} className='profile-label'>{labels}</label> <br />
                        <input
                            id={inputs}
                            name={inputs} 
                            type={type}
                            className='profile-input'
                            value={formData[inputs as keyof typeof formData]} // Controlled input
                            onChange={handleChange} 
                        />
                    </div>
                ))}
            </div>
            <div style={{ marginLeft: '23%', marginTop: '5%' }}>
                <Button color="danger" variant="outlined" className='cancel-btn' onClick={closeProfile}>
                    Cancel
                </Button>
                <Button color="danger" variant="solid" className='save-btn' onClick={handleSave}>
                    Save
                </Button>
            </div>
        </Drawer>
    );
}
