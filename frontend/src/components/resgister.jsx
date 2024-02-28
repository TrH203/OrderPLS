import React, { useState } from "react";
import axios from "axios";
import "./register.scss";
import { Link } from "react-router-dom";
function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFristName] = useState();
    const [lastName, setLastName] = useState();
    const [agreement, setAgreement] = useState(false);
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log({
            'username': username,
            'password': password,
            'email': email,
            'firstName': firstName,
            'lastName': lastName,
        });
        const response = await axios.post("http://localhost:6969/api/register", {
            'username': username,
            'email': email,
            'password': password,
            'firstName': firstName,
            'lastName': lastName
        })
        console.log(response);
    }
    const handleAgreement = () => {
        setAgreement(!agreement);
    }
    return (
        <div className="register-container">
            <div className="register-content">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
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
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="fistName">Frist Name</label>
                                <input type="text"
                                    id="fistName"
                                    value={firstName}
                                    onChange={(e) => setFristName(e.target.value)}
                                    required />
                            </td>
                            <td>
                                <label htmlFor="lastName">Frist Name</label>
                                <input type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required />
                            </td>
                        </tr>
                    </table>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                checked={agreement}
                                onChange={handleAgreement}
                            />
                            <span className='agree'>
                                Agree with
                            </span>
                            <Link to={'/about'} className="policy" >our policy</Link>
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Register;