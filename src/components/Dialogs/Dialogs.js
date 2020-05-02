import React from 'react';
import classes from './Dialogs.module.css';
import Avatar from "../Image/Avatar/Avatar";


const Dialogs = () => {
    return (
        <div>
            <div><h3>Dialogs</h3></div>
            <div>
                <div>
                    <h4>User 1</h4>
                </div>
                <div>
                    <h4>User 1</h4>
                </div>
                <div>
                    <h4>User 1</h4>
                </div>
                <div>
                    <h4>User 1</h4>
                </div>
                <div>
                    <h4>User 1</h4>
                </div>
                <div>
                    <h4>User 1</h4>
                </div>
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
    )
};


export default Dialogs;