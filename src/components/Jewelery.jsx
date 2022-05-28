import{useEffect,useState}from "react";
import axios from"axios";
import Footer from "./Footer";
import{Link}from "react-router-dom"
const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const Jewelery=()=>{
    const [item,setItem]=useState([])
    useEffect(()=>{
             axios.get("https://fakestoreapi.com/products/category/jewelery").then(({data})=>{
                 setItem(data);
                console.log(data)
                 
             })
    },[])
    return(
        <div>
           {item.map((item)=>(
              <div><Link to={`/product/${item.id}`}>
                  <img src={item.image}/>
               <p key={item.id}>{item.id}. {item.title}</p>
               </Link>
               </div>
             
           ))}
           <Footer/>
        </div>
    )
}