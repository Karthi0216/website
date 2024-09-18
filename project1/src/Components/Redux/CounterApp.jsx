import React, { useState } from 'react';
import { increment, decrement, incrementByAmount, decrementByAmount } from './CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterApp() {

    const [amount, setAmount] = useState(0);

    const counter = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={()=>{
                    dispatch(increment())
                }}
            >Increment</button>

            <h1>{ counter }</h1>

            <button
                onClick={()=>{
                    dispatch(decrement())
                }}
            >Decrement</button>

            <br />

            <input type="number" name="" value={amount} onChange={(e) => { setAmount(e.target.value) }} id="" />
            <button
                onClick={()=>{
                    dispatch(incrementByAmount(Number(amount)))
                }}
            >Add Amount</button>
            <button
                
                onClick={()=>{
                    dispatch(decrementByAmount(Number(amount)))
                }}
            >Less AMount</button>
        </div>
    )
}
