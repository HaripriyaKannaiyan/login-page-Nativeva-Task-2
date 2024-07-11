import React from 'react';
import aboutImage from './srijal-maharjan-JnIZnUctmWI-unsplash.jpg'; // Adjust this path to your actual image path

const AboutUs = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    margin: '50px auto',
    maxWidth: '1000px',
 
        padding: '0 20px',

  };

  const imageContainerStyle = {
    gridColumn: '1 / 2',
  };

  const textContainerStyle = {
    gridColumn: '2 / 3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const textStyle = {
    color: '#333',
    fontSize: '20px',
    lineHeight: '1.6',
    marginTop:'40px',
    textAlign:'justify',
    marginLeft:'20px'
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={aboutImage} alt="About Us" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h2 style={{textAlign:'center',fontFamily:'Broadway',fontSize:'30px'}}>About Our Restaurant</h2>
        <p style={textStyle}>
        Established in 1950, Ladarna is a cherished culinary landmark nestled in the heart of Paris. With a rich heritage spanning over seven decades, we pride ourselves on delivering a delightful fusion of traditional and contemporary French cuisine. Our passion for quality ingredients and impeccable service ensures every visit is a memorable gastronomic journey. Whether savoring our signature dishes or enjoying a cozy ambiance, Ladarna promises an authentic taste of Parisian hospitality that captivates locals and visitors alike.
 </p>
      </div>
    </div>
  );
};

export default AboutUs;
