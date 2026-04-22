import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import GroceryItem from '../GroceryItem/GroceryItem';

const GroceryDisplay = ({category, searchText}) => {

    const {groceryList} = useContext(StoreContext);
    const filteredGrocery = groceryList.filter(grocery => (
       (category === 'All' || grocery.category === category) &&
       grocery.name.toLowerCase().includes(searchText.toLowerCase())
    ));
  return (
    <div className="container">
        <div className="row">
          {filteredGrocery.length > 0 ? (
              filteredGrocery.map((grocery, index) => (
                <GroceryItem key={index}
                    name={grocery.name}
                    description={grocery.description}
                    id={grocery.id}
                    imageUrl={grocery.imageUrl}
                    price={grocery.price}/>
              ))
          ) : (
              <div className="text-center mt-4">
                  <h4>No Item Found</h4>
              </div>
          )}
        </div>
    </div>
  )
}

export default GroceryDisplay;