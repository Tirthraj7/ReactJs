import React,{useState, useEffect} from 'react'

function HookMouse() {

    const[X,setX]=useState(0);
    const[Y,setY]=useState(0);

    const logmousemove=()=>{
        console.log('mousemove')
    }

    const logmouseposition=e=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{

        console.log('useEffect Called')
        window.addEventListener('mousemove',logmousemove)
    },[])

  return (
    <div>
        x - {X} y - {Y}
    </div>
  )
}

export default HookMouse