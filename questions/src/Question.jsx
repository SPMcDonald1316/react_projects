const Question = ({ title, info }) => {
  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-btn'>
          +
        </button>
      </header>
      <p>{info}</p>
    </div>
  );
};

export default Question;
