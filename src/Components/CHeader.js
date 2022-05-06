import React,{Component} from 'react';
import Testing from './Testing';

class CHeader extends React.Component{

    state={
        singers:[
            {id:1, name:'Raahi Rana', class:'A'},
            {id:2, name:'Ap dhillon', class:'B'},
        ]
    }
render(){
    /*
     const newsingers=this.state.singers.map(singers=>{
         <h1>{singers.id}
        {singers.name}
        {singers.class}</h1>
         )
     });
     */

return(
    <div>
        <h1>Hello {this.props.name}</h1>
        {
            this.state.singers.map(singers=>{
                return(
                /*<h1 key={singers.id}>
                    {singers.id}
                    {singers.name}
                    {singers.class}
                </h1>*/
                <Testing key={singers.id} value={singers.id}></Testing>
                )
            })
        }
    </div>
    )
  }
}
export default CHeader;