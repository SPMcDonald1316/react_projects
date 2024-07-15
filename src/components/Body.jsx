import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";

function Body({sidebar, children}) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
  );
}

export default Body;