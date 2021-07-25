import './App.css';
import React, { useState } from 'react';
import Menu from './Menu';
import Catagories from './Catagories';
import items from './data';
function App() {
  const [menuItems,setmenuItems] = useState(items);
  const filterItems = (category) => {
    if(category === 'all'){
      setmenuItems(items);
      return;
    }
    
    const newItems = items.filter((item) => item.category === category);
    setmenuItems(newItems); 
  }
  return (
    <main>
      <section className="menu section">
         <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
         </div>

         <Catagories filterItems={filterItems}/>
         <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
