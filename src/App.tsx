import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Team 7 Final Project --- SoleMate
            </header>
            <p>we ball</p>
            <ul>
                <li>Anthony Andujar</li>
                <li>Tommy Haskell</li>
                <li>Jadyn Worthington</li>
                <li>Tabetha Chubb</li>
                <li>Greg Mensah</li>
                <li>Joey Blair</li>
            </ul>
            <hr></hr>
            Choose your User level.
            <hr></hr>
            <Button>User</Button>
            ADD ON CLICK - MAIN PAGE
            <p></p>
            <Button>Admin</Button>
            ADD ON CLICK - PASSWORD PAGE
            <p></p>
            <Button>Super</Button>
            ADD ON CLICK - PASSWORD PAGE
        </div>
    );
}

export default App;
