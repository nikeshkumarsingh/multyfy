import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { AuthContext } from "./context/Authcontext";


export const Cart=()=>{
    const {state}=useContext(AuthContext);
    const [cartdata,setCartdata]=useState([]);
    const [item,setItem]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/cart?userid=${state.token}`).then(({data})=>{
            setCartdata(data);
           
            
        })
       getdata() 
},[])
   
const getdata=()=>{
    cartdata.map((e)=>{
    axios.get(`https://fakestoreapi.com/products/${e.id}`).then(({ data }) => {
        console.log(data)
        setItem([...item,data]);
      });
    })  
}
console.log(item)

    return(
        <div>
           
        </div>
    )
}