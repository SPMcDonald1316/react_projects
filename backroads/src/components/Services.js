import Title from './Title';

const Sevices = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' spanContent='services' />

      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'>
            <i className='fa-solid fa-wallet'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              convallis, urna ac pretium posuere, justo.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <i className='fa-solid fa-tree'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>endless hiking</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              convallis, urna ac pretium posuere, justo.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <i className='fa-solid fa-socks'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>amazing comfort</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              convallis, urna ac pretium posuere, justo.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Sevices;
