import React from 'react';
import classes from './Button.module.css';

const Button = () => {
    return (
        <div>
            <button className={`${classes.button_custom} ${classes.button_green}`}>Отправить</button>
        </div>
    );
}

export default Button;