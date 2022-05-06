import React,{Component} from 'react'

const records=(SINGER)=>{
    class Record extends Component{
        render(){
            return(
                <SINGER rec1='EXCUSES' rec2='DESIRES' rec3='SPACESHIP'></SINGER>
            )
        }
    }
    return Record;
}
    export default records