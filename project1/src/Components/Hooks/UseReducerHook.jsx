import React, { useReducer } from 'react'

export default function UseReducerHook() {

    /* 
        const[var1,var2] = useReducer(function,initial value);
    */
                                                     
    const data = {
        Name: "",
        Email: "",
        Phone: "",
        Age: 0
    }

    const [state, dispatch] = useReducer(reducer, data);

    function reducer(ins, outs) {
        switch (outs.type) {
            case 'cgtext': {
                return {
                    ...ins,
                    [outs.field]: outs.vals
                }
                break;
            }
            case 'incage':{
                return{
                    ...ins,
                    Age:ins.Age+1
                }
            }
            case 'decage':{
                return{
                    ...ins,
                    Age:ins.Age-1
                }
            }
            default: {
                return false;
            }
        }
    }


    function handleChange(e) {
        const { name, value } = e.target;

        dispatch({
            type: "cgtext",
            field: name,
            vals: value
        })
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="Name"
                    value={state.Name}
                    onChange={handleChange}
                    id=""
                />

                <label htmlFor="">Email</label>
                <input
                    type="text"
                    name="Email"
                    value={state.Email}
                    onChange={handleChange}
                    id=""
                />

                <label htmlFor="">Phone</label>
                <input
                    type="number"
                    name="Phone"
                    value={state.Phone}
                    onChange={handleChange}
                    id=""
                />
            </form>
                <label htmlFor="">Age</label>
                <button
                    onClick={() => {
                        dispatch({
                            type: "decage"
                        })
                    }}
                >minus</button>
                <button
                    onClick={() => {
                        dispatch({
                            type: "incage"
                        })
                    }}
                >plus</button>

            <h1>
                Name:{state.Name} <br />
                Email:{state.Email} <br />
                Phone:{state.Phone} <br />
                Age: {state.Age}
            </h1>
        </div>
    )
}
