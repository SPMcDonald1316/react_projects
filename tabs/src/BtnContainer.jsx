const BtnContainer = ({ jobs, displayJob }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job) => {
        return (
          <button
            key={job.id}
            className='job-btn'
            onClick={() => displayJob(job.order)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
