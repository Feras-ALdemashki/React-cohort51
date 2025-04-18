export const Buttons = ({ categories, onClick, selectedCat }) => {
  return (
    <div className="buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onClick(category)}
          className={`btn ${selectedCat === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
