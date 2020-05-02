import React from 'react';
import header_image from "../../image/logo_header.png";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header + " skyblue"}>
            <img src={header_image} className={classes.logo} alt=""/>
        </header>
    )
};

export default Header;