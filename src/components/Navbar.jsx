import { Link } from "react-router-dom";
import {Nav}from "./Navst";
export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "Electronics", to: "/electronics" },
    {title:"Jewelery" , to:"/jewelery"},
    {title:"Men's Clothing",to:"/men's"},
    {title:"Women's Clothing",to:"/women's"},
    {title:"Login", to:"/login"},
    {title:"signin" ,to:"/signin"},
    
  ];
  return (
    <div style={{"padding-bottom":"100px"}}>
        <Nav>
      {nav.map((e, i) => (
        <Link style={{margin:"10px"}} key={i} to={e.to}>
          {e.title}
        </Link>
      ))}
      <Link  to={"/cart"}><img style={{width:"35px",marginTop:"10px"}} src="https://www.svgrepo.com/show/193316/shopping-bag.svg"/></Link>
      </Nav>
    </div>
  );
};