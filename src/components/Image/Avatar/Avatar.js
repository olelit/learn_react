import avatar from '../../../image/default_avatar.png';
import classes from './Avatar.module.css';
import React from "react";


const Avatar = (props) => {

    return (
        <div className="css_mr_10">
            <img className={classes.avatar_post_image+" rounded"} src={avatar} alt=""/>
        </div>
    )

};

export default Avatar;