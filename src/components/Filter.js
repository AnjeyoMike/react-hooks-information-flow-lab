// Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
    </select>
  );
}

export default Filter;
