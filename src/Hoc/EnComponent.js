import React, { Component } from 'react'
const EnComponent=(OrComponent)=>
{
class NewComponent extends Component
 {
  constructor(props)
  {
  super(props);
  
    this.state={count:0}
    
}
  inc=()=>{this.setState({count:this.state.count+1})}
  render() {
    return (
      <OrComponent name="suit" 
      count={this.state.count} 
      increment={this.inc} />);
    }
    
  }
  return NewComponent;
}
export default EnComponent;