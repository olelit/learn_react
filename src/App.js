import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from "./components/SideBar/Sidebar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dialogs from "./components/Dialogs/Dialogs";
import classes from "./components/ProfilePage/ProfilePage.module.css";

const App = () => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Sidebar/>
            <main className="content">
                {/*<ProfilePage/>*/}
                <Dialogs/>
            </main>

            <footer></footer>
        </div>
    )
};

export default App;
