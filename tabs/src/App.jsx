import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <main>
      <h2>Jobs Starter</h2>
    </main>
  );
}

export default App;
