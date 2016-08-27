import React from 'react';
import { NavbarHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



const NavBar = () => (
    <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
             <a  href="/home">Code Connect</a>
          </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav pullCenter>
                <NavItem href="/contributor">
                    Contributer
                </NavItem>
                <NavItem href="/mentor">
                    Mentor
                </NavItem>

            </Nav>

            <Nav pullRight>
                <NavDropdown title="Profil"
                             id="basic-nav-dropdown">
                    <MenuItem href="/yourtasks">
                        Your Tasks
                    </MenuItem>
                    <MenuItem href="/yourtasks">
                        Your Project
                    </MenuItem>

                    <MenuItem divider />
                    <MenuItem> Logout
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
