import{useEffect,useState}from "react";
import axios from"axios";
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
              <div>
                  <img src={item.image}/>
               <p key={item.id}>{item.id}. {item.title}</p>
               <p>${item.price}</p>
               <p>{item.description}</p>
               </div>
             
           ))}
        </div>
    )
}