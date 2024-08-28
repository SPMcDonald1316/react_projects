import Title from './Title';
import Service from './Service';
import { services } from '../data';

const Sevices = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' spanContent='services' />

      <div className='section-center services-center'>
        {services.map((service) => (
          <Service
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Sevices;
