import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    //post
    function send() {
        const data = {
            name: name,
            email: email,
            pw: password
        }
        axios.post('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form', data)
            .then(alert("success"))
            .catch(console.log("error"))
    }

    //get
    const [view, setview] = useState([]);
    useEffect(() => {
        axios.get('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form')
            .then((user) => setview(user.data))
            .catch((err) => console.log(err))
    }, [view]);

    //setup edit
    const[edit,setEdit] = useState(false);
    function setupEdit(id){
        localStorage.setItem("_id",id);
        axios.get('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form/'+id)
            .then((user) =>{
                setname(user.data.name);
                setemail(user.data.email);
                setpassword(user.data.pw);

                setEdit(true);
            })
            .catch((error)=>{console.log(error);})
    }

    //put
    function handleUpdate(){
        const id = localStorage.getItem("_id");
        // const data = {
        //     name: name,
        //     email: email,
        //     pw: password
        // }
        axios.put('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form/'+id, {
            name: name,
            email: email,
            pw: password
        })
            .then(()=>{
                setname("");
                setpassword("")
                setemail("");

                setEdit(false);
                alert("success");
            })
            .catch((error)=>{console.log(error);})
    }

    //delete
    function handleDelete(id){
        axios.delete("https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form/"+id)
        .then(()=>{
            alert("Deleted");
        })
        .catch((error)=>{console.log(error);})
    }
    return (
        <div>
            <input type="text" placeholder='enter ur name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='enter ur email' value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='enter ur password' value={password} onChange={(e) => setpassword(e.target.value)} />

            <button onClick={
                edit ?
                handleUpdate :
                send
            }>
                {
                    edit ?
                    "Update" :
                    "send"
                }
            </button>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.pw}</td>
                                    <td>
                                        <button
                                            onClick={()=>{
                                                setupEdit(item.id);
                                            }}
                                        >Edit</button>
                                        <button
                                            onClick={()=>{
                                                handleDelete(item.id);
                                            }}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
