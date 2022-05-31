import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";

export const Productdetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  console.log(state);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setItem(data);
    });
    // axios.get(`http://localhost:8080/cart?userid=${state.token}`).then(({data})=>{
    //            setCart(data)
    //            console.log(data)
    //     })
    //     if(cart.length>0){
    //         sestStat(true)
    //     }
  }, []);

  //   const handlechoose=()=>{
  //       if(stat){
  //        //  updatecart()
  //          let newitem=[];
  //         //  cart.item.map((e)=>{
  //         //      newitem.push(e)
  //         //  })
  //         //  newitem.push(item.id)
  //         cart.map((e)=>{
  //             for(var i=0;i<e.item.length;i++){
  //                  newitem.push(e.item[i])
  //             }
  //         })
  //         newitem.push(item.id)
  //         console.log(newitem)
  //         updatecart(newitem)
  //       }
  //       else{
  //          //  handleSubmit()
  //       }
  //   }
  //   const updatecart=async(newitem)=>{

  //       try {
  //         await fetch(` http://localhost:8080/cart`, {
  //           method: "PATCH",
  //           body: JSON.stringify({
  //            userid:id,
  //            item:newitem
  //     }),
  //           headers: { "Content-Type": "application/json" },
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   }
  //   console.log(item)

  const handleroute = () => {
    dispatch({ type: "ADD_ITEM", productid: id });
    navigate("/cart", { replace: true });
  };

  return (
    <div>
      <div>
        <img src={item.image} />
        <h2>{item.title}</h2>
        <h2>${item.price}</h2>
        <button
          style={{
            border: "0px",
            borderRadius: "7px",
            background: "black",
            color: "white",
          }}
          onClick={handleroute}
        >
          ADD TO CART
        </button>
        <p>{item.description}</p>
      </div>
      <Footer />
    </div>
  );
};
