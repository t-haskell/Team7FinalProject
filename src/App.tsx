import React from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Layout from "./pages/Layout";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import BrandSelection from "./pages/BrandSelection";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<BrandSelection />}></Route>
        </Routes>
    );

    return (
        <div className="App">
            <header className="App-header">
                Team 7 Final Project --- SoleMate
            </header>
            <hr></hr>
            Choose your User level.
            <hr></hr>
            <Button>User</Button>
            ADD ON CLICK - MAIN PAGE
            <p></p>
            <Button>Admin</Button>
            ADD ON CLICK - PASSWORD PAGE
            <p></p>
            <a href="BrandSelection">
                <Button href="BrandSelection">Super</Button>
                ADD ON CLICK - PASSWORD PAGE
            </a>
        </div>
    );
}

export default App;
