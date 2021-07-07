import React from 'react';
import './home_projects.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home_projects = () =>{
    return(
        <div className='homepage_projects'>  
            <p className='we_worked_on'>We worked on</p>
            <Carousel className='carousel' centerMode={true} centerSlidePercentage={36} interval={2000} infiniteLoop={true} thumb={false} autoPlay={true} showStatus={false} showArrows={true} >
                <div className='carouseldiv'>
                    <p className='carousel_heading'>Analytic India Magazine</p>
                    <div className='carousel_img'>
                        <img src='/downloads/projects_img/mask-group.png' className='carousel_img_format'/>
                    </div>
                    <p className='carousel_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='caousel_button'>View Projects</button>
                </div>   
                <div className='carouseldiv'>
                    <p className='carousel_heading'>Loan Unbox</p>   
                    <div className='carousel_img'>
                        <img src='/downloads/projects_img/mask-group-3.png' className='carousel_img_format'/>
                    </div>
                    <p className='carousel_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='caousel_button'>View Projects</button>
                </div>
                <div className='carouseldiv'>
                    <p className='carousel_heading'>Fountain Prephead</p>
                    <div className='carousel_img'>
                        <img src='/downloads/projects_img/brooke-lark-w-1-b-2-lp-qo-bx-a-unsplash-1-1.png' className='carousel_img_format'/>
                    </div>
                    <p className='carousel_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='caousel_button'>View Projects </button>
                </div> 
            </Carousel>     

        </div>
    )
}
export default Home_projects;