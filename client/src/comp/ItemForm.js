import React, { Component } from 'react'
import axios from 'axios'

class ItemForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      name: this.props.item.name,
      description: this.props.item.description
		}
	}

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const item = {name: this.state.name, description: this.state.description }
    axios.put(
      `http://localhost:3001/api/v1/items/${this.props.item.id}.json`,
      {item: item}
      )
    .then(response => {
      console.log(response)
      this.props.updateItem(response.data)
    })
    .catch(error => console.log(error.response))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="name" placeholder='Enter a Title or Date or Day'
            value={this.state.name} onChange={this.handleInput}
            ref={this.props.nameRef} />
					<textarea className='input' name="description" placeholder='What yo want to do??'
            value={this.state.description} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default ItemForm