import React,{useState} from 'react'

function HookObj() {

    const [name,setname] = useState({fName:'',lName:''});
  
    return (
    <div>
        <form>
            <input type='text' value={name.fName} onChange={e=>{setname({...name,fName:e.target.value})}}></input>
            <input type='text' value={name.lName} onChange={e=>{setname({...name,lName:e.target.value})}}></input>
        </form>
        
        {name.fName}
        {name.lName}<br></br>
        {JSON.stringify(name)}
        <br></br>
    </div>
  )
}

export default HookObj