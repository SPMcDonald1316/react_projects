import Navbar from './components/Navbar';
import { links } from './data';

const App = () => {
  return (
    <main>
      <h2>Navbar Starter</h2>
      <Navbar links={links} />
    </main>
  );
};
export default App;
