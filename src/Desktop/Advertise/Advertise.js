import React from 'react';
import "../Advertise/Advertise.css";


const Advertise = () => {
  return (
    <>
    <div className='conatiners'>
        <h1 id='heading'>Advertise on Shivila.com®</h1>
        <p id='para'>With direct connections to over 800 MLSs and property updates every 15 minutes, Realtor.com® draws in millions of unique visitors every month, making it the perfect place to deliver your message and promote your business.</p>
    </div>
    <div className='midConatiner'>
        <h1 id='subHeading'>Reach a serious and engaged audience</h1>
        <a href='#' className='btnAds'>For Agent</a>
        <a href='#' className='btnAds'>For Brokers</a>
        <a href='#' className='btnAds'>For Lenders</a>
        <a href='#' className='btnAds'>For Builders</a>
        <a href='#' className='btnAds'>For Brand Advertises</a>
        
    </div>
    
    </>
  )
}

export default Advertise