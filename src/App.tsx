import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
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
            <Button>Super</Button>
            ADD ON CLICK - PASSWORD PAGE
        </div>
    );
}

export default App;
