import './App.css';

function Catagories({filterItems}) {
  return (
    <div className="btn-container">
    <button className="filter-btn" onClick ={()=> filterItems('all')}>all</button>
    <button className="filter-btn" onClick ={()=> filterItems('breakfast')}>breakfast</button>
    
    <button className="filter-btn" onClick ={()=> filterItems('lunch')}>lunch</button>
    <button className="filter-btn" onClick ={()=> filterItems('shakes')}>breakfast</button>
    
    </div>
  );
}

export default Catagories;
