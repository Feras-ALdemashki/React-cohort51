export const Buttons = ({ categories, onClick }) => {
  return (
    <div className="buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onClick(category)}
          className="btn"
        >
          {category}
        </button>
      ))}
    </div>
  );
};
