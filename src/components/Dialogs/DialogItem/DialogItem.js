import React from 'react';
import classes from "./DialogItem.module.css";

const DialogItem = () => {

    const setActive = () => {
      console.log('QQQQ');
    };

    let item = `${classes.friend_item} $`;

    return (
        <div onClick={setActive} className={classes.friend_item}>
            <h4>User 1</h4>
        </div>
    );
};

export default DialogItem;