import React from 'react';

const Categories = ({filterItems, categories}) => {
  return (
  <main className="btn-container">
   
    {categories.map( (category,index) => {
      return (
      <button 
        type="button" 
        key={index} 
        className="filter-btn" 
        onClick={() => filterItems(category)}>
          {category}
      </button>
      )
    })}
    
  </main>
    )
};

export default Categories;
