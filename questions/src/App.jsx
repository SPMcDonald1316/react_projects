import questions from './data';
import Question from './Question';

function App() {
  return (
    <main>
      <div className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
