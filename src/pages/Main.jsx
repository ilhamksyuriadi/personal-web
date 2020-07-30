import React from 'react';
import "./Main.scss";
import Profile from '../sections/Profile';
import Portfolio from '../sections/Portfolio';

const Main = () => {
    return (
        <div className="layout">
            <Profile />
            <Portfolio />
        </div>
    )
}

export default Main