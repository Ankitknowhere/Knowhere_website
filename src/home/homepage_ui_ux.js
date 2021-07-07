import React,{useState} from 'react';
import './homepage_ui_ux.css';
const Homepage_ui_ux = () =>{
    const [uiux, setUiux] = useState(true)
    const [mobileapps, setMobileapps] = useState(false)
    const [websites, setWebsites] = useState(false)
    const [digitalbranding, setDigitalbranding] = useState(false)
    return(
        <div className='homepage_ui_ux'>
            <div className='ui_ux'>
                <div className='ui_ux_texts'>
                    <p onClick={()=>[setUiux(true), setMobileapps(false), setWebsites(false),setDigitalbranding(false)]}>UI/UX</p>
                    <p onClick={()=>[setUiux(false), setMobileapps(true), setWebsites(false),setDigitalbranding(false)]}>Mobile Apps</p>
                    <p onClick={()=>[setUiux(false), setMobileapps(false), setWebsites(true),setDigitalbranding(false)]}>Websites</p>
                    <p onClick={()=>[setUiux(false), setMobileapps(false), setWebsites(false),setDigitalbranding(true)]}>Digital Branding</p>
                </div>
                { uiux === true ? 
                <div className='ui_ux_img' >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <img src='/downloads/uiux_img.png' className='ui_ux_img_format'/>
                </div>
                :''}
                {mobileapps === true ? <div className='ui_ux_img' >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <img src='/downloads/mobileapps_img.png' className='ui_ux_img_format'/>
                </div>:''}
                {websites === true ? <div className='ui_ux_img' >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <img src='/downloads/websites.png' className='ui_ux_img_format'/>
                </div> : ''}
                {digitalbranding === true ? <div className='ui_ux_img' >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <img src='/downloads/digitalmarketing.png' className='ui_ux_img_format'/>
                </div>:''}
            </div>
            <div>
                <p className='ui_ux_dummy_bold'>Lorem Ipsum is simply dummy text</p>
                <p className='ui_ux_dummy_light'>Lorem Ipsum is simply dummy text</p>
                <button className='contact_us_button'>Contact Us </button>
            </div>
        </div>
    )
}
export default Homepage_ui_ux;