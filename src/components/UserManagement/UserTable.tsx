import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { appImages } from '../../globals/appImages';
import './UserTable.css'
import { Table } from "antd";

export default function UserTable() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
        {
            key: '2',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
        {
            key: '3',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
        {
            key: '4',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
        {
            key: '5',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
        {
            key: '6',
            name: 'Mike',
            staffId: 'REC230497',
            joiningDate: '12/09/2023',
            workingHours: '12',
            workShift: 'Morning',
            action: ''
        },
    ];

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
            render: (_: any,) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <EditOutlined
                        style={{ color: 'red', cursor: 'pointer',marginLeft:'35%',height:'12px',width:'12px' }}
                       
                    />
                    <DeleteOutlined
                        style={{ color: 'red', cursor: 'pointer' }}
                    />
                </div>
            )
        },
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
        </div>
    )
}