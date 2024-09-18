import React, { useCallback, useRef, useState } from 'react'

export default function UseRefAndUseCallbackHook() {

    const [color, setColor] = useState("");
    const dispColor = useRef(null);

    function handleColorChange(e){
        e.preventDefault();

        console.log(dispColor.current);

        dispColor.current.style.background = color;

    }

    // const handleColorChange = useCallback((e)=>{
    //     e.preventDefault();

    //     console.log(dispColor.current);

    //     dispColor.current.style.background = color;
    // },[color])

    // const dispStyle = {
    //     position:"absolute",
    //     height:"100%",
    //     width:"100%"
    // }

    return (
        // <div ref={dispColor} style={dispStyle}>
        <div ref={dispColor} style={{
            position:"absolute",
            height:"100%",
            width:"100%"
        }}>
            <form onSubmit={handleColorChange}>
                <label htmlFor="">Enter a color code</label>
                <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} name="" id="" />
            </form>
        </div>
    )
}
