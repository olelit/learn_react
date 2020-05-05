import React from 'react';
import avatar from "../../image/default_avatar.png";
import classes from './ProfilePage.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Title from "../Title/Title";

const ProfilePage = () => {
    return (

        <div>
            <Title title="My profile"/>
            <div className={classes.main_info + " mt-10_custom"}>
                <div className="css_mr_10">
                    <img className="avatar rounded" src={avatar} alt=""/>
                </div>
                <div>
                    <h4>Test name</h4>
                    <div>
                        <div><span>Дата рождения: </span></div>
                        <div><span>Город: </span></div>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
};

export default ProfilePage;