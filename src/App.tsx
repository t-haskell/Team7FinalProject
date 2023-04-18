import React from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import BrandSelection from "./pages/BrandSelection";
import { HomePage } from "./pages/HomePage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route> 
            <Route path="/BrandSelection" element={<BrandSelection/>}></Route> 
        </Routes>
    );
}
