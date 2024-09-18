import React, { useState } from 'react'

export default function UseStateHook() {

    /* 
        1. useState
        2. useEffect
        3. useRef
        4. useContext
        5. useReducer (complicated hook)
        6. useCallback
        7. useMemo
        8. custom hook
    */

    /* 
        const [VAR1,VAR2] = useState(inital value);

        VAR1 => store updated value
        VAR2 => Helps to update value

    */
    
        const [count,setCount] = useState(0);

        function incValue(){
            setCount(count+1);
        }

        const [text,setText] = useState("")
  return (
    <div>
        <h1>UseStateHook</h1>

        <h1>Counter</h1>

        <h1>{count}</h1>

        <button
            onClick={()=>{
                setCount(count-1)
            }}
        >Decrement</button>

        <button
            onClick={()=>{
                setCount(0);
            }}
        >Reset</button>

        <button
            onClick={incValue}
        >Increment</button>
        <br />

            <label htmlFor="inp1">text</label>
            <input type="text" name="" onChange={(e)=>{setText(e.target.value)}} id="inp1" />

            <h1>Result : {text}</h1>

    </div>
  )
}
