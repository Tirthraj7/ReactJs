import React from 'react';
import {useState,useEffect} from 'react';

function Funccounter1(){

    const [count,setCount]=useState(0);
    const [name,setName]=useState(0);

    useEffect(()=>{
        console.log('user effect')
            document.title=`clicked ${count} times`
    },[name])
    
    return(
        <div>
            <input type='text' value={name} onChange={e=>{setName(e.target.value)}}></input>
            <button onClick={()=>{setCount(count+1)}}>click {count} times</button>
        </div>
    )
}

export default Funccounter1