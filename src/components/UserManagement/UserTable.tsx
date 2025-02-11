import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { appImages } from '../../globals/appImages';
import './UserTable.css'
import { Table } from "antd";
import { useState } from 'react';
import EditProfile from './EditProfile';
import DeleteProfile from './DeleteProfile';
import { useSelector } from 'react-redux';

export default function UserTable() {
    const [editProfile, setEditProfile] = useState(false)                          
    const [selectedUserData, setSlectedUserData] = useState<any>()
    const handleEdit = (record: any) => {
        setSlectedUserData(record)
        setEditProfile(true)
    }

    const[deleteModalVisible,setDeleteModalVisible]=useState(false)
    const[deleteUser,setDeleteUser]=useState()
    const handleDelete = (record: any) => {
        setDeleteModalVisible(true);
        setDeleteUser(record); 
    };


    const userData=useSelector((state:any)=>state.profileData.userProfileData)||[]
    const dataSource = userData?.map((datas: any) => ({
        key: datas.id, 
        ...datas
    })) || [];
    
    console.log("Data Source for Table:", dataSource);
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                        src={appImages.usertableImg}
                        // alt={text} 
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: 'Staff ID',
            dataIndex: 'staffId',
            key: 'staffId',
        },
        {
            title: 'Joining Date',
            dataIndex: 'joiningDate',
            key: 'joiningDate',
        },
        {
            title: 'Working Hours',
            dataIndex: 'workingHours',
            key: 'workingHours',
        },
        {
            title: 'WorkShift',
            dataIndex: 'workShift',
            key: 'workShift',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: any) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <EditOutlined onClick={() => handleEdit(record)}
                        style={{ color: 'red', cursor: 'pointer', marginLeft: '35%', height: '12px', width: '12px' }}

                    />
                    <DeleteOutlined onClick={()=>handleDelete(record)}
                        style={{ color: 'red', cursor: 'pointer' }}
                    />
                </div>
            )
        },
    ];
    const profileDetail: any = [
        {
            id: 1,
            labels: 'Name',
            inputs: 'name',
            type: 'text'
        },
        {
            id: 2,
            labels: 'Joining Date',
            inputs: 'joiningDate', 
            type: 'date'
        },
        {
            id: 3,
            labels: 'Working Hours',
            inputs: 'workingHours',  
            type: 'number'
        },
        {
            id: 4,
            labels: 'Working Shift',
            inputs: 'workShift',  
            type: 'text'
        }
    ];
    
    return (
        <div className='user-table-container'>
            <Table
                id='user-table'
                dataSource={dataSource}
                columns={columns}
                scroll={{ y: 400 }}
                pagination={false}
                rowClassName="custom-row" />
            <EditProfile open={editProfile} setOpen={setEditProfile} user={selectedUserData} details={profileDetail} />
            <DeleteProfile open={deleteModalVisible} setOpen={setDeleteModalVisible} user={deleteUser} />
        </div>
    )
}


