import React,{ Component } from 'react';
import './index.scss';

import Toast from '../../components/toast';



export default class Demo extends Component {

	open() {
		this.refs.toast.open('你很厉害哦');
	}

	render() {
		return (
			<div className='demo'>
				<Toast ref='toast'/>
				<div onClick={()=>{this.open()}}>1232312</div>
			</div>
		)
	}
}