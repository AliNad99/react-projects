import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const singleCategories = ["all", ...new Set (items.map( item => item.category))];


function App() {

  
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(singleCategories);

  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
    console.log(newItems);
  }

const categories = ["all", ...new Set(itesm.map ( item => item.category))]
  
  return (
    <main>
      <section className="menu">
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
      </section>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems}/>

    </main>
  )
}

export default App;
