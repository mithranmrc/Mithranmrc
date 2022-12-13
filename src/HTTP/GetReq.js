import React, { Component} from 'react'
import axios from 'axios'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((r)=>{
         console.log(r.data) 
        this.setState({posts:r.data})
        })
    }
    render() {
        const {posts}=this.state
    return (
      <div>
      <table>
  <tr>
    <th>UserId</th>
    <th>Title</th>
    <th>Body-path</th>
  </tr>
</table>
        {posts.map((post)=>{
        return(
            <tr>
    <td>{post.userId}</td>
    <td>{post.title}</td>
    <td>{post.body}</td>
  </tr>
        )
      }
        
        )}
      
      
    </div>
    )
  }
}