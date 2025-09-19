import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

const App = () => {
    useEffect(() => {
        fetch("http://localhost:5000/api/data")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar/>
                        <Home/>
                        <Main/>
                        <Footer/>
                    </>
                } />

                <Route path="/about" element={
                    <>
                    <Navbar/>
                    <About/>
                    <Footer/>
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App