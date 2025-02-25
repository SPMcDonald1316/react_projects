import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useAppContext } from './utilities/context';

function App() {
  const { loading } = useAppContext();
  if (loading) {
    return (
      <main>
        <div className='loading' style={{ marginTop: '6rem' }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
