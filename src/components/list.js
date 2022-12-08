import React,{componenet} from 'react'

export default class ListEx extends component {
    render(){
    const cars= 
    [
    {model:"namo",id:1},
    {model:"skoda",id:2},
    {model:"audi",id:3},
    {model:"breeza",id:4}
];
  return (
    <>
    <h1>{cars.map((val)=><li> (val) </li>)}</h1>
    <h2>abc</h2>
    </>
  )
}
}