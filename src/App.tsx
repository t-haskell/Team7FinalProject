import React from "react";
import "./App.css";
import { UserDeclaration } from "./userdeclaration";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Team 7 Final Project --- SoleMate
            </header>
            <p>we ball</p>
            <ul>
                <li>Anthony Andujar</li>
                <li>???</li>
                <li>???</li>
                <li>???</li>
                <li>???</li>
                <li>???</li>
            </ul>
            <hr></hr>
            <UserDeclaration></UserDeclaration>
        </div>
    );
}

export default App;
