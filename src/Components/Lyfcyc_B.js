import React, { Component } from 'react'

export class Lyfcyc_B extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'Ap Dhillon'
        }
        console.log('Lyfcyc_B : constructor')
    }
        static getDerivedStateFromProps(props,state){
            
            console.log('Lyfcyc_B : this.getDerivedStateFromProps')
            return null;
        }

        componentDidMount(){
            console.log('Lyfcyc_B : componentDidMount')
        }

  render() {
        console.log('Lyfcyc_B : render')
    return (
      <div>Lyfcyc_B</div>
    )
  }
}

export default Lyfcyc_B