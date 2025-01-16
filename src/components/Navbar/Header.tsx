import './Header.css'
import hotelimg from '../../assets/images/hotelimg.png'
import profileImg from '../../assets/images/profileimg.png'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default function Header() {
    return (
        <div style={{ display: 'flex', gap: '20%', background: "linear-gradient(180deg, #53DAD1 0%, rgba(83, 218, 209, 0) 100%)" }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img src={hotelimg} alt="" className='hotel-img' />
                <p className='Mentaurant-text'>Mentaurant</p>
            </div>
            <div>
                <Input
                    placeholder="Search for food, coffee, etc."
                    prefix={<SearchOutlined />}
                    style={{ borderRadius: '20px', padding: '10px' }}
                />
            </div>
            <div style={{display:'flex',gap:'10px',marginLeft:'20%'}}>
                <img src={profileImg} alt="" style={{height:'60px',marginTop:'10px'}} />
                <div>
                    <p>name</p>
                    <p>role</p>
                </div>
            </div>
        </div>
    )
}