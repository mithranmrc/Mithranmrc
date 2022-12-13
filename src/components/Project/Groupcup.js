import React, { Component } from 'react'
import Nav from './Nav';
import Cup from './Cup';
import SimpleBottomNavigation from './MainContainer';
import i1 from '../assests/1.jpeg';
import i2 from '../assests/2.jpeg';
import i3 from '../assests/3.jpeg';
import i4 from '../assests/4.jpeg';
import i5 from '../assests/5.jpeg';
import i6 from '../assests/6.jpeg';
import i7 from '../assests/7.jpeg';
import i8 from '../assests/8.jpeg';
import i9 from '../assests/9.jpeg';
import i10 from '../assests/10.jpeg';
class Groupcup extends Component {
    state = { cup:[
        {id:1,name:"HAIR OIL",cost:"Rs.300",img:i6,rat:4.5},
        {id:2,name:"PARACETOMOL",cost:"Rs.50",img:i7,rat:4},
        {id:3,name:"VOLINI SPRAY",cost:"Rs.80",img:i8,rat:3.5},
        {id:4,name:"BAND-AID",cost:"Rs.40",img:i9,rat:5},
        {id:5,name:"SANITARY PAD",cost:"Rs.150",img:i10,rat:4.5},
        {id:6,name:"SHAMPOO",cost:"Rs.250",img:i1,rat:3.5},
        {id:7,name:"THERMOMETER",cost:"Rs.400",img:i2,rat:4},
        {id:8,name:"PAMPERS",cost:"Rs.70",img:i3,rat:4},
        {id:9,name:"HORLICKS",cost:"Rs.150",img:i4,rat:4.5},
        {id:10,name:"FACEWASH",cost:"Rs.60",img:i5,rat:3}
    ] } 
    render() { 
        return (
            <>
            <Nav/>
            {this.state.cup.map(mp=><Cup key={mp.id} name={mp.name} cost={mp.cost} img={mp.img} rat={mp.rat}/>)}
            <SimpleBottomNavigation/>
            </>
        );
    }
}
 
export default Groupcup;