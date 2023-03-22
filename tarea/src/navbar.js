import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import React from 'react';

function NavBar() {
  const [input, setInput] = useState("");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Platos</Nav.Link>
            <Nav.Link href="/ingredients">Ingredientes</Nav.Link>
            <NavDropdown title="Reseñas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Crear Reseña</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ver Reseñas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
             
            />
            <Button 
                   onClick = {() => console.log(input)}
                    >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;