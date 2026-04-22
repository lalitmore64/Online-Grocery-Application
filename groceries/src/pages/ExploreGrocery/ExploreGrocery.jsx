import React, { useState } from 'react';
import GroceryDisplay from '../../components/GroceryDisplay/GroceryDisplay';

const ExploreGrocery = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => e.preventDefault()} >
            <div className="input-group mb-3">
              <select className='form-select mt-2' style={{'maxWidth': '150px'}} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Soft Drink">Soft Drink</option>
                <option value="Cadbury">Cadbury</option>
                <option value="Noodles">Noodles</option>
                <option value="Chips">Chips</option>
                <option value="Milk">Milk</option>
                <option value="Biscuit">Biscuit</option>
                <option value="Cake">Cake</option>
                <option value="Candy">Candy</option>
                <option value="Ice Cream">Ice Cream</option>
                <option value="Juice">Juice</option>
              </select>
              <input type="text" className='form-control mt-2' placeholder='What do you need today?' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
              <button className='btn btn-primary mt-2' type='submit'>
                <i className='bi bi-search'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <GroceryDisplay category={category} searchText={searchText} />
    </>

  )
}

export default ExploreGrocery;