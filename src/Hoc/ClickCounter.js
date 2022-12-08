import React, { Component } from 'react'
import EnComponent from './EnComponent'

class ClickCounter extends Component 
{
  /*constructor(props){
  super(props)
    {
        this.state={count:0}
    }
  }*/
render() 
{
    return (
        <div>
        {this.props.name}
<button onClick={this.props.increment}>click{this.props.count}</button>    
  </div>
    )
}
/*inc=()=>{this.setState({count:this.state.count+1})}*/
}
export default EnComponent(ClickCounter);