const Title = ({ title, spanContent = '' }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{spanContent}</span>
      </h2>
    </div>
  );
};
export default Title;
