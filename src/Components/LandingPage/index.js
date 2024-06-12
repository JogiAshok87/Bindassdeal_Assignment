import React, { Component } from 'react';
import ItemList from '../ItemList';
import AddItem from '../AddItem';
import './index.css';

class LandingPage extends Component {
  state = {
    items: [
      { id: 1, name: 'Learn JavaScript', category: 'Programming', date: '2024-06-01' },
      { id: 2, name: 'Introduction to HTML', category: 'Web Development', date: '2024-06-02' },
      { id: 3, name: 'CSS Basics', category: 'Web Development', date: '2024-06-03' },
      { id: 4, name: 'React for Beginners', category: 'Front-End Frameworks', date: '2024-06-04' },
      { id: 5, name: 'Node.js Essentials', category: 'Back-End Development', date: '2024-06-05' },
      { id: 6, name: 'Understanding Databases', category: 'Database Management', date: '2024-06-06' },
      { id: 7, name: 'Version Control with Git', category: 'Tools', date: '2024-06-07' },
      { id: 8, name: 'API Development', category: 'Back-End Development', date: '2024-06-08' },
      { id: 9, name: 'UI/UX Design Principles', category: 'Design', date: '2024-06-09' },
      { id: 10, name: 'Agile Methodologies', category: 'Project Management', date: '2024-06-10' },
    ],
    editingItem: null,
    newItem: { id: '', name: '', category: '', date: '' },
    filterText: ''
  };

  handleAddItem = (newItem) => {
    this.setState(prevState => ({
      items: [...prevState.items, { ...newItem, id: prevState.items.length + 1 }],
      newItem: { id: '', name: '', category: '', date: '' },
      filterText:''
    }));
  };

  handleEdit = (item) => {
    this.setState({ editingItem: item, newItem: item });
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newItem: {
        ...prevState.newItem,
        [name]: value
      },
      filterText: name === 'name' ? value : prevState.filterText 
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, newItem, editingItem } = this.state;

    if (editingItem) {
      this.setState({
        items: items.map(item => item.id === editingItem.id ? newItem : item),
        editingItem: null,
        newItem: { id: '', name: '', category: '', date: '' },
        filterText: ''
      });
    } else {
      this.handleAddItem(newItem);
    }
  };

  render() {
    const { items, newItem, editingItem, filterText } = this.state;

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div className='landing-page'>
        <h1>Home Page</h1>
        <AddItem
          newItem={newItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isEditing={!!editingItem}
        />
        <ItemList items={filteredItems} onEdit={this.handleEdit} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default LandingPage;

