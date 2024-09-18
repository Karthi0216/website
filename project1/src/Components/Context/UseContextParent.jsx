import React, { createContext, useState } from 'react';
import Child1File from './Child1File';
import Child2File from './Child2File';
export const a = createContext();

export default function UseContextParent() {

    const [text,setText] = useState("");
    const [arr,setArr] = useState([]);

    function handleSubmit(){
        setArr((prev)=>[...prev,text])
    }

  return (
    <div>
        <h1>Parent File</h1>
        <label htmlFor="">Enter todo</label>
        <input type="text" onChange={(e)=>{setText(e.target.value)}} name="" id="" />
        <button onClick={handleSubmit}>Add</button>

        <a.Provider value={arr}>
            <ProviderComponent />
        </a.Provider>
    </div>
  )
}


function ProviderComponent(){
    return(
        <div>
            <Child1File />
            <Child2File />
        </div>
    )
}

