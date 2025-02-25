import { BrowserRouter, Routes, Route } from 'react-router';
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail' element={<Cocktail />} />
        <Route path='/error' element={<Error />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/newsletter' element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
