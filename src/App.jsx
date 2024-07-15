import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';
import Posts from './components/Posts';

function App() {
  return (
    <Container fluid className='App'>
      <Header />
      <Body sidebar>
        <Posts />
      </Body>
    </Container>
  );
}

export default App
