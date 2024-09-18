import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {

    const [num, setNum] = useState(0);

    const loop = useMemo(() => {
        let score = 0;
        for (let i = 0; i < num; i++) {
            score += num * 2;
        }
        return score;
    }, [num])
    return (
        <div>
            <label htmlFor="">Enter a number</label>
            <input type="number" name="" onChange={(e) => { setNum(e.target.value) }} id="" />

            <h1>
                result : {num} <br />
                Loop : {loop}
            </h1>
        </div>
    )
}
