import './UserRole.css'
export default function UserRole() {
    const roles = [
        {
            id: 1,
            role: "Manager"
        },
        {
            id:2,
            role:"Waiter"
        },
        {
            id:3,
            role:"Chef"
        },
        {
            id:4,
            role:"Admin"
        }
    ]
    return (
        <div className="role-container" >{
            roles.map(({role})=>(
                <p>{role}</p>
            ))
        }
        </div>
    )
}