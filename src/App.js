import logo from './logo.svg';
import './App.css';
import {Routes,Route}from "react-router-dom";
import{Home}from "./components/Home";
import{Navbar}from "./components/Navbar";
import{Electronics}from "./components/Electronincs";
import{Jewelery}from "./components/Jewelery";
import {Men}from "./components/Men";
import{Women}from "./components/Women";
import Footer from './components/Footer';
import { Productdetail } from './components/productdetail';
import { Signin } from './components/signin';
import { Login } from './components/Login';
import { Cart } from './components/cart';
import { Private } from './components/Private';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/jewelery" element={<Jewelery/>}></Route>
        <Route path="/men's" element={<Men/>}></Route>
        <Route path="/women's" element={<Women/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/cart" element={<Private><Cart/></Private>}></Route>
        <Route path="/product/:id" element={<Productdetail/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
