import { Navbar, Container, Nav } from "react-bootstrap";
import react from "react";
import "./headerCss.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function HeaderComponent() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="/">Fitness</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="exercise">Exercises</Nav.Link>
            <Nav.Link href="food-and-helth">Food and Health</Nav.Link>
            <Nav.Link href="tips">Tips</Nav.Link>
            <Nav.Link href="calculators">Calculators</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
