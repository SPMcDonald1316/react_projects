import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" end>Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}

export default Sidebar;