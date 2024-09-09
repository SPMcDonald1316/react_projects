const url = 'https://www.course-api.com/react-tours-project';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTour = (id) => {
    let filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tours);

  return (
    <main>
      {isLoading ? <Loading /> : <Tours tours={tours} func={removeTour} />}
    </main>
  );
};
export default App;
