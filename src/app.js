import React,{ Component } from 'react';

console.log(process.env.NODE_ENV);

export default class App extends Component {

	componentWillMount() {
		console.log(1222);
	};

	render() {
		return (
			<div>
			   <p>312331231</p>
			</div>
		)
	}

}