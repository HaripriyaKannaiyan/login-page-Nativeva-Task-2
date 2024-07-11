import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import foodimg from "./saurav-thapa-shrestha-UVmMfLDEajI-unsplash.jpg";
import videoFile from './Cyan Purple Pink Gradient Color and Style Video Background.mp4'; // Make sure to adjust this path to your actual video file path

export default function Login() {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',  // Two equal columns
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Slightly transparent background to see the video
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '1200px',
        height: '550px',
        margin: 'auto',
        overflow: 'hidden',
        marginTop: '130px',
        position: 'relative',  // Added for positioning
        zIndex: 2,  // Ensure the form is above the video
    };

    const formContainerStyle = {
        padding: '20px',
        marginTop: '40px',
    };

    const imageContainerStyle = {
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridRow: '1',  // Placing in the first row
        gridColumn: '2',  // Placing in the second column
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom:'20px',
    };

    const labelStyle = {
        marginBottom: '8px',
        color: '#555',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'purple',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const buttonLogin = {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '1px 1px 1px 1px gray',
        marginTop: '5px',
    };

    const loginLinkStyle = {
        display: 'block',
        marginTop: '20px',
        textAlign: 'center',
        color: 'purple',
        textDecoration: 'none',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log('User logged in:', response.data);
            if (response.data === "success") {
                navigate('/home');
            } else {
                console.log('Login failed:', response.data);
            }
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', zIndex: 1 }}>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', position: 'relative', zIndex: 2 }}>
                <div style={containerStyle}>
                    <div style={{ backgroundColor: 'white' }} >
                        <h2 style={{ marginBottom: '30px', fontSize: '30px', color: 'purple', textAlign: 'center', fontFamily: 'Calisto MT', marginTop: '40px' }}>LOGIN</h2>
                        <div style={formContainerStyle}>
                            <form style={formStyle} onSubmit={handleSubmit}>
                                <label htmlFor="email" style={labelStyle}>Email</label>
                                <input type="email" id="email" name="email" required style={inputStyle} onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor="password" style={labelStyle}>Password</label>
                                <input type="password" id="password" name="password" required style={inputStyle} onChange={(e) => setPassword(e.target.value)} />

                                <button type="submit" style={buttonStyle}>Login</button>
                            </form>
                            <a href="#" style={loginLinkStyle}>Don't have an account? Signup</a>
                            <Link to="/"><button style={buttonLogin}>Signup</button></Link>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        <img src={foodimg} alt="Restaurant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
