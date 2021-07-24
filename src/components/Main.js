import React from 'react';
import "../App.css";
import Advertisements from './Advertisements';
import Subcontents from './Subcontents';


const Main = () =>
    <div className="main">
        <div className="subs">
            <Subcontents />
            <Subcontents />
            <Subcontents />
        </div>
        <Advertisements />
    </div>

export default Main;