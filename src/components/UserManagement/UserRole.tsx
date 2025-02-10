import { Button } from 'antd'
import './UserRole.css'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import AddProfile from './AddProfile'
export default function UserRole({ onClick, roleSelection }: any) {
    const [showProfile, setShowProfile] = useState<any>(false)
    const handleProfile = () => {
        setShowProfile(true)
    }

    const roles = [
        {
            id: 1,
            role: "Manager"
        },
        {
            id: 2,
            role: "Waiter"
        },
        {
            id: 3,
            role: "Chef"
        },
        {
            id: 4,
            role: "Admin"
        }
    ]
    return (
        <div className='user-role'>
            <div className="role-container" >{
                roles.map(({ role }) => (
                    <p className={role === roleSelection ? 'user-role-texts-active' : 'user-role-texts'} onClick={() => onClick(role)}>{role}</p>
                ))
            }

            </div>
            <Button type='primary' danger className='add-btns' onClick={handleProfile}><PlusCircleOutlined />Add</Button>
            <AddProfile show={showProfile} setShow={setShowProfile} />
        </div>

    )
}