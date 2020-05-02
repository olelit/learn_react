import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={classes.sidebar + " skyblue"}>
            <ul>
                <li><a className={classes.sidebar__a} href="/">Profile</a></li>
                <li><a className={classes.sidebar__a} href="/">News</a></li>
                <li><a className={classes.sidebar__a} href="/">User</a></li>
                <li><a className={classes.sidebar__a} href="/">Settings</a></li>
            </ul>
        </nav>
    )
};

export default Sidebar;