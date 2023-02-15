import React from 'react'
import '../../Desktop/AgentFinder/AgentFinder.css';
import agent from "../../images/agent.jpg";
import {FaSearch} from 'react-icons/fa';

const AgentFinder = () => {
  return (
   <>
   
       <div className='mininavbar'>
        <a href='#'className='miniNavbarItems'>Agent</a>
        <a href='#'className='miniNavbarItems'>Home Improvement</a>
        <a href='#'className='miniNavbarItems'>Property Managers</a>
        <a href='#'className='miniNavbarItems'>Builders</a>
        <a href='#'className='miniNavbarItems'>Inspectors</a>
        <a href='#'className='miniNavbarItems'>Photographers</a>
        <a href='#'className='miniNavbarItems'>Other</a>
       </div>
       <h1>Find an Agent</h1>
       <div className='findNav'>
           <div className='inputFeild'>
               <span>LOCATION</span><br/><input type='text' placeholder="Neighborhood/City/Zip" />
               <button><FaSearch/></button>
           </div>
           <div className='inputFeild'>
               <span>NAME</span><br/><input type='text' placeholder="Agent Name"/><button><FaSearch/></button>
           </div >
           <div >
               <p>SPECIALTIES</p><br/>
               <select>
                    <option>Any</option>
                    <option>Buyer's Agent</option>
                    <option>Lisiting Agent</option>
                    <option>Relocation</option>
                    <option>Foreclosure</option>
                    <option>Short Sale</option>
                    <option>Consulting</option>
                    <option>others</option>

               </select>
           </div>
           
           <div >
               <p id='xyz'>LANGUAGES</p><br/>
               <select>
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Hindi</option>
                    <option>Bangla</option>
                    <option>Greek</option>
               </select>
           </div>
       </div>

       <div className='findAgent'>
           <img src={agent}/>
           <p><h3>Find agents in your area.</h3>
           To get started, enter your location or search for a specific agent by name.
           </p>
       </div>
       <div>
           <p id='small'>Whether you are looking to rent, buy or sell your home, Zillow's directory of local real estate agents and brokers connects you with professionals who can help meet your needs. Because the real estate market is unique, it's important to choose a real estate agent or broker with local expertise to guide you through the process of renting, buying or selling your next home. Our directory helps you find real estate professionals who specialize in buying, selling, foreclosures, or relocation - among many other options. Alternatively, you could work with a local agent or real estate broker who provides an entire suite of buying and selling services.

</p>
       </div>
     
   </>
  )
}

export default AgentFinder