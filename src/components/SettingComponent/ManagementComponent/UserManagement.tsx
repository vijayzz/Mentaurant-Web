import UserRole from "../../UserManagement/UserRole";
import UserTable from "../../UserManagement/UserTable";

export default function UserManagement() {
    return (
        <div style={{
            backgroundColor: '#F6F6F6',
            marginLeft: '24%',
            marginTop: '5%',
            width: '100%',
            height: '555px',
            borderRadius:'14px'
        }}>
            <UserRole />
            <UserTable />
        </div>
    )
}