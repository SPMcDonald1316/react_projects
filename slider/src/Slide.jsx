const Slide = ({ image, name, title, quote }) => {
  return (
    <section className='slide'>
      <img src={image} alt={name} className='person-img' />
      <h5 className='name'>{name}</h5>
      <p>{title}</p>
      <p className='text'>{quote}</p>
    </section>
  );
};
export default Slide;
