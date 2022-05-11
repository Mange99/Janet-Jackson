import { Navbar, Container, Nav } from "react-bootstrap";
import "./headerCss.css";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useToken } from "../useToken";

export function HeaderComponent() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fitness
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="exercise">
              Exercises
            </Nav.Link>
            <Nav.Link as={Link} to="food-and-health">
              Food and Health
            </Nav.Link>
            <Nav.Link as={Link} to="tips">
              Tips
            </Nav.Link>
            <Nav.Link as={Link} to="calculators">
              Calculators
            </Nav.Link>
          </Nav>

          {localStorage.getItem("token") == undefined ? (
            <Nav>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="register">
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <Nav.Link as={Link} to="Profile-Page">
              My profile
            </Nav.Link>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
