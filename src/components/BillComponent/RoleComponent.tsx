import './RoleComponent.css';
import { appImages } from "../../globals/appImages"

export default function RoleComponent() {
    const roleDetail = [
        {
            id: 1,
            img: appImages.managerImg,
            roleName: "Manager",
            profileImg: appImages.personPic,
            name: 'Abc'
        },
        {
            id: 2,
            img: appImages.waiterImg,
            roleName: "Waiter",
            profileImg: appImages.personPic,
            name: 'Abc'
        }
    ]
    return (
        <div className='roles-containers'>
           {roleDetail.map((items)=>(
            <div key={items.id} style={{display:'flex',gap:'5px',marginBottom:'10px'}}>
                <img src={items.img} alt="" className="imgs-items" />
                <p className='rolename-item'>{items.roleName}</p>
                <img src={items.profileImg} alt="" className='profileimg-items' />
                <p className='name-items'>{items.name}</p>
            </div>
           ))}
        </div>
    )
}