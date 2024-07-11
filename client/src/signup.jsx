import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import videoFile from './Colorful Food Image With White Text Minimal Instagram Post.mp4'; // Adjust this path to your actual video file path
import videobg from './Cyan Purple Pink Gradient Color and Style Video Background.mp4'; 

export default function Signup() {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: 'white',  // Slightly transparent to see the video background
        borderRadius: '8px',
        width: '1100px',
        height: '550px',
        margin: 'auto',
        overflow: 'hidden',
        marginTop: '30px',
        position: 'relative',  // Added for positioning
        zIndex: 2,  // Ensure the form is above the video
    };

    const formContainerStyle = {
        padding: '20px',
    };

    const videoContainerStyle = {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px', // Adjust border radius to match the parent container
        overflow: 'hidden', // Ensure video does not overflow
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
       
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001', { name, email, password });
            console.log('User registered:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', zIndex: 1 }}>
                <source src={videobg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <h1 style={{ fontSize: '42px', color: 'white', textAlign: 'center', fontFamily: 'Consolas', marginTop: '20px', zIndex: 3, position: 'relative' }}>Welcome to Ladarna Restaurant</h1>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', position: 'relative', zIndex: 2 }}>
                <div style={containerStyle}>
                    <div style={formContainerStyle}>
                        <h2 style={{ marginBottom: '30px', fontSize: '30px', color: 'purple', textAlign: 'center', fontFamily: 'Calisto MT', marginTop: '20px' }}>SIGNUP</h2>
                        <form style={formStyle} onSubmit={handleSubmit}>
                            <label htmlFor="name" style={labelStyle}>Name</label>
                            <input type="text" id="name" name="name" required style={inputStyle} onChange={(e) => setName(e.target.value)}></input>

                            <label htmlFor="email" style={labelStyle}>Email</label>
                            <input type="email" id="email" name="email" required style={inputStyle} onChange={(e) => setEmail(e.target.value)}></input>

                            <label htmlFor="password" style={labelStyle}>Password</label>
                            <input type="password" id="password" name="password" required style={inputStyle} onChange={(e) => setPassword(e.target.value)}></input>

                            <button type="submit" style={buttonStyle}>Signup</button>
                        </form>
                        <a href="#" style={loginLinkStyle}>Already have an account?</a>
                        <Link to="/login">
                            <button type="button" style={buttonLogin}>Login</button>
                        </Link>
                    </div>
                    <div style={videoContainerStyle}>
                        <video width="90%" height="100%" autoPlay loop muted>
                            <source src={videoFile} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}
