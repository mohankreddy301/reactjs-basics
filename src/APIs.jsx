import { useEffect, useState } from "react";
import "../src/APIs.css";

const APIs = () => {
  const [userData, setUserData] = useState([]);
  const fetchAPIData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setUserData(data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function getData() {
      fetchAPIData();
    }
    getData();
  }, []);

  return (
    <div className="gallery-container">
      {userData.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.thumbnail} className="" />
      <p>{item.description}</p>
    </div>
  );
};

export default APIs;
