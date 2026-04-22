import React, { useState } from 'react';
import {assets} from '../../assets/assets';
import axios from 'axios';
import { addGrocery } from '../../services/groceryService';
import { toast } from 'react-toastify';

const AddGrocery = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
      name: '',
      description: '',
      price: '',
      category: 'Soft Drink'
    });

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (event) => {
      event.preventDefault();
      if (!image) {
        toast.error('Please select an image.');
        return;
      }

      try {
          await addGrocery(data, image);
          toast.success('Added successfully.');
          setData({name: '', description:'', category: 'Cold Drink', price:''});
          setImage(null);
      } catch (error) {
          toast.error('Error occurred');
      }
    }
  return (
    <div className="mx-2 mt-2 ">
  <div className="row">
    <div className=" card col-md-4">
      <div className="card-body">
        <h2 className="mb-4">Add Grocery</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              <img src={image ? URL.createObjectURL(image): assets.upload} alt="" width={98} />
            </label>
            <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" placeholder='Coca-Cola' className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" placeholder='Write description here...' id="description" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select name="category" id="category" className='form-control' onChange={onChangeHandler} value={data.category}>
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
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" name="price" id="price" placeholder='&#8377;400' className='form-control' onChange={onChangeHandler} value={data.price}/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddGrocery;