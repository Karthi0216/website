import React, { useContext } from 'react'
import { a } from './UseContextParent';

export default function Child2File() {
    const arr1 = useContext(a);
    return (
        <div>
            <h1>Child2File</h1>
            <ul>
                {
                    arr1.map((item) => {
                        return (
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
