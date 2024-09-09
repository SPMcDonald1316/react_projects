const Tour = ({ image, info, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{info}</p>
      <p>{price}</p>
    </div>
  );
};
export default Tour;
