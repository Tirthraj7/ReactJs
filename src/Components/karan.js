import React, { Component } from 'react';
import records from './HOC';

class Karan extends Component{

    state={
        fees:150000
    }

    feesChanged=()=>{
        this.setState({fees:this.state.fees + 1})
    }

    render(){
        return(
            <div>
                <h3 onMouseOver={this.feesChanged}>Karan's Fees{this.state.fees}, {this.props.rec1}</h3>
            </div>
        )
    }
}
    export default records(Ap)