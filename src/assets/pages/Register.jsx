import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CheckEmail, registerUser } from '../../services/allApis'

function Register() {

    const [user, setUser ] = useState({
        username: "", email: "", password: ""
    })

    const nav = useNavigate()

    const handleRegister =async () =>{
        console.log(user);
        const {username, email, password} = user
        if(!username || !email || !password){
            toast.warning('Enter All Fields !!!')
        } else {
            const result = await CheckEmail(email)
            console.log(result);
            if(result.data.length>0){
                toast.warning('Email Already Exist. Use another Email Id')
            } else {
                const result = await registerUser(user)
                if(result.status == 201){
                    toast.success('Registration Successful...')
                    setUser({
                        username:"", email:"", password:""
                    })
                    nav('/log')
                }
            }
            
        }
    }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
        <div className="w-75 border border-light shadow bg-light p-5">
            <h1>Register</h1>
            <input type="text" className="form-control my-3" onChange={(e)=>setUser({...user,username:e.target.value})} placeholder='Enter Username'/>
            <input type="email" className="form-control my-3" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter Email ID'/>
            <input type="password"placeholder='Enter Password' onChange={(e)=>setUser({...user,password:e.target.value})} className="form-control mb-3" />
            <div className='d-flex justify-content-between'>
                <button className='btn btn-success' onClick={handleRegister}>Register</button>
                <Link to={'/log'}>Already a User?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register