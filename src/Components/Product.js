import React, { Component } from 'react'

class Product extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ProductID:'',qty:0
      }
    }

    addTocart=(pid)=>{
        this.setState({
            ProductID:pid,qty:this.state.qty+1
        })
    }
  render() {
    return (
      <div>
          <button onClick={()=>{this.addTocart(1)}}>Add to Cart</button>
          <Cart ProductID={this.state.ProductID} qty={this.state.qty}></Cart>
      </div>
    )
  }
}
    export default Product

class Cart extends Component{

    constructor(props){
        super(props)

        this.state={
            qty:this.props.qty
        }
    }

    updateQnty=()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }

    static getDerivedStateFromProps(props,state){
            console.log(props.qty)
            console.log(state.qty)
            
        if(props.qty !== state.qty){
            return{qty: props.qty}
        }
            return null;
    }

    componentDidMount(){
        console.log('Execute after component render')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component Updated')
    }

    render(){
        return(
            <div>
                <h1>CART: {this.state.qty}</h1>
                <button onClick={this.updateQnty}>Update Quantity</button>
            </div>
        )
    }
}