import { Link } from "react-router-dom";
import React,{useState}from "react";
import './Main.css';

const Main=()=>{
    const [popupStyle, showPopup]= useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        
        <div className="cover">
        <h1>LOGIN</h1>
            <input type="text" placeholder="USERNAME"/>
            <input type="password" placeholder="PASSWORD"/>
            <div className="login-btn" onClick={popup}><Link to='product'>LOGIN</Link></div>
            <p className="text">Or  </p>
            <div className="alt-login">
            <Link to='signup'>
                <div className="signup">
                    <img src="th.jpeg" height={"50px"} width={"200px"}></img>
                </div></Link>
            </div>
           
        </div>
        
            
    
    )
}
export default Main