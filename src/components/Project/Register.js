import React,{useState} from "react";

export  const Register = () => {
  const[add,setAdd]=useState('');
  const[house,setHouse]=useState('');
  const[road,setRoad]=useState('');
  const[name,setName]=useState('');
  const[number,setNumber]=useState('');
  const[email,setEmail]=useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <>
    <div className="auth-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="address">address</label>
        <input value={add} onChange={(e) => setAdd(e.target.value)} type="text" placeholder="Fill your address" id="address" name="address"/> <br/><br/>
        <label htmlFor="house">House</label>
        <input value={house} onChange={(e)=>setHouse(e.target.value)} type="text" placeholder="House/Flat/Office No" id="house" name="house"/> <br/><br/>
        <label htmlFor="road">Road</label>
        <input value={road} onChange={(e)=>setRoad(e.target.value)} type="text" placeholder="RoadName/Area/Colony" id="road" name="road"/> <br/><br/>
       
       
        <label htmlFor= "name">Name </label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" id="name" name="name"/> <br/><br/>
        <label htmlFor="number">Number</label>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placehoder="Contact Number" id="number" name="number"/><br/><br/>
        <label htmlFor="email">Email ID</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email ID(option)" id="email" name="email"/><br/><br/>
        <button type="submit">Ship to this address</button>
    </form>
    </div>
    </>
  )
}
