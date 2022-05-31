import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./context/Authcontext";

export const Cart = () => {
  const { state } = useContext(AuthContext);
  const [cartdata, setCartdata] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    // state.productid.map((e)=>{
    axios
      .get(`https://fakestoreapi.com/products/${state.productid}`)
      .then(({ data }) => {
        console.log(data);
        setItem([...item, data]);
      });
    // })
    // getdata()
  }, []);
  console.log(item);
  const getdata = () => {};
  //console.log(item)

  return (
    <div style={{display:"flex"}}>
      {item.map((e) => (
        <div>
          <idv>
            <img src={e.image} alt="image" />
          </idv>
          <div>{e.price}</div>
        </div>
      ))}
    </div>
  );
};
