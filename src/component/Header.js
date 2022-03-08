import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {token !== null ? (
          <div className="profile-container">
            <img
              className="user-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
            />
          </div>
        ) : (
          <Button variant="danger">Log in</Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
