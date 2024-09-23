import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
      setActiveJob(data[0]);
    })();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  const displayJob = (jobOrder) => {
    const job = jobs.find((job) => job.order === jobOrder);
    setActiveJob(job);
  };

  return (
    <section className='jobs-center'>
      <BtnContainer jobs={jobs} displayJob={displayJob} />
      <JobInfo activeJob={activeJob} />
    </section>
  );
}

export default App;
