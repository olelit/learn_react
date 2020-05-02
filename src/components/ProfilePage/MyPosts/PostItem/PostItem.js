import React from 'react';
import classes from './PostItem.module.css';
import Avatar from "../../../Image/Avatar/Avatar";


const PostItem = (props) => {
    return (
        <div className={classes.post_item + " mt-10_custom"}>
            <Avatar/>
            <div className={classes.post}>
                <span>{props.text}</span>
            </div>
            <div>
                <span>like</span>
                <span>dislike</span>
            </div>
        </div>
    );
};

export default PostItem;