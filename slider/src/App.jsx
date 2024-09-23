import { useState } from 'react';
import Slide from './Slide';
import data from './data';

const App = () => {
  const [slides, setSlides] = useState(data);

  return (
    <main>
      <section className='slider-container'>
        {slides.map((slide) => {
          <Slide {...slide} />;
        })}
      </section>
    </main>
  );
};
export default App;
