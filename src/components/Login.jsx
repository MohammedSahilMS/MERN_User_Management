import React,{useState} from 'react'
import axiosInstance from "../axiosInstance"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [formData,setFormData] = useState({email:"", password:""})
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post("/auth/login" , formData);
            localStorage.setItem("token",res.data.token);
            navigate("/dashboard")
        } catch (err) {
            console.err(err.response.data.msg);
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' onChange={handleChange} />
        <input type="password" name='password' placeholder='Password' onChange={handleChange} />
        <button type='submit' >Login</button>
    </form>
    </>
  )
}

export default Login