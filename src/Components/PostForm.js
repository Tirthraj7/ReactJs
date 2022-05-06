import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {

    constructor(props){
        super(props);

        this.state={
            Singername:'',
            City:'',
            About:''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)

        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  render() {
        const {Singername, City, About}=this.state
    return (
        <div>   
            <form onSubmit={this.handleSubmit}>
        
            <div>
                <label>Singername</label>
                <input type='text' value={Singername} name='Singername' onChange={this.changeHandler}></input>  
            </div>

            <div>
                <label>City</label>
                <input type='text'value={City} name='City' onChange={this.changeHandler}></input>  
            </div>

            <div>
                <label>About</label>
                <input type='text'value={About} name='About' onChange={this.changeHandler}></input>  
            </div>
                <button>Submit</button>
        </form>
            </div>
    )
  }
}

export default PostForm