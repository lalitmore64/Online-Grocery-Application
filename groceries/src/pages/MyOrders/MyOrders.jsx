import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import "./MyOrders.css";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8080/api/orders", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    setData(response.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="myorders-wrapper">
      <div className="myorders-header">
        <div className="myorders-header-left">
          <h2>My Orders</h2>
          <p>{data.length} {data.length === 1 ? 'order' : 'orders'} placed</p>
        </div>
        <button className="refresh-btn" onClick={fetchOrders}>
          <i className="bi bi-arrow-clockwise"></i>
          Refresh
        </button>
      </div>

      <div className="myorders-list">
        {data.length === 0 && (
          <div className="myorders-empty">No orders yet.</div>
        )}

        {data.map((order, index) => {
          const status = order.orderStatus;
          const statusClass =
            status === 'Pending'          ? 'status-pending' :
            status === 'Out for Delivery' ? 'status-out'     :
                                            'status-delivered';

          const itemsLabel = order.orderedItems
            .map((item, i) =>
              i === order.orderedItems.length - 1
                ? `${item.name} x${item.quantity}`
                : `${item.name} x${item.quantity}, `
            )
            .join('');

          return (
            <div className="myorder-card" key={index}>

              {/* Icon */}
              <div className="myorder-icon">
                <img src={assets.parcelguy} alt="order" />
              </div>

              {/* Items + price + count */}
              <div className="myorder-info">
                <div className="myorder-items" title={itemsLabel}>
                  {itemsLabel}
                </div>
                <div className="myorder-meta-row">
                  <span className="myorder-price">₹{order.amount.toFixed(2)}</span>
                  <span className="myorder-count">
                    {order.orderedItems.length} {order.orderedItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
              </div>

              {/* Status badge */}
              <div className={`myorder-status ${statusClass}`}>
                <span className="status-dot" />
                {order.orderStatus}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;