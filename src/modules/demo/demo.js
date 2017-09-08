import React,{ Component } from 'react';
import './index.scss';

import Loading from '../../components/loading';



export default class Demo extends Component {

	render() {
		return (
			<div className='demo'>
				<Loading show={true} opacity={0}/>
				<div>1232312</div>
			</div>
		)
	}
}