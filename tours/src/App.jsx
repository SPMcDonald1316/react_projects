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

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours</h2>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={fetchData}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Tours tours={tours} removeTour={removeTour} refresh={fetchData} />
      )}
    </main>
  );
};
export default App;
