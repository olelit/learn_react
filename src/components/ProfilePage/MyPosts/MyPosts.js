import React from 'react';
import classes from './MyPosts.module.css';
import PostItem from "./PostItem/PostItem";
import Button from "../../Button/Button";

const MyPosts = () => {
    return (
        <div>
            <div className="mt-10_custom">
                <div>
                    <h3>Посты</h3>
                </div>
                <div>
                    <form action="">
                        <div>
                            <textarea className="custom_form_control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <Button/>
                    </form>
                </div>
            </div>
            <PostItem text="djfhskajhfljashfasjhfjhafklhkafh ksahf hkjasf s fas fsa "/>
            <PostItem text="djfhskajhflj2 635  346 34ashfasjhfjhafklhkafh ksahf hkjasf s fas fsa "/>
            <PostItem text="djfhskajhfljash12123141523526fasjhfjhafklhkafh ksahf hkjasf s fas fsa "/>
            <PostItem text="djfhskajhfljasdsdsdsdshfasjhfjhafklhkafh ksahf hkjasf s fas fsa "/>
            <PostItem text="djfhs8568568 56 865 856 8 56 54 34 kajhfljas347578568658568hfasjhfjhafklhkafh ksahf hkjasf s fas fsa "/>
        </div>
    );
};

export default MyPosts;