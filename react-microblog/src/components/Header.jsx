import { Navbar, Container, Nav, NavDropdown, Image, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

function Header() {
  const { user, logout } = useUser();

  return (
    <Navbar bg='light' sticky='top' className='Header'>
      <Container>
        <Navbar.Brand>Microblog</Navbar.Brand>
        <Nav>
          {user === undefined ?
            <Spinner animation="border" />
          :
            <>
              {user !== null &&
                <div className="justify-content-end">
                  <NavDropdown title={
                    <Image src={user.avatar_url + '&s=32'} roundedCircle />
                    } align="end">
                      <NavDropdown.Item as={NavLink} to={'/user/' + user.username}>
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={NavLink} to="/password">
                        Change Password
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                </div>
              }
            </>
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;