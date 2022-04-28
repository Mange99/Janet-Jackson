import { Navbar, Container, Nav } from "react-bootstrap";
import "./headerCss.css";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function HeaderComponent() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fitness
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/exercise">
              Exercises
            </Nav.Link>
            <Nav.Link as={Link} to="/food-and-helth">
              Food and Health
            </Nav.Link>
            <Nav.Link as={Link} to="/tips">
              Tips
            </Nav.Link>
            <Nav.Link as={Link} to="/calculators">
              Calculators
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
