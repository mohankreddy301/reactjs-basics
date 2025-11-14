import { BaseURL } from "../constants/constants.js";
import "../components/product.css";
import { useEffect, useState, useMemo } from "react";
import ProductList from "./products/products-list.jsx";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("all");
  const [filteredData, setFiltereddata] = useState([]);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await fetch(BaseURL);
      const responsedata = await response.json();

      const products = responsedata.products;
      if (products.length > 0) {
        setUserData(products);
        setFiltereddata(products);
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
  // state to track which navbar property is selected (e.g. 'price', 'rating')

  // compute the data to display based on the selected filter/sort

  const handleNavSelect = (id) => {
    // toggle behavior: click again to clear filter
    console.log("Selected filter:", id);
    setFilterBy(id);
    handleNavMenu(id);
  };
  function handleNavMenu(value) {
    let data;
    switch (value) {
      case "stock":
        data = userData.filter((item) => {
          return item.stock < 80;
        });
        setFiltereddata(data);
        break;
      case "price":
        data = userData.filter((item) => {
          return item.price < 12;
        });
        setFiltereddata(data);
        break;
      case "rating":
        data = userData.filter((item) => {
          return item.rating < 4;
        });
        setFiltereddata(data);
        break;
      case "discountPercentage":
        data = userData.filter((item) => {
          return item.discountPercentage > 10;
        });
        setFiltereddata(data);
        break;
      default:
        setFiltereddata(userData);
        break;
    }
  }
  return (
    <div>
      <NavbarItem onSelect={handleNavSelect} active={filterBy} />
      <p className="filter-label">
        <strong>Filter count is: {filteredData.length}</strong>
      </p>
      {loading ? (
        <div className="loader">
          <p>Loading products...</p>
        </div>
      ) : (
        <ProductList itemsList={filteredData} />
      )}
    </div>
  );
};

const NavbarItem = ({ onSelect, active }) => {
  const navData = [
    { id: "all", title: "All" },
    { id: "stock", title: "Stock" },
    { id: "price", title: "Price" },
    { id: "rating", title: "Rating" },
    { id: "discountPercentage", title: "Discount" },
  ];

  return (
    <nav className="nav-bar">
      <ul>
        {navData.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelect) onSelect(item.id);
                }}
                className={isActive ? "nav-active" : ""}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Home;
