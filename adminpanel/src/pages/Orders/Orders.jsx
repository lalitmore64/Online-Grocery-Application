import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './Orders.css';

const statusConfig = {
  'Pending': { color: '#f59e0b', bg: '#fffbeb', border: '#fde68a' },
  'Out for Delivery': { color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' },
  'Delivered': { color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0' },
};

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8080/api/orders/all");
    setData(response.data);
  };

  const updateStatus = async (event, orderId) => {
    const response = await axios.patch(
      `http://localhost:8080/api/orders/status/${orderId}?status=${event.target.value}`
    );
    if (response.status === 200) {
      await fetchOrders();
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-wrapper">
      <div className="orders-header">
        <h2>Orders</h2>
        <p>{data.length} {data.length === 1 ? 'order' : 'orders'} total</p>
      </div>

      <div className="orders-list">
        {data.length === 0 && (
          <div className="empty-state">No orders yet.</div>
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
            <div className="order-card" key={index}>

              {/* Parcel icon */}
              <div className="order-icon">
                <img src={assets.parcel} alt="parcel" />
              </div>

              {/* Product name + address */}
              <div className="order-info">
                <div className="order-items" title={itemsLabel}>
                  {itemsLabel}
                </div>
                <div className="order-address" title={order.userAddress}>
                  {order.userAddress}
                </div>
              </div>

              {/* Price + item count */}
              <div className="order-meta">
                <span className="order-price">₹{order.amount.toFixed(2)}</span>
                <span className="order-count">
                  {order.orderedItems.length} {order.orderedItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* Status dropdown */}
              <div className="order-status-wrap">
                <select
                  className={`status-select ${statusClass}`}
                  onChange={(e) => updateStatus(e, order.id)}
                  value={order.orderStatus}
                >
                  <option value="Pending">Pending</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;