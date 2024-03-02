// Login.js
import React, { useState } from 'react';
import './Login.scss'; // Import SCSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import { useSignIn } from "react-auth-kit";
import * as actions from "../store/action/action";
const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const nav = useNavigate();
    const signIn = useSignIn();
    const handleLogin = async (e) => {
        e.preventDefault();
        // Add your login logic here, e.g., calling an API to authenticate the user
        const response = await axios.post("http://localhost:6969/api/login", {
            username: username,
            password: password,
        })
        if (response.data.errCode === 200 && response.data.message === 'find one') {
            setIsWrong(false);
            props.changeLoginState();
            nav('/workspace');
            // console.log("Login state when login:", props.isLogin);
            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { username: username }
            });
            console.log('SignIn successful');
        }
        else {
            console.log('the respone is not ok');
            setIsWrong(true);
        }
    };

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleGoogleLogin = () => {

    }
    const handleFacebookLogin = () => {

    }
    return (
        <div className='login-container'>
            <div className="login-content">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMe}
                            />
                            <span className='remember-password'>Remember Password</span>
                        </label>
                        {isWrong ? <div className='login-err-noti'>Wrong username or password</div> : null}
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <hr />
                <div className="register-link">
                    <p>Don't have an account?
                        <Link to='/register'>Register</Link>
                    </p>
                </div>
                <div className="social-login">
                    <div className='social-login-item' onClick={handleGoogleLogin}>
                        <i class="fa-brands fa-google"></i>
                        Login with Google
                    </div>
                    <div className='social-login-item' onClick={handleFacebookLogin}>
                        <i class="fa-brands fa-facebook"></i>
                        Login with Facebook
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        isLogin: state.isLogin,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeLoginState: async () => dispatch(actions.processLogin()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
