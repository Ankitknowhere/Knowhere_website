import React,{useState} from 'react';
import './layout.css'
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = (props) =>{
    const [showmenu, setShowmenu] = useState(false)
    return(
        <div>
            {
                showmenu === false ? 
                <div>
                    <div className='header'>
                        <img src ='/downloads/frame.png' className='logoheader'/>
                        <img src='/downloads/group-17.png' className='menubuttonheader' onClick={()=>setShowmenu(true)}/>
                        <button className='buttonheader'>Talk to us</button>
                    </div>
                    {props.children}
                    <Footer/>
                </div>
                : 
                <div className='menuitems'>
                    <div className='header'>
                        <img src ='/downloads/frame.png' className='logoheader'/>
                        <img src='/downloads/group-17.png' className='menubuttonheader' onClick={()=>setShowmenu(false)}/>
                        <button className='buttonheader crossbuttonheader' onClick={()=>setShowmenu(false)}>X</button>
                    </div>
                    <div className='menu_allbuttons'>
                        <button className='menu_lists'>Home</button>
                        <button className='menu_lists'>Our Works</button>
                        <button className='menu_lists'>About</button>
                        <button className='menu_lists'>Career</button>
                    </div>
                </div>
            }
        </div>
    )
}


export default Layout;