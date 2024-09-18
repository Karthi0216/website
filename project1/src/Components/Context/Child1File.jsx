import React, { useContext } from 'react';
import { a } from './UseContextParent';

export default function Child1File() {

    const arr1 = useContext(a);
  return (
    <div>
       <h1>Child1File</h1>
        <ol>
            {
                arr1.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
            }
        </ol>
    </div>
  )
}
