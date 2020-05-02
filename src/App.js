import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from "./components/SideBar/Sidebar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Sidebar/>
            {/*<ProfilePage/>*/}
            <Dialogs/>
            <footer></footer>
        </div>
    )
};

export default App;
