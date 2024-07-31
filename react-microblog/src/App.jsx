import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ApiProvider from './contexts/ApiProvider';
import FlashProvider from './contexts/FlashProvider';
import Header from './components/Header';
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <Container fluid className='App'>
      <BrowserRouter>
        <FlashProvider>
          <ApiProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route path='/' element={<FeedPage />} />
                <Route path='/explore' element={<ExplorePage />} />
                <Route path='/user/:username' element={<UserPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegistrationPage />} />
                <Route path='*' element={<Navigate to="/" />} />
              </Routes>
            </UserProvider>
          </ApiProvider>
        </FlashProvider>  
      </BrowserRouter>
    </Container>
  );
}

export default App