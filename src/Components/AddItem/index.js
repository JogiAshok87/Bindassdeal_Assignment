
import React from 'react';
import './index.css';

const AddItem = ({ newItem, handleChange, handleSubmit, isEditing }) => (
  <form onSubmit={handleSubmit} className='userInputForm'>
    <input
      type="text"
      name="name"
      value={newItem.name}
      onChange={handleChange}
      placeholder="Name"
      required
    />
    <input
      type="text"
      name="category"
      value={newItem.category}
      onChange={handleChange}
      placeholder="Category"
      required
    />
    <input
      type="date"
      name="date"
      value={newItem.date}
      onChange={handleChange}
      required
    />
    <button type="submit">{isEditing ? 'Update' : 'Add'} Item</button>
  </form>
);

export default AddItem;


