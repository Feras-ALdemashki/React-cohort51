export const filterProducts = (data, category) => {
  const newCategory = category
    .replace(/^FAKE:\s*/, "")
    .trim()
    .toLowerCase();
  return data.filter((product) => {
    const newProductCategory = product.category.trim().toLowerCase();
    return newProductCategory === newCategory;
  });
};
