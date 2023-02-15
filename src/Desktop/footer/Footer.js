import React from 'react'
import '../footer/footer.css';
import { FaFacebook, FaInstagram ,FaYoutube,FaLinkedin, FaTwitter} from 'react-icons/fa';
import playstore from '../../images/playstore.png';
import apple from '../../images/apple.png';
import banner4 from '../../images/banner4.jpg';
import logo from '../../images/logo.jpeg';


const Footer = () => {
  return (
    <>
    <div>
        <p id='smalltext'>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
    </div>

    <div id='appStore' >
        <img src={playstore}className='storeImage'/>
        <img src={apple}className='storeImage'/>

    </div>
    <div className='allIcons'><h2>Follow Us On</h2>
        <FaYoutube className='media-icons'/>
        <FaInstagram className='media-icons'/>
        <FaFacebook className='media-icons'/>
        <FaLinkedin className='media-icons'/>
        <FaTwitter className='media-icons'/>
    </div>
    <img src={banner4} id='lowerImg'/><br/>
    <div id='atlast'>
        <p>&#169; 2023 Shivlia</p>
    </div>
    
    </>


    )
}

export default Footer