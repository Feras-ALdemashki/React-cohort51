import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        // in the assignment it says that the path for the all products or
        categories should be "/products/categories" so when first opening the
        app it will return 404 page not found. hope i understood this right.
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
