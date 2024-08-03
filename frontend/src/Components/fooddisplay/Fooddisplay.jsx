import React, { useContext, useState } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../Context/Storecontext';
import { assets } from '../../assets/assets';

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [itemCounts, setItemCounts] = useState(Array(food_list.length).fill(0));

  const handleIncrement = (index) => {
    setItemCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleDecrement = (index) => {
    setItemCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(newCounts[index] - 1, 0);
      return newCounts;
    });
  };

  // Filter the food_list based on the selected category
  const filteredFoodList = category === "All" ? food_list : food_list.filter(food => food.category === category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-item">
        {filteredFoodList && filteredFoodList.map((food, index) => (
          <div key={index}>
            <div className="food-item-img-container">
              <img src={food.image} alt={food.name} />
            </div>
            {itemCounts[index] === 0 ? (
              <img 
                className='add'
                onClick={() => handleIncrement(index)}
                src={assets.add_icon_white}
                alt="Add"
              />
            ) : (
              <div className='food-item-counter'>
                <img
                  className='remove'
                  onClick={() => handleDecrement(index)}
                  src={assets.remove_icon_red}
                  alt="Remove"
                />
                <p className='foodcap'>{itemCounts[index]}</p>
                <img
                  className='add'
                  onClick={() => handleIncrement(index)}
                  src={assets.add_icon_green}
                  alt="Add"
                />
              </div>
            )}
            <div className="foodinfo">
              <div className="food-item-name-rating">
                <h3>{food.name}</h3>
                <img src={assets.rating_starts} alt="Rating stars" />
              </div>
              <p className="food-item-desc">{food.description}</p>
              <p className="food-item-price">${food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fooddisplay;
