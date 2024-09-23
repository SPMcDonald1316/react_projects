import { useState } from 'react';
import Slide from './Slide';
import { longList } from './data';

const App = () => {
  const [slides, setSlides] = useState(longList);

  return (
    <main>
      <section className='slider-container'>
        {slides.map((slide) => {
          return <Slide key={slide.id} {...slide} />;
        })}
      </section>
    </main>
  );
};
export default App;
