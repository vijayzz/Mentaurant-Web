import './Login.css'
import { appImages } from "../../globals/appImages";
import { EyeOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/home")
    }
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${appImages.loginbg})`,
                    height: '645px',
                    backgroundSize: 'cover',
                }} >

                <img src={appImages.hotelImg} alt="" className='login-hotelImg' />
                <p className='login-mentaurant'>Mentaurant</p>

                <div className='login-page'>
                    <div>
                        <p className='welcome-text'>Welcome,</p>
                        <p className='login-text'>Login to continue</p>
                    </div>
                    <div>
                        <input type="email" name='email' placeholder='' /> <br />
                        <input type="password" name='password' placeholder=' ' />
                        <EyeOutlined style={{ color: '#53DAD1', marginLeft: '-17px' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Checkbox style={{ marginLeft: '11%' }} className='remember-text' >Remember me</Checkbox>
                        <p className='forgot-pw'>Forgot Password?</p>
                    </div>
                    <div>
                        <Button type='primary' danger
                            className='login-btns'
                            onClick={handleLogin}>
                            Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}