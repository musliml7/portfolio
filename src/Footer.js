import React from 'react';
import Content from './Content';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <p>Email: example@example.com</p>
            <p>Telefon: +998 90 123 45 67</p>
            <p>© 2021-{currentYear} Barcha huquqlar himoyalangan.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#5d50db',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
};

export default Footer;
