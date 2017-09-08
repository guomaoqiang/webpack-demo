import React,{ Component } from 'react';

import PropTypes from 'prop-types';

import './index.scss';

class Loading extends Component {

	propTypes: {
		show: PropTypes.bool, // 是否展示
		opacity: PropTypes.number, // 透明程度，0不透明，1半透明，2全透明
	};
	// 设置默认props数据
	static defaultProps = {
		show: true,
		opacity: 0,
	};
	render() {
		const {
			show,
			opacity
		} = this.props;
		const dis = show ? 'block': 'none';
		const loading = `loading show${opacity}`;
		return (
			<div className={loading} style={{'display':dis}}>
				<div className='loading_warp'>
					<div className='loading_animation'></div>
					<p>加载中...</p>
				</div>
			</div>
		)
	};
}


export default Loading;