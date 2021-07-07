import React from 'react';
import Homepage_ui_ux from './homepage_ui_ux';
import Home_projects from './home_projects';

import Intro from './intro';

const Home = () =>{
    return(
        <div>
            <Intro/>
            <Home_projects/>
            <Homepage_ui_ux/>
        </div>
    )
}
export default Home;