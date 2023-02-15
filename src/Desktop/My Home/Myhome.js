import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../My Home/myhome.css';
import build from '../../images/build.png';
import build2 from '../../images/build2.png';
import chilling from '../../images/chilling.png';
import House from '../../images/House.png';
import Moment from '../../images/Moment.png';
import trues from '../../images/trues.png';





const Myhome = () => {
  return (
        <>
        <div className='textContainer'>
            <h1>Estimate your home's value</h1>
            <h3>Find out how much your house is worth with multiple valuation estimates and track your equity against market trends</h3>
        </div>

        <div className='mainContainer'>
            <h2 id='myhome'>My Home</h2>
            <div id='mainContainerText'>
                <img src={build} id="pic1"/>
                <h4>Claim your home for an up-to-date home value estimate.</h4>
                <input type='text' placeholder='Enter Your Home Address'className='inputfeild' />
                    <button className='myBtn'><FaSearch/></button>
            </div>
            <div className='cards'>
            <img src={build2}className="cardImg"/>
                    <h3>Real-time home value reports</h3>
                    <p>Stay on top of your home value and the latest real estate trends with our
                    data. Access this info 24/7 in the My Home dashboard. We'll also send you a monthly home value report.</p>
            </div>



            <div className='cards'>
            <img src={chilling}className="cardImg"/>
                    <h3>Keep your property details up-to-date</h3>
                    <p>Make sure any renovations done to your home are accurate and up-to-date on . Update your home's details and remove photos in My Home.</p>
            </div>


            <div className='cards'>
            <img src={Moment}className="cardImg"/>   
                    <h3>Compare your homes to others in the area</h3>
                    <p>Find out how your home measures up with homes that are for sale or recently sold. Compare market value, listing price, features and size in My Home.</p>
            </div>


            <div className='cards'>
            <img src={trues}className="cardImg"/>
                    <h3>Explore ways to sell</h3>
                    <p>Determine the cost of selling your home with our Net Proceeds calculator. Looking for a local real estate agent or thinking about selling your home for cash? Our partners on  can help.</p>
            </div>


        </div>
        <div className='lastContant'>
            <img src={House} id="houseImg"/>
            <h3>Claim your home for an up-to-date home value estimate.</h3>
            <input type='text' placeholder='Enter Your Home Address' className='inputfeild'/>
                    <button className='myBtn'><FaSearch/></button>
        </div>

        
        
        </>
    )
}

export default Myhome