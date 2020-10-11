import React from "react";
import Navbar from 'react-bootstrap/Navbar'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><span className='first-symbol'>I</span>nstagram</Navbar.Brand>
        </Navbar>
    );
};

export default Header;
