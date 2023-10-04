import React, { useState } from "react";
import "../Style/FilterBar.css";

const FilterBar = ({ onFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    name: "",
    company: "",
    price: "",
    featured: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
  };

  const handleSearch = () => {
    const queryParams = [];
    for (const key in filterCriteria) {
      if (filterCriteria[key]) {
        queryParams.push(`${key}=${filterCriteria[key]}`);
      }
    }
    const queryString = queryParams.join("&");

    onFilter(queryString);
  };

  return (
    <div className="filter-bar">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          className="name"
          type="text"
          value={filterCriteria.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <select
          name="company"
          id="company"
          value={filterCriteria.company}
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="caressa">Caressa</option>
          <option value="liddy">Liddy</option>
          <option value="ikea">Ikea</option>
          <option value="marcos">Marcos</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          className="price"
          type="text"
          placeholder="0"
          value={filterCriteria.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="featured">Featured:</label>
        <select
          name="featured"
          value={filterCriteria.featured}
          onChange={handleInputChange}
        >
          <option value="">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <input
        className="search-button button"
        type="button"
        value="Search"
        onClick={handleSearch}
      />
    </div>
  );
};

export default FilterBar;
