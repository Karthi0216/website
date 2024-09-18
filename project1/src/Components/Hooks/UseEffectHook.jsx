import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    const [view,setView] = useState([]);

    useEffect(()=>{
        fetch('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form')
        .then((res)=>{return res.json()})
        .then((data)=>{setView(data)})
        .catch((error)=>{console.log(error);})
        
    },[]);
    console.log(view);
  

    
    
  return (
    <div className='container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    view.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
