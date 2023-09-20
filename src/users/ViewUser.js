import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";

export default function ViewUser() {

    // let navigate=useNavigate()

    const{id} = useParams()

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    // const{name,username,email}=user

    // const onInputChange=(e)=> {
    //     setUser({...user,[e.target.name]:e.target.value})
    // };

    useEffect(()=> {
        loadUsers()
    },[ ])

    // const onSubmit=async (e)=>{
    //     e.preventDefault();
    //     await axios.put(`http://localhost:8080/user/${id}`,user)
    //     navigate("/")
    // };

    const loadUsers=async ()=> {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    
    }

  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
            <h2 className='text-center m-4'>User Details</h2>

            
            <div className='car'>
                <div className='car-header'>
                    Details of user id: {user.id}
                    <ul className='List-group List-group-flush'>
                        <li className='List-group-item'>
                            <b>
                                Name: 
                            </b>
                            {user.name}
                            
                        </li>

                        <li className='List-group-item'>
                            <b>UserName:</b>
                            {user.username}
                            
                        </li>
                        <li className='List-group-item'>
                            <b>Email:</b>
                            {user.email}
                            
                        </li>
                    </ul>
                </div>
            </div>
            <Link className="btn btn-primary my-2" to = {"/"}>
                Back to Home
                
            </Link>
           
            </div>
         </div>
    </div>
  )
}
