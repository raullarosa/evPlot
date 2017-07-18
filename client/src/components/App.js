import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	state = {
		name: "",
		email: "",
		videoType: "",
		videoLink: "",
		location: {
			address: "",
			city: "",
			state: "",
			zipcode: null
		},
		chargingStation: ""
	}

	onSubmit(){
		console.log(this.state)
	}

	render() {
		return (
			<div className="container">
				<div className="overview">
					<h1 className="boldest font48">evPlot</h1>
					<h5 className="light font24">
						Submit your experience at a Tesla Supercharger
							<br />
						or Destination Charging station below
						</h5>
				</div>
				<Grid 
					container
					direction='row'
					justify='center'
					align='flex-start'
				>
					<Paper className="padding10 minWidth" item sm={12} md={4} elevation={4}>
						<TextField
							id="name"
							label="Full Name"
							value={this.state.name}
							onChange={event => this.setState({ name: event.target.value })}
							fullWidth
						/>	
						<TextField
							id="name"
							label="Email"
							value={this.state.email}
							onChange={event => this.setState({ email: event.target.value })}
							fullWidth
						/>	
						<TextField
							id="name"
							label="Link"
							value={this.state.videoLink}
							onChange={event => this.setState({ videoLink: event.target.value })}
							fullWidth
						/>	
						<TextField
							id="name"
							label="Street Address"
							value={this.state.location.address}
							onChange={event => this.setState({ location: {address: event.target.value }})}
							fullWidth
						/>	
						<TextField
							id="name"
							label="City"
							value={this.state.location.city}
							onChange={event => this.setState({ location: {city: event.target.value }})}
						/>	
						<TextField
							id="name"
							label="State"
							value={this.state.location.state}
							onChange={event => this.setState({ location: {state: event.target.value }})}
						/>	
						<TextField
							id="name"
							label="Zip Code"
							value={this.state.location.zipcode}
							onChange={event => this.setState({ location: {zipcode: event.target.value }})}
						/>	
						<Button 
							raised 
							color="primary" 
							onClick={this.onSubmit()}
							fullWidth
						>
							Submit
						</Button>
					</Paper>
				</Grid>
			</div>
		)
	}
}
