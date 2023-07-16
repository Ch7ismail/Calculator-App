import React, { useState, useRef } from 'react'
import { evaluate } from 'mathjs';
import './App.css'
function App() {
  const [currentValue, setCurrentValue] = useState('');
  const inputRef = useRef(null);
  return (
    <div className="container">
      <div className="output">
          <input type="text" ref={inputRef} value={currentValue} readOnly/>
      </div>
      <div className="cmd-btn">
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+7)}}>7</button>
        <button className="digit"onClick={()=>{setCurrentValue((currentValue)=>currentValue+8)}}>8</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+9)}}>9</button>
        <button className="operation" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'/')}}>/</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+6)}}>6</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+5)}}>5</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+4)}}>4</button>
        <button className="operation" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'*')}}>x</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+3)}}>3</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+2)}}>2</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+1)}}>1</button>
        <button className="operation" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'+')}}>+</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'.')}}>.</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+0)}}>0</button>
        <button className="digit" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'%')}}>%</button>
        <button className="operation" onClick={()=>{setCurrentValue((currentValue)=>currentValue+'-')}}>-</button>
        <button className="operation cmd"  onClick={()=>{setCurrentValue(()=>'')}}>AC</button>
        <button className="operation cmd" onClick={()=>{ inputRef.current.value=evaluate(currentValue)}}>=</button>
      </div>
    </div>
  )
}

export default App
