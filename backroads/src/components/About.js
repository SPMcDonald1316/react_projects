import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' spanContent='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque
            sem, auctor non est sit amet, maximus tincidunt felis. Aenean sapien
            massa, dignissim vitae efficitur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque
            sem, auctor non est sit amet, maximus tincidunt felis. Aenean sapien
            massa, dignissim vitae efficitur.
          </p>
          <a href='#home' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
