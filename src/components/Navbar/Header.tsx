import './Header.css'
import hotelimg from '../../assets/images/hotelimg.png'
import profileImg from '../../assets/images/profileimg.png'
export default function Header() {
    return (
        <div className='header-container'>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img src={hotelimg} alt="" className='hotel-img' />
                <p className='Mentaurant-text'>Mentaurant</p>
            </div>
            <div style={{display:'flex',gap:'10px',marginLeft:'50%'}}>
                <img src={profileImg} alt="" className="profile-img" />
                <div>
                    <p className='name-text'>Haritha</p>
                    <p className='role-text'>Admin</p>
                </div>
            </div>
        </div>
    )
}