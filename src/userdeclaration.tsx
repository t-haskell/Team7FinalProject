import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function UserDeclaration(): JSX.Element {
    const [type, setType] = useState<string>("");

    function typeAdmin(): void {
        type == "";
        setType("Admin");
    }

    function typeSuper(): void {
        type == "";
        setType("Super");
    }

    function typeUser(): void {
        type == "";
        setType("User");
    }

    return (
        <div>
            <Button onClick={typeAdmin}>ADMIN</Button>
            <Button onClick={typeSuper}>SUPER</Button>
            <Button onClick={typeUser}>USER</Button>
        </div>
    );
}
