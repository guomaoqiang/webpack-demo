import React,{Component} from 'react';

import { tapJump } from 'action/action';
import { connect } from 'react-redux';


import Tab from './components/tab.js';

import './css/index.scss';

// const mapStateToProps = (state) => {
// 	console.log(state);
// 	const {
// 		index,
// 		left,
// 		tabWidth
// 	} = state.tabJump;
// 	return {
// 		...state.tabJump
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		tabJump:(e) => {dispatch(tapJump(e))}
// 	}
// }

// const TabC = connect(mapStateToProps,mapDispatchToProps)(Tab);

@connect(
	state => {
		return {...state.tabJump}
	},
	dispatch => {
		return {
			tabJump:(e) => {dispatch(tapJump(e))}
		}
	}
)

class New extends Component {

	render() {
		console.log(this.props);
		// const {
		// 	state,
		// 	tabJump
		// } = this.props;
		return (
			<div className='news'>
				<Tab/>
			</div>
			
		)
	}
}


export default  New

