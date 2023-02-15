import React from "react"; 
import logo  from '../../images/logo.jpeg'; 
import './nav.css'; 
class Navbar extends React.Component{ 
    render(){ 
        return( 
       <>
       
       <nav className="navbar"> 
        <div className="nav-img"><img src={logo}/></div> 
        <div className="nav-1"> 
        <button className="nav-btn">Buy</button> 
        <button className="nav-btn">Sell</button> 
        <button className="nav-btn" >Rent</button> 
        <button className="nav-btn">Mortgage</button> 
        <button className="nav-btn">Agent Finder</button> 
        <button className="nav-btn">My Homes</button>
        <button className="nav-btn">Advertise</button>
        <button className="nav-btn">Log In</button>
  
   <button className="nav-btn1">Sign up</button> 
   </div>
    </nav>      
     </>
     )}
     } 
     export default Navbar;
