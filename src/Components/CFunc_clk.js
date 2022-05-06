import React,{Component} from "react";

class CFunc_clk extends React.Component{

    constructor(props){
        super(props);
        //this.changeEvent=this.changeEvent.bind(this);
        
        this.state={
            Msg:'Raahi Rana',
            Label:this.props.Label
        }
    }

    changeEvent=()=>{
        
        this.setState({
            Msg: 'Ap Dhillon'
        })


    console.log('RunUp Records',this.props.Label);
    }

render(){
    const numbers=this.props.numbers;
    
    // const newNumbers=numbers.map((numbers)=>{ return <li>{numbers}</li> })

    // console.log(numbers)
    // console.log(newNumbers)


return(
    <React.Fragment>
        <button onClick={this.changeEvent}>Hit Me</button><br></br>
        {this.props.Label}
        <ul>
            {
                numbers.map((numbers)=>{return <li key={numbers}>{numbers}</li>})
            }
        </ul>
    </React.Fragment>
    )
  }
}
    export default CFunc_clk;
