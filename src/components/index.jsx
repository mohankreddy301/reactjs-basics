import { BaseURL } from "../constants/constants.js";
import "../components/product.css";
import { useEffect, useState } from "react";
import ProductList from "./products/products-list.jsx";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await fetch(BaseURL);
      const responsedata = await response.json();

      const products = responsedata.products;
      if (products.length > 0) {
        setUserData(products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    function fetchuserdata() {
      fetchdata();
    }
    fetchuserdata();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <p>Loading products...</p>
        </div>
      ) : (
        <ProductList itemsList={userData} />
      )}
    </div>
  );
};

export default Home;
