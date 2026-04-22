import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddGrocery from './pages/AddGrocery/AddGrocery'
import ListGrocery from './pages/ListGrocery/ListGrocery'
import Orders from './pages/Orders/Orders'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
import { ToastContainer } from 'react-toastify';

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    }
  return (
    <div className="d-flex" id="wrapper">
            
            <Sidebar sidebarVisible={sidebarVisible} />
            
            
            <div id="page-content-wrapper">
               
               <Menubar toggleSidebar={toggleSidebar} />
               <ToastContainer />
            
                <div className="container-fluid">
                    <Routes>
                        <Route path='/add' element = {<AddGrocery />} />
                        <Route path='/list' element = {<ListGrocery />} />
                        <Route path='/orders' element = {<Orders />} />
                        <Route path='/' element = {<ListGrocery />} />
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App