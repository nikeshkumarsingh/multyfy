import{useEffect,useState}from "react";
import axios from"axios";
import { Navigate, useNavigate } from "react-router-dom";

export const Signin=()=>{
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        name:"",
        email:"",
        username:"",
        password:"",
        phone:"",
        
    })
    const handleChange=(e)=>{
        setFormdata({
            ...formdata,[e.target.className]:e.target.value
        })
      }
 
      
const handleSubmit=async (e)=>{
    console.log(formdata)
  e.preventDefault();
  try{
 await fetch(` http://localhost:8080/users`,{
      method:"POST",
      body : JSON.stringify(formdata),
      headers : {"Content-Type" : "application/json"}
      
  })
  
  navigate("/login",{replace:true})
 }
 catch(err){
     console.log(err)
 }
 }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleChange} className="email" placeholder="enter email"/>
                <input type="text" onChange={handleChange} className="username" placeholder="enter username"/>
                <input type="password" onChange={handleChange} className="password" placeholder="enter Password"/>
                <input type="text" onChange={handleChange} className="name" placeholder="enter  name"/>
                <input type="number" onChange={handleChange} className="phone" placeholder="enter phone number"/>
                <input type="submit"/>
            </form>
        </div>
    )
}