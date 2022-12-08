import React, { Component } from 'react'
import EnComponent from './EnComponent'

class HoverCounter extends Component {
    /*constructor(props){
    super(props)
    {
        this.state={count:0}
    }
}*/
  render() {
    return (
      <div>
      {this.props.name}
    <h1 onMouseMove={this.props.increment}>mithran{this.props.count}</h1>
      </div>
    )
  }
 /* inc=()=>{this.setState({count:this.state.count+1})}*/
}
export default EnComponent(HoverCounter);
