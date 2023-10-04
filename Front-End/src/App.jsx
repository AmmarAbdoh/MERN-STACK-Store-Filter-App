import React, { useState, useEffect } from "react";
import FilterBar from "./Components/FilterBar";
import StoreItems from "./Components/StoreItems";

const App = () => {
  const [filteredData, setFilteredData] = useState([]);

  const fetchFilteredData = async (query) => {
    console.log(query);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products?${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        setFilteredData(data.products);
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <div className="main-div">
      <FilterBar onFilter={fetchFilteredData} />
      <StoreItems data={filteredData} />
    </div>
  );
};

export default App;
