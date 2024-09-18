import React from 'react'
import ChildProp from './ChildProp';

export default function ParentProp() {

    const data = ["Hunter","GT","Classic","Continental","Scram"];
  return (
    <div>
        <h1>Parent Props</h1>
        <ol>
            {
                data.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>
        <ChildProp re={data} />
    </div>
  )
}
