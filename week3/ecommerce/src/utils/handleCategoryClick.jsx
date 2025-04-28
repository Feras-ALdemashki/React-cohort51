const handleCategoryClick = (category, setSelectedCategory) => {
  setSelectedCategory((prevCategory) =>
    prevCategory === category ? null : category
  );
};
export default handleCategoryClick;
