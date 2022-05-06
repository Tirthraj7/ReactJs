import React, { Component } from 'react'
import Lyfcyc_B from './Lyfcyc_B'

export class Lyfcyc_A extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'Ap Dhillon'
        }
        console.log('Lyfcyc_A : constructor')
    }
        static getDerivedStateFromProps(props,state){
            
            console.log('Lyfcyc_A : this.getDerivedStateFromProps')
            return null;
        }

        componentDidMount(){
            console.log('Lyfcyc_A : componentDidMount')
        }

  render() {
        console.log('Lyfcyc_A : render')
    return (
      <div>
          Lyfcyc_A
            <Lyfcyc_B></Lyfcyc_B>
      </div>
    )
  }
}

export default Lyfcyc_A