import React, { useState, useEffect } from "react";
import Item from "./Item";
import "../Style/StoreItems.css";

const StoreItems = ({ data }) => {
  const [items, setItems] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          setItems(data.products);
        } else {
          console.error("API response is missing products array:", data);
          setItems([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setItems([]);
      });
  }, []);

  return (
    <div className="store-div">
      {data.map((item) => (
        <Item
          key={item._id}
          name={item.name}
          company={item.company}
          price={item.price}
          featured={item.featured}
          image={item.picture}
        />
      ))}
    </div>
  );
};

export default StoreItems;
