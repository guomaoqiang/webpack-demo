import React,{ Component } from 'react';
import './index.scss';

import Toast from '../../components/toast';

// import 'antd-mobile/dist/antd-mobile.css';
import { PullToRefresh, ListView, Button } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

export default class Demo extends Component {

	open() {
		this.refs.toast.open('你很厉害哦');
	}

	render() {
		return (
			<div className='demo'>
				<Toast ref='toast'/>
				<div onClick={() => {this.open()}}>1232312</div>
				<Button>start</Button>

			</div>
		)
	}
}