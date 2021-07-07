import React from 'react';
import './footer.css';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer1'>
                <div className='letstalk_div'>
                    <p className='letstalk_text'>
                        Let's <br/>talk
                    </p>
                    <p className='create_better_version'>TO CREATE A BETTER VERSION OF YOUR PROJECT</p>
                </div>
                <div className='footer_form'>
                    <form className='footer_form_css'>
                        <input placeholder='Your Name*' className='name_and_phone_footer'/>
                        <input placeholder='Phone*' className='name_and_phone_footer'/>
                        <textarea placeholder='Message' className='message_footer'/>
                        <button onClick='submit' className='submit_footer'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='social_links_footer'>
                <button className='buttons_footer'>LinkedIn</button>
                <button className='buttons_footer'>Instagram</button>
                <button className='buttons_footer'>facebook</button>
                <button className='buttons_footer'>Twitter</button>
            </div>
            <div className='footer_end'>
                <div className='legalterms_footer'>
                    <p className='privacy_policy_text'>Privacy Policy</p>
                    <p className='terms_of_use'>Terms Of Use</p>
                </div>
                <div className='companyname_footer_div'>
                    <p className='companyname_footer'>© 2021 KUPCAKE SOLUTIONS (OPC) PVT LTD</p>
                </div>
            </div>
        </div>
    )
}
export default Footer