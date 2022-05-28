import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState([]);
  const [stat, setStat] = useState(false);
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const {state} = useContext(AuthContext);
  const {dispatch}=useContext(AuthContext)
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.className]: e.target.value,
    });
  };

  // console.log(user)
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/users`).then(({ data }) => {
  //     setUser(data);

  //   });
  // }, []);
  //   console.log(user)

  const handleSubmit = (e) => {
    //  user.map((e)=>{
    //      if(e.username==formdata.username&&e.password==formdata.password){
    //               isAuth(true);

    //             //  alert("login success")
    //               <Navigate to="/cart"/>
    //      }

    //     })
    e.preventDefault();
    console.log(formdata);
    try {
      axios
        .get(
          `http://localhost:8080/users?users.username=${formdata.username}&password=${formdata.password}`
        )
        .then(({ data }) => {
          console.log(data)
          setUser(data);
          alert("login success");
          console.log(data[0].id)
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: data[0].id,
          });

          
        });
    } catch (err) {
      console.log(err);
      alert("wrong input or detail not found");
    }
  };
  if (state.isAuth) {
    return <Navigate to="/" />;
  }
 // console.log(user);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          className="username"
          placeholder="enter username"
        />
        <input
          type="password"
          onChange={handleChange}
          className="password"
          placeholder="enter Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
