import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom';
 const Navbar = () => {
  return (
    <div>
    <div className="app">
        <div className='row'>
            <div className='col-11'>
                <div className='home'>
                    <div className='home-text'>
                        <h1>CURE ALL</h1>
                        <h2>!!! WORKING TOGETHER FOR A HEALTHIER WORLD !!!</h2>
                        <br/><h1 className='home-text-2'> Comitted To Care</h1>
                    </div>
                    <div className='home-btn'>
                        <Link to="Login"><button>LOGIN</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}
export default Navbar;