import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';

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
    <section className='jobs-center'>
      {/* button container */}
      <JobInfo jobs={jobs} />
    </section>
  );
}

export default App;
