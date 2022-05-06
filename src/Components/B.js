import React, { Component } from 'react'
import { Consumer } from './Context'

export class B extends Component {
  render() {
    return (
      <div>
            <div>Component B</div>
            <Consumer>
                {
                    ({data,handlecheck})=>(
                        <div>
                            <h3>
                                {data.fees}, {data.name}, {data.prof}
                            </h3>
                                <button onClick={handlecheck}>Change Fees</button>
                        </div>
                    )
                }
            </Consumer>
      </div>
    )
  }
}

export default B