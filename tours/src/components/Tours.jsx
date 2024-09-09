import Tour from './Tour';

const Tours = ({ tours, removeTour, refresh }) => {
  return (
    <>
      {tours.length ? (
        <section>
          <div className='title'>
            <h2>our tours</h2>
            <div className='title-underline'></div>
          </div>
          <div className='tours'>
            {tours.map((tour) => {
              return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}
          </div>
        </section>
      ) : (
        <section>
          <div className='title'>
            <h2>No tours</h2>
            <div className='title-underline'></div>
          </div>
          <div className='tours'>
            <button type='button' className='btn' onClick={refresh}>
              refresh
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Tours;
