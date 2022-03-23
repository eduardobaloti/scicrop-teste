import React, { Component } from "react";
import {Navbar, Nav} from "react-bootstrap";

export default class NavBarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Sobre</Nav.Link>
                        <Nav.Link href="#pricing">Contato</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
