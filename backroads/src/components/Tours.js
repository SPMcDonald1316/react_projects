import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' spanContent='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            image={tour.image}
            date={tour.date}
            title={tour.title}
            info={tour.info}
            location={tour.location}
            duration={tour.duration}
            cost={tour.cost}
          />
        ))}
      </div>
    </section>
  );
};
export default Tours;
