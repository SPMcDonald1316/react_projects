import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';

function App() {
  const posts = [
    {
      id: 1,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
      username: 'susan',
      },
    },
    {
      id: 2,
      text: 'Second post',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      },
    },
  ];

  return (
    <Container fluid className='App'>
      <Header />
      <Container>
        <Stack direction='horizontal'>
          <Sidebar />
          <Container>
            <Posts />
          </Container>
        </Stack>
      </Container>
    </Container>
  );
}

export default App
