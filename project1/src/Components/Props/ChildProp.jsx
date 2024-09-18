import React from 'react'

export default function ChildProp(prop) {

    const bike = prop.re;
    return (
        <div>
            <h1>Child Prop File</h1>
            <ul>
                {
                    bike.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
