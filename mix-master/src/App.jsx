import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/about' element={<h2>About Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
