import React from "react";
import "./HomePage.css";
import { Button } from "react-bootstrap";

export function HomePage() {
    return (
        <div>
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
            <button type="button">
                <Button>Super</Button>
                <a href="#/BrandSelection"> ADD ON CLICK - PASSWORD PAGE</a>
            </button>
        </div>
    );
}
