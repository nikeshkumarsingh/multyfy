import{useEffect,useState}from "react";
import axios from"axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const Electronics=()=>{
    const [item,setItem]=useState([])
    useEffect(()=>{
             axios.get("https://fakestoreapi.com/products/category/electronics").then(({data})=>{
                 setItem(data);
                
                 
             })
    },[])
    return(
        <div>
           {item.map((item)=>(
             <Link to={`/product/${item.id}`}> <div>
                  <img src={item.image}/>
               <p key={item.id}>{item.id}. {item.title}</p>
               {/* <p>${item.price}</p>
               <p>{item.description}</p> */}
               </div>
               </Link>
           ))}
           <Footer/>
        </div>
    )
}