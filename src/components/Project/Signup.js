import React,{useState}from 'react';
import './Signup.css';
import { Link, useNavigate} from 'react-router-dom';


const Signup = () => {
    const[values,setValues]=useState({
        firstname:"",
        lastname:"",
        emailid :"",
        dob:"",
        password:"",
        confirm:"",
        });
        
        const navigate=useNavigate()
        
        const handleChange=(event)=>{
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            });
        };
        const handleFormSubmit=(event)=>{
            event.preventDefault();
            navigate("/product");
       
       
    };
    
  return (
    <div className='container'>
    <div className='app-wrapper'>
    <div><h1>SIGN UP</h1></div>
    <div><h2 className='title'>Create Account</h2>
    </div>
<form className='form-wrapper'>
    <div className='name'>
        <label className='label'>FIRST NAME : </label>
        <input 
        className='input'
         type='text'
          name='firstname'
           value={values.fullname}
            onChange={handleChange}
           />
           
    </div>
    <div className='name'>
        <label className='label'>LAST NAME : </label>
        <input className='input' type='text' name='lastname' value={values.lastname} onChange={handleChange}/>
      
    </div>
    <div className='name'>
        <label className='label'>EMAIL ID : </label>
        <input className='input' type='text' name='emailid' value={values.emailid}  onChange={handleChange}/>
       
    </div>
    <div className='name'>
        <label className='label'>DATE OF BIRTH : </label>
        <input className='input' type='text' name='dob' value={values.dob}  onChange={handleChange}/>
       
    </div>
    <div className='name'>
        <label className='label'>PASSWORD: </label>
        <input className='input' type='text' name='password' value={values.password}  onChange={handleChange}/>
      
    </div>
    <div className='name'>
        <label className='label'>CONFIRM PASSWORD: </label>
        <input className='input' type='text' name='confirm' value={values.confirm}  onChange={handleChange}/>
       
    </div>
    <div>
      <Link to='/   product'><button className='submit' onClick={handleFormSubmit}>GO !</button></Link>
    </div>
</form>
    </div>
    </div>
  );
};
export default Signup;