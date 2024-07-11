import React from 'react';

const Menu = () => {
    // Sample menu items data
    const menuItems = [
        { id: 1, name: 'Dish 1', image: 'src/components/dish1.jpg' },
        { id: 2, name: 'Dish 2', image: 'src/components/dish2.jpg' },
        { id: 3, name: 'Dish 3', image: 'src/components/dish3.jpg' },
        { id: 4, name: 'Dish 4', image: 'src/components/dish4.jpg' },
        { id: 5, name: 'Dish 5', image: 'src/components/dish5.jpg' },
        { id: 6, name: 'Dish 6', image: 'src/components/dish6.jpg' },
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '30px' }}>Our Menu</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {menuItems.map(item => (
                    <div key={item.id} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', textAlign: 'center', padding: '10px', transition: 'opacity 0.3s ease', opacity: 0 }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>{item.name}</h3>
                        </div>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', textAlign: 'center' }}>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
