import { BaseURL } from "../constants/constants.js";
import "../components/product.css";
import { useEffect, useState } from "react";
import ProductList from "./products/products-list.jsx";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch(BaseURL);
      const responsedata = await response.json();

      const products = responsedata.products;
      if (products.length > 0) {
        setUserData(products);
      }
    } catch (error) {
      console.log(error);
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
      <ProductList itemsList={userData} />
    </div>
  );
};

export default Home;
