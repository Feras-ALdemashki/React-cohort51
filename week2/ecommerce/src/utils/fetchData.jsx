export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
