import React from 'react';
import './header.css';

const Header = () =>{
    return(
        <div className='header'>
            <img src ='/downloads/frame.png' className='logoheader'/>
            <img src='/downloads/group-17.png' className='menubuttonheader'/>
            <button className='buttonheader'>Talk to us</button>
        </div>
    )
}
export default Header;