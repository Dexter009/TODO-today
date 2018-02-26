import React, { Component } from 'react'

class Item extends Component {
	handleClick = () => { this.props.onClick(this.props.item.id) }

	handleDelete = () => { this.props.onDelete(this.props.item.id) }

	render () {
		return(
		<div className="tile">
		  	
		    <h4 onClick={this.handleClick}>{this.props.item.name}</h4>
		    <p onClick={this.handleClick}>{this.props.item.description}</p>
		    <div ><span className="deleteButton" onClick={this.handleDelete}>Remove</span></div>
		  </div>

		  
		)
	}
}

export default Item