import React,{useState}from 'react';
import './Address.css';


 const Address = () => {
    const[values,setValues]=useState({
        Name:"",
        Address:"",
        Pincode :"",
        Payment :"",
        ContactNumber:"",
        
        });
        
        
        const handleChange=(event)=>{
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            });
        };
    const handleFormSubmit=(event)=>{
        event.preventDefault();
       
       
    };
    
  return (
    <div className='container'>
    <div className='app-wrapper'>
    
    <div><h1 className='title'>Order Details</h1>
    </div>
<form className='form-wrapper'>
    <div className='name'>
        <label className='label'>Name: </label>
        <input 
        className='input'
         type='text'
          name='Name'
           value={values.fullname}
            onChange={handleChange}
           />
           
    </div>
    <div className='name'>
        <label className='label'>Address: </label>
        <input className='input' type='text' name='Address' value={values.lastname} onChange={handleChange}/>
      
    </div>
    <div className='name'>
        <label className='label'>Pin code : </label>
        <input className='input' type='text' name='Pin code' value={values.emailid}  onChange={handleChange}/>
       
    </div>
    <div className='name'>
        <label className='label'>Contact number : </label>
        <input className='input' type='text' name='Contact Number' value={values.emailid}  onChange={handleChange}/>
       
    </div>
   <div><h2> ONLY CASH ON DELIVERY IS AVAILABLE !</h2></div>
    
    
    <div>
        <button className='submit' onClick={handleFormSubmit}>Conform Order</button>
    </div>
</form>
    </div>
    </div>
  );
};
export default Address;