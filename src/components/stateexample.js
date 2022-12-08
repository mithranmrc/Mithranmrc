import React, { Component } from 'react'

export default class Stateexample extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       name:"mithran"
    }
  }
  inc=()=>{
this.setState({count:this.state.count+1})
  }
  
  render() {
    console.log(this.state.count)
    return (
      <div>
      <button onClick={this.inc}><h1>clickme{this.state.count}</h1></button><br></br>

      {this.state.name}</div>
    )
  }
}
