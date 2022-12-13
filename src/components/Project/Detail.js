import React, { Component } from 'react'
import i from '../assests/background.jpeg';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div style={{float:"left",width:"50%"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{marginLeft:"300px",marginTop:"50px"}}>
        <h2>-Contact Us-</h2>
        <h2>Website</h2>
        <p>www.thecureall.com</p>
        <h2>Email Address</h2>
        <p>thecureall.com</p>
        <h2>Phone Number</h2>
        <p>FOR ANY HELP, YOU MAY CALL US AT<br></br>1800-4546-8749</p>
    </div>
    </div>
    <div style={{float:"right",width:"50%"}}>
    <img src="background." width="400px" height="550px"/>
    </div>
    </>
        );
    }
}
export default Contact;