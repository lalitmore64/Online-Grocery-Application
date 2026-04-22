import React, { useContext } from 'react';
import Menubar from './components/Menubar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ExploreGrocery from './pages/ExploreGrocery/ExploreGrocery';
import GroceryDetails from './pages/GroceryDetails/GroceryDetails';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import MyOrders from './pages/MyOrders/MyOrders';
import { StoreContext } from './context/StoreContext';

const App = () => {
  const {token} = useContext(StoreContext);
  return (
    <div>
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/exploregrocery' element={<ExploreGrocery />} />
        <Route path='/grocery/:id' element={<GroceryDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={token ? <PlaceOrder /> : <Login />} />
        <Route path='/login' element={token ? <Home /> : <Login />} />
        <Route path='/register' element={token ? <Home /> : <Register />} />
        <Route path='/myorders' element={token ? <MyOrders /> : <Login />} />

      </Routes>
    </div>
  )
}

export default App;