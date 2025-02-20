import './Login.css';
import { appImages } from "../../globals/appImages";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { mentaurantAxios } from '../../state/http';
import { useState } from 'react';

export default function Login({ role }: any) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        try {
            const response = await mentaurantAxios.loginAxios(email, password);
            console.log(response, "response====");
            if (response && typeof response === 'object' && "status" in response) {
                if (response.status === 1) {
                    navigate("/home");
                } else {
                    message.error("Incorrect email or password. Please try again.")
                    console.error("Incorrect email or password. Please try again.", response);
                }
            } else {
                message.error("Login failed")
                console.error("Invalid response format", response);
            }
        } catch (error) {
            message.error("Incorrect email or password. Please try again.")
            console.error("Error during login", error);
        }
    }
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${appImages.loginbg})`,
                    height: '645px',
                    backgroundSize: 'cover',
                }}>

                <img src={appImages.hotelImg} alt="" className='login-hotelImg' />
                <p className='login-mentaurant'>Mentaurant</p>

                <div className='login-page'>
                    <div>
                        <p className='welcome-text'>Welcome,</p>
                        <p className='login-text'>Login to continue</p>
                    </div>
                    <form action="" method="post">
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder=''
                                onChange={(e) => setEmail(e.target.value)}
                            /> <br />

                            <div style={{ position: 'relative', }}>
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder=" "
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ flex: 1 }}
                                />
                                <span
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#53DAD1',
                                        marginLeft: '-30px',
                                    }}
                                >
                                    {isPasswordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <Checkbox style={{ marginLeft: '11%' }} className='remember-text'>Remember me</Checkbox>
                            <p className='forgot-pw'>Forgot Password?</p>
                        </div>

                        <div>
                            <Button
                                type='primary'
                                danger
                                className='login-btns'
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
