import Title from './Title';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' spanContent='tours' />
      <div className='section-center featured-center'>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='' className='tour-img' alt='' />
            <p className='tour-date'>august 26th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>tibet adeventure</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              metus dui, vehicula vel lectus pharetra, sagittis tempus turpis.
              Donec quis ipsum sagittis, varius orci nec.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='' className='tour-img' alt='' />
            <p className='tour-date'>october 1st, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              metus dui, vehicula vel lectus pharetra, sagittis tempus turpis.
              Donec quis ipsum sagittis, varius orci nec.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='' className='tour-img' alt='' />
            <p className='tour-date'>september 15th, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              metus dui, vehicula vel lectus pharetra, sagittis tempus turpis.
              Donec quis ipsum sagittis, varius orci nec.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='' className='tour-img' alt='' />
            <p className='tour-date'>october 1st, 2020</p>
          </div>
          <div className='tour-info'>
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              metus dui, vehicula vel lectus pharetra, sagittis tempus turpis.
              Donec quis ipsum sagittis, varius orci nec.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Tours;
