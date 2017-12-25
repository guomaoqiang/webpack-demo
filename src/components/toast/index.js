import React , { Component } from 'react';
import './index.scss';

export default class toast extends Component {
	state = {
		text: '',
		show: false
	}

	componentWillMount() {

	}

	open(text) {
		this.setState({
			show: true,
			text: text
		})
		setTimeout(() => {
			this.setState({
				show: false
			})
		},2000)
	}

	render() {
		const {
			text,
			show
		} = this.state;
		const opts = {
			className: show ? 'toast' : 'toast dsn'
		};
		return (
			<div {...opts}>
				<div className='text'>{text}</div>
			</div>
		)
	}
}