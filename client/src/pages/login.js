import React, { useState } from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'your_username' && password === 'your_password') {
            console.log('Login successful');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div>
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <p>under construction</p>
                                <h1>Account</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            <a href="index.html">: go to index.html</a>

            <div class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="footer-box about-widget">
                                <h2 class="widget-title">About Us</h2>
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="footer-box get-in-touch">
                                <h2 class="widget-title">Get In Touch</h2>
                                <ul>
                                    <li>1 UTSA Circle, San Antonio, TX 78249</li>
                                    <li>support@statsphere.com</li>
                                    <li>(210) 458-4011</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
