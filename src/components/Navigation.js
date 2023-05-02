import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.jpeg";
import "../CSS/navigation.css";
function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }
  return (
    <Navbar expand="lg" className="navigation-container">
      <Container>
        <LinkContainer to="/" className="logo-link-container">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logo-image" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <>
              <LinkContainer to="/login">
                <Nav.Link className="navigation-link">Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
              <Nav.Link className="navigation-link">Sign Up</Nav.Link>
            </LinkContainer>
            </>
            )}
            <LinkContainer to="/chat">
              <Nav.Link className="navigation-link">Chat</Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    <img
                      src={user.picture}
                      alt="user-avatar"
                      className="user-avatar"
                    />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
                className="user-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Settings
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;