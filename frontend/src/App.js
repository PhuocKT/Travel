import React from 'react'
import { useState, useEffect } from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
    

const App = () => {
    useEffect(() => {
        fetch("http://localhost:5000/api/data")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);
    return (
        
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App