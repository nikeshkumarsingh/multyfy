import logo from './logo.svg';
import './App.css';
import {Routes,Route}from "react-router-dom";
import{Home}from "./components/Home";
import{Navbar}from "./components/Navbar";
import{Electronics}from "./components/Electronincs";
import{Jewelery}from "./components/Jewelery";
import {Men}from "./components/Men";
import{Women}from "./components/Women";
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
      </Routes>
    </div>
  );
}

export default App;
