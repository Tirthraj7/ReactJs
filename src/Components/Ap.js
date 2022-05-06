import React, { Component } from 'react'
import records from './HOC';

class Ap extends Component {

    state={
        fees:350000
    }

    feesIncremented=()=>{
        this.setState({fees:this.state.fees*2})
    }

  render() {
    return (
      <div>
          <h2 onMouseOver={this.feesIncremented}>Jass's Fees{this.state.fees}</h2>
      </div>
    )
  }
}

export default Ap