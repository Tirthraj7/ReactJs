import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props);

        this.state={
            singername:'',
            city:''
        }
    }

        handleSingername=(event)=>{
            this.setState({
                singername:event.target.value
            });
    }

        handleCity=(event)=>{
            this.setState({
                city:event.target.value
            });
    }

        handleSubmit=(event)=>{
            alert(`${this.state.singername} ${this.state.city}`)
            event.preventDefault();
        }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Singername</label>
                <input type='text' value={this.state.Singername} onChange={this.handleSingername}></input>  
            </div>

            <div>
                <label>City</label>
                <textarea value={this.state.City} onChange={this.handleCity}></textarea>  
            </div>
                <button>Submit</button>
        </form>
    )
  }
}

export default Form