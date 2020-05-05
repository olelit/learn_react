import React from 'react';
import classes from './Dialogs.module.css';
import Avatar from "../Image/Avatar/Avatar";
import Title from "../Title/Title";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {
    return (
        <div>
            <Title title="Dialogs"/>
            <div className={classes.custom_d_flex}>
                <div className={classes.friend_list}>

                    <DialogItem/>
                    <DialogItem/>
                    <DialogItem/>
                    <DialogItem/>

                </div>
                <div>
                    <div>
                        <Avatar/>
                        <div><span>This is some text</span></div>
                    </div>
                    <div>
                        <Avatar/>
                        <div><span>This is some text</span></div>
                    </div>
                    <div>
                        <Avatar/>
                        <div><span>This is some text</span></div>
                    </div>
                    <div>
                        <Avatar/>
                        <div><span>This is some text</span></div>
                    </div>
                    <div>
                        <Avatar/>
                        <div><span>This is some text</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;