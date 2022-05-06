import React, { Component } from 'react'
import B from './B'
import C from './C';

import { Provider } from './Context';
export class A extends Component {

    state={
        name:'Gur Sidhu',
        prof:'Lyricist',
        fees:100000
    }

    feesIncremented=()=>{
        this.setState({
            fees:this.state.fees*7, 
            name:this.state.name='Jassie gill', 
            prof:this.state.prof='Singer'
            })
    }



  render() {
      const contextValue={
          data:this.state,
          handlecheck:this.feesIncremented
      }

    return (
      <div>
          <h1>Component A</h1>
          <Provider value={contextValue}>
            <B/>
            <C/>
          </Provider>
      </div>
    )
  }
}

export default A