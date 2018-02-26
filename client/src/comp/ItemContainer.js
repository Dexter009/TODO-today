import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'
import ItemForm from './ItemForm'
import update from 'immutability-helper'
import Notification from './Notification'

class ItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      editingItemId: null,
      notification: '',
      transitionIn: false,
      
    }
  }

  componentDidMount() {
    
    axios.get('http://localhost:3001/api/v1/items.json' , {headers: {'Content-Type':'applicaion/json'}})
    .then(response => {
      this.setState({items: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewItem = () => {
    axios.post('http://localhost:3001/api/v1/items.json',{item: {name: '', description: ''}})
    .then(response => {
      const items = update(this.state.items, { $splice: [[0, 0, response.data]]})
      this.setState({items: items, editingItemId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateItem = (item) => {
    const itemIndex = this.state.items.findIndex(x => x.id === item.id)
    const items = update(this.state.items, {[itemIndex]: { $set: item }})
    this.setState({items: items, notification: 'All changes saved', transitionIn: true})
  }

  deleteItem = (id) => {
    axios.delete(`http://localhost:3001/api/v1/items/${id}.json`,{headers: {'Content-Type':'applicaion/json'}})
    .then(response => {
      const itemIndex = this.state.items.findIndex(x => x.id === id)
      const items = update(this.state.items, { $splice: [[itemIndex, 1]]})
      this.setState({items: items})
    })
    .catch(error => console.log(error.response))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingItemId: id}, () => { this.name.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newIdeaButton" onClick={this.addNewItem} >
            New Task
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.state.items.map((item) => {
          if(this.state.editingItemId === item.id) {
            return(<ItemForm item={item} key={item.id} updateItem={this.updateItem}
                    nameRef= {input => this.name = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Item item={item} key={item.id} onClick={this.enableEditing}
                    onDelete={this.deleteItem} />)
          }
        })}
      </div>
    );
  }
}

export default ItemContainer