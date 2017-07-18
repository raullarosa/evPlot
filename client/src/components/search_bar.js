import React, { Component } from 'react'
import Input from 'material-ui/Input/Input';

export default class SearchBar extends Component {
	
	onInputChange(event) {
		console.log(event.target.value)
	}
	
	render () {
		return (
			<div>
				<Input 
					placeholder="Search Youtube"
					onChange={this.onInputChange}
				/>
			</div>
		)
	}
}