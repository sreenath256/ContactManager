import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddContact from "./screens/AddContact";
import axios from "../utils/axios";
import ErrorComponent from "./components/ErrorComponent";
import { useState } from "react";


const App = () => {


  const storageAuthToken = localStorage.getItem("authToken");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("authToken"));
  axios.defaults.headers.common["Authorization"] = `Bearer ${storageAuthToken}`;

  

  return (
    <div>
      <Navbar />

      <Routes>
        {
          isAuth ? (

            <>
          
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="*" element={<ErrorComponent redirect='/'/>} />
          </>
        
        ):
        (

          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorComponent redirect='/login'/>} />

          </>
          )
        
        
      }
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

