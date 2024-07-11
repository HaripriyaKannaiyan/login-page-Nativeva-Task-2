import React from 'react';
import heroImage from './louis-hansel-UtcOhVC-3VU-unsplash.jpg'; // Replace with your actual hero image path

const Hero = () => {
    return (
        <div>
            <div className="hero-container" style={heroContainerStyle}>
                <img src={heroImage} alt="Hero" className="hero-image" style={heroImageStyle} />
                <div className="hero-overlay" style={heroOverlayStyle}>
                    <h1 className="hero-title" style={{ ...heroTitleStyle, animation: `${slideInAnimation} 3s ease-in-out infinite alternate` }}>
                        Welcome to Ladarna
                    </h1>
                    <p className="hero-subtitle" style={heroSubtitleStyle}>Discover a Taste of Paris Since 1950</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

// Inline styles for the Hero component
const heroContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px', // Adjust height as needed
    overflow: 'hidden',
};

const heroImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const heroOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
};

const heroTitleStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
};

const heroSubtitleStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
};

// CSS animation keyframes
const slideInAnimation = `
    @keyframes slideIn {
        0% { transform: translateY(-50px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(0); }
    }
`;
