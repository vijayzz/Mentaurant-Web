import { useState } from "react";
import UserRole from "../../UserManagement/UserRole";
import UserTable from "../../UserManagement/UserTable";

export default function UserManagement() {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleClick = (role:any) => {
        setSelectedRole(role);
    };

    return (
        <div style={{
            backgroundColor: '#F6F6F6',
            marginLeft: '24%',
            marginTop: '5%',
            width: '74%',
            height: '555px',
            borderRadius: '14px',
            position:'fixed'
        }}>
            <UserRole onClick={handleRoleClick} roleSelection={selectedRole} />
            {selectedRole === "Manager" && <UserTable />}
        </div>
    );
}
