import { AuthContext } from "./context/Authcontext";
import{Navigate}from "react-router-dom";
import {useContext}from "react";
export const Private=({children})=>{
const {state}=useContext(AuthContext);
    if(!state.isAuth){
        return <Navigate to={"/login"} reaplace={true}/>
    }
    return children;
    
};