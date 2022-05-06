import React,{useState,useEffect} from 'react'

export default function HookCounter() {

        const [Singername,setname]=useState('Ap Dhillon');
        const [count,setcount]=useState('Subscribers');

        const [counter,setcounter]=useState(0);
        const [counter1,setcounter1]=useState(0);

        // const name=Singername[0];
        // const setname=Singername[1];

        const stateHandler=()=>{
            setname('Raahi Rana')
            setcount('700000')
        }

        const Increment=()=>{
            setcounter(counter + 1)
        }

        const Decrement=()=>{
            setcounter1(counter1 - 1)
        }

        const Incremented=()=>{
                for(let i=0;i<10;i++){

                    setcounter(preCount => preCount + 1)
                }
            }
    useEffect(()=>{
        console.log('Karan Randhawa')
    });

  return (
    <div>
        {Singername}<br></br>
        {count}<br></br>
        <button onClick={stateHandler}>click here</button>
        <button onClick={Increment}>Increment {counter}</button>
        <button onClick={Decrement}>Decrement {counter1}</button>
        <button onClick={Incremented}>Incremented by 10 - {counter}</button>
    </div>
  )
}
