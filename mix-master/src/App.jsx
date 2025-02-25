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
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path='cocktail' element={<Cocktail />} />
          <Route path='newsletter' element={<Newsletter />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
