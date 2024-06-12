import React from 'react';
import './index.css';

const ItemList = ({ items, onEdit, onDelete }) => (
  <div className="item-list">
    {items.map(item => (
      <div key={item.id} className="item">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Date: {item.date}</p>
        <button onClick={() => onEdit(item)} className='editbutton'>Edit</button>
        <button onClick={() => onDelete(item.id)} className='deletebutton'>Delete</button>
      </div>
    ))}
  </div>
);

export default ItemList;
