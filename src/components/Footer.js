import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: '#f8f8f8', padding: '10px' }}>
            <p>&copy; {currentYear} portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
