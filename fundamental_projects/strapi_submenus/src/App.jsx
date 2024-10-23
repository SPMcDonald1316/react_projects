import { useAppContext } from './context';

const App = () => {
  const { isSidebarOpen } = useAppContext();
  return <h2>Strapi Starter</h2>;
};
export default App;
