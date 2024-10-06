import Birthday from './Birthday';

const List = ({ birthdays }) => {
  return (
    <section>
      {birthdays.map((birthday) => {
        return <Birthday key={birthday.id} {...birthday} />;
      })}
    </section>
  );
};
export default List;
