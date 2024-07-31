import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar";
import FlashMessage from "./FlashMessage";

function Body({sidebar, children}) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          <FlashMessage />
          {children}
        </Container>
      </Stack>
    </Container>
  );
}

export default Body;