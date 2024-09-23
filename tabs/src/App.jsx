import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';

const url = 'https://www.course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <h2>Jobs Starter</h2>
      <JobInfo />
    </main>
  );
}

export default App;
