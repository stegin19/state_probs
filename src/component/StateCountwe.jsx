import React, { useState } from "react";
import './Style.css';

export default function StateCounter() {
    const [count,setCount]=React.useState(0)

 function add(){
    setCount(nextCount => nextCount+1)
 }

 function sub(){
    setCount(prevCount => prevCount-1)
 }



    return(
        <div>
            <button onClick={sub}>-</button>
            <span>  </span>
            <button onClick={add}>+</button>
            <div>{count}</div>
            <hr/>
        </div>
    )
    
}