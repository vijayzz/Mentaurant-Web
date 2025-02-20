import './EditProfile.css';
import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { appImages } from "../../globals/appImages";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../../actions/userAction';

export default function EditProfile({ open, setOpen, user, details }: any) {
    const dispatch = useDispatch();


    const [formData, setFormData] = useState(user || {});

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const onClose = () => {
        setOpen(false);
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        if (formData.id) {
            dispatch(updateUser(formData)); 
        }
        setOpen(false);
    };
    
    return (
        <Drawer
            title={
                <div className='edit-title-container'>
                    <p className='edit-profile-text'>Edit Profile</p>
                    <p className='edit-closed-buttons'><CloseOutlined onClick={onClose} /></p>
                </div>
            }
            placement="right"
            open={open}
            closable={false}
            style={{ width: '340px', marginLeft: '10%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
        >
            {user ? (
                <div>
                    <div>
                        <img src={appImages.profileImg} className='profile-imgs' alt="" />
                        <p className='staff-id'>Staff ID: <span className='id-number'>{formData.staffId}</span></p>
                    </div>
                    {details.map(({ id, labels, inputs, type }: any) => (
                        <div key={id} style={{ marginBottom: '16px' }}>
                            <label htmlFor={inputs} className="profile-label">{labels}</label><br />
                            <input
                                id={inputs}
                                name={inputs}
                                type={type}
                                value={formData[inputs] || ''}
                                className="profile-input"
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No user selected.</p>
            )}

            <div style={{ marginLeft: '70px', }}>
                <Button className='cancel-btn' onClick={onClose}>
                    Cancel
                </Button>
                <Button color="danger" variant="solid" className='save-btn' onClick={handleSave}>
                    Save
                </Button>
            </div>
        </Drawer>
    );
}
