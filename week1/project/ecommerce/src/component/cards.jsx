export const Cards = ({ list }) => {
  return (
    <div className="item-list">
      {list.map((item) => {
        return (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
