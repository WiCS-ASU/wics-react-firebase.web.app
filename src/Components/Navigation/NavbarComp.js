import React from 'react';
import { Container,Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function NavbarComp(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
            <Navbar.Brand as={Link} to="/"> <img src= "./wics.png" alt="Logo"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto p-1">
                                    <Nav.Link className="px-5" as={Link} to="/">About Us</Nav.Link>
                                            <NavDropdown className="px-5" title="Events" id="collasible-nav-dropdown">
                                                 <NavDropdown.Item as={Link} to="/events-calendar">Events Calendar</NavDropdown.Item>
                                                 <NavDropdown.Item as={Link} to="/annual-competition">Annual Competition</NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link className="px-5" as={Link} to="/sponsors">Sponsors</Nav.Link>
                                            <Nav.Link className="px-5" as={Link} to="/our-team">Our Team</Nav.Link>
                                 </Nav>
                                              
                            </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}
export default NavbarComp;