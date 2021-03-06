import React, { Component } from 'react'

export class Clscounter1 extends Component {

    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    componentDidMount(){
      console.log('Checking')
        document.title=`clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
      console.log(prevState.count)
      console.log(this.state.count)

      if(prevState.count !== this.state.count){
        console.log('Testing')
        document.title=`clicked ${this.state.count} times`
    }
}

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}></input>
          <button onClick={()=>{this.setState({count:this.state.count + 1})}}>click{this.state.count}</button>
      </div>
    )
  }
}

export default Clscounter1