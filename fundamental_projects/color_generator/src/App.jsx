import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = useState(new Values('#35274e').all(10));

  const changeColorList = (color) => {
    setColors(new Values(color).all(10));
  };

  return (
    <main>
      <Form changeColorList={changeColorList} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
