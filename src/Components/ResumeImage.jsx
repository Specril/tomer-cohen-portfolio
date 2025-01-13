import React from 'react';

const ResumeImage = () => {
    const imagePath = '/tomer-cohen-portfolio/Resume.png'; // Path relative to the public folder

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img 
                src={imagePath} 
                alt="Resume" 
                style={{ maxWidth: '60%', height: 'auto' }}
            />
        </div>
    );
};

export default ResumeImage;
