import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Contact Us</h3>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Ladarna Restaurant</p>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>123 Paris Street, Paris, France</p>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Phone: +33 123 456 789</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Opening Hours</h3>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Monday - Friday: 11am - 10pm</p>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Saturday - Sunday: 10am - 11pm</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Follow Us</h3>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Facebook</p>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Instagram</p>
                    <p style={{ margin: '0', fontSize: '0.9rem' }}>Twitter</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
