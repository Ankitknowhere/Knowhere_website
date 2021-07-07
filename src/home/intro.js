import React from 'react';
import './intro.css';

const Intro = () =>{
    return(
        <div className='intro'>
            <p className='home_text_beginning'>
                We create <span className='digital_products'>digital products</span><br/> that export silicon valley to the world.
            </p>
            <div className='homepage_video'>
                <img src='/downloads/HomePage_video_img.png' className='homepage_video_img'/>
            </div>
            <div className='homepage_intro'>
                <img src='/downloads/group-98.png' className='quote_img'/>
                <p className='quote_text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                </p>
                <p className='quote_owner_name'> 
                    - Bhaskar, <span className='owner_company_name'>Analytic India Magazine</span>
                </p>
            </div>
        </div>
    )
}
export default Intro;