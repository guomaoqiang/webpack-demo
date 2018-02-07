import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './css/tab.scss';

export default class tab extends Component {

	propTypes: {
		index: PropTypes.number,
		tabList: PropTypes.arry
	};
	// 设置默认props数据
	static defaultProps = {
		tabList:['tab1','tab2','tab3','tab4','tab5','tab6']
	};
	tabClick(id) {
		// tab下标线的移动距离
		const left = id*100+'%';
		let data = {
			id,
			left
		};
		// 超过5个tab的是有个tab切换移动效果
		let tab_length = this.props.tabList.length;
		if (tab_length > 5) {
			let rest = tab_length-id;
			console.log(rest);
			if (id > 2) {
				data.tabsLeft = '-20%';
			}
		};
		console.log(data);
		this.props.tabJump(data);
	};
	render() {
		const {
			tabList,
			index,
			tabWidth,
			left,
			tabsLeft,
			tabJump
		} = this.props;
		const style = {
			width: tabWidth,
			transform: 'translate3d('+left+',0,0)'
		};
		const tabStyle = {
			width: tabWidth
		};
		const tabs = {
			className: 'tabs',
			style: {
				transform: 'translate3d('+tabsLeft+',0,0)'
			}
		}
		const tabs_default = {
			className: 'tabs_default',
			style
		}
		return(
			<div {...tabs}>
				{
					tabList && tabList.map((item,v) => {
						let active = index===v ? 'tabs_tab tabs_active':'tabs_tab';
						return (
							<div className={active} style={tabStyle} onClick={()=>this.tabClick(v)} key={v}>{item}</div>
						)
					})	
				}
				<div {...tabs_default}></div>
			</div>
		)
	}
}